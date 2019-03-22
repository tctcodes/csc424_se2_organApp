#################
# This program will read csv files from a specified folder and create sql table syntax.
#- it will open all files in an array before beginning the script
#- make sure there are only files in the csv directort  
#- WARNING all files that are opened in this script will be overwritten
#################
import os
import csv
import sys
import re

# paths
csvPath ="./csv/phase3"
sqlPath ="./sql/phase3"
formatpath ="./format/phase3"

# _id regular expression
idre= r'_ID\b'
research = re.compile(idre,re.I)
### close file arrays
def closeFiles(filesArray):
    for fi in filesArray:
        fi.close()
### 
        
### special format type file writer
def specialFormatType(readArray, formatType):
    if formatType == '':
        return
    for t in readArray:
        #print("this ",t.rstrip())
        if (t.rstrip() == formatType):              # rstrip removes trailing white space e.g. '\n'
            return # already have formatType
    print("Adding format: " + formatType)
    readArray.append(formatType+"\n")
### 

### sort format array and write to file
def sortArrayWriteFile(inarray,outfile):
    inarray.sort()
    for frmt in inarray:
        outfile.write(frmt)
###
    
############## START ##########################     



# get file list
files = [] #file names
files = os.listdir(csvPath)
print("files in directory, "+csvPath)
print(files)

#warn user and get input
warn = ''
print("\n*******WARNING all output files will be overwritten!*****")
while warn != 'y' and warn != 'n' :
    warn = input("Continue (y,n):")
if warn == 'n':
    print("Script Aborted")
    sys.exit("user said no") #exit program
elif warn != 'y':
    print("input error")
    sys.exit("input error") #exit program
    
# open global format file *if exists*
readFormatsArray = []
try:
    readFormatsArray = open(formatpath+"./globalformats.txt","r").readlines() # get lines
except FileNotFoundError:
    print("Creating new global format file")

#start a fresh file all formats are stored in readFormatsArray
globalFormats = open(formatpath+"./globalformats.txt","w") # formats file append mode

#open CSV to read and write SQL files & Format files
o = [] #open files
w = [] #write files
f = [] #format files
# open and create file arrays .csv .sql .txt
for filename in files :
    print (filename)
    o.append(open(csvPath + "/" + filename,"r"))            
    w.append(open(sqlPath + "/" + filename[:-4]+".sql","w"))
    f.append(open(formatpath + "/" + filename[:-4]+".txt","w"))
print("number of table files: ", len(o))
print("number of write files: ", len(w))

######read file and create a table######
localFormatArray=[]
varType = ''

#for each file
for fi, openFile in enumerate(o) : # index, filename

    #read CSV
    reader = csv.reader(openFile)
    print("CREATE TABLE "+ files[fi][:-4] +" (")
    
    #first line
    w[fi].write("CREATE TABLE "+ files[fi][:-4] +" (\n")

    #create table lines    
    for  line in reader :
        
        # CSV format
        # line[0]   line[1] line[2] line[3] line[4]
        # name      type    size    format  description
        
        # set datatype
        if( line[1] =='num' and research.search(line[0]) != None):  # for all ID's
            varType = 'NUMERIC('+line[2]+'),' 
        elif(line[1]=='num' and line[3] == 'MMDDYY'):
            varType = 'DATE,'
        elif(line[1]=='num' and line[3] == 'TIME'):
            varType = 'TIME,'
        elif(line[1]=='num' and line[3] != ''):                     # end of nums
            varType = 'NUMERIC('+line[2]+'),' 
        elif(line[1]=='num'):
            varType = 'REAL,'
        elif(line[1]=='char'):
            varType = 'VARCHAR('+line[2]+'),'
        else:
            #error of csv input (e.g. ',,,,')
            print("unknown type ", line[1])
            closeFiles(o)
            closeFiles(w)
            closeFiles(f)
            sortArrayWriteFile(readFormatsArray,globalFormats)
            globalFormats.close()
            sys.exit("need new type")

        #add line to the file
        #print("\t{0:35}{1:>15}\t{2:15}".format(line[0],varType, ('-- '+line[3] if line[3]!='' else ''))) # no description
        w[fi].write("\t{0:35}{1:>15}\t{2:15}{3:}\n".format(line[0],varType, ('-- '+line[3] if line[3]!='' else ''),"-- "+line[4]))    
        

        #check and add unique format to the list
        specialFormatType(readFormatsArray,line[3])
        specialFormatType(localFormatArray,line[3])
    
    #Last line of table
    print(");")
    w[fi].write(");\n")
    
    #sort and save local format file 
    sortArrayWriteFile(localFormatArray,f[fi])
    localFormatArray = []   #prep for next file in loop
#
###### End Read Table ######

# close files
closeFiles(o)
closeFiles(w)
closeFiles(f)
sortArrayWriteFile(readFormatsArray,globalFormats)
globalFormats.close()


