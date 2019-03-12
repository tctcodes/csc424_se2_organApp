#################
# This program will read csv files from a specified folder and create sql table syntax.
#- it will open all files in an array before beginning the script
#- make sure there are only files in the csv directort  
#- WARNING all files that are opened in this script will be overwritten
#################
import os
import csv
import sys


csvPath ="./csv/liver"
sqlPath ="./sql/liver"

### close file arrays
def closeFiles(filesArray):
    for fi in filesArray:
        fi.close()
### 
        
### special format type file writer
def specialFormatType(read, formatType):
    if formatType == '':
        return
    for t in read:
        #print("this ",t[:-1])
        if (t[:-1] == formatType):
            #print("copy",t[:-1],formatType)
            return # already have formatType
    print("Adding format: " + formatType)
    read.append(formatType+"\n")
### 
    
# catigories types        

warn = ''
f = [] #file names
f = os.listdir(csvPath)
print("files in directory, "+csvPath)
print(f)
print("\n*******WARNING all output files will be overwritten!*****")
while warn != 'y' and warn != 'n' :
    warn = raw_input("Continue (y,n):")

if warn == 'n':
    print("Script Aborted")
    sys.exit("user said no") #exit program
elif warn != 'y':
    print("input error")
    sys.exit("input error") #exit program
    

formats = open("./liverFormat.txt","w")  # formats file append mode
readFormatsArray = open("./liverFormat.txt","r").readlines() # get lines
o = [] #open files
w = [] #write files

# open and create files .csv .sql
for filename in f :
    print (filename)
    o.append(open(csvPath + "/" + filename,"r"))
    w.append(open(sqlPath + "/" + filename[:-4]+".sql","w"))
print("number of table files: ", len(o))
print("number of write files: ", len(w))

######read file and create a table######
varType = '';
for fi, openFile in enumerate(o) :
    reader = csv.reader(openFile)
    print("CREATE TABLE "+ f[fi][:-4] +" (")
    #create table line
    w[fi].write("CREATE TABLE "+ f[fi][:-4] +" (\n")
    for  line in reader :
        # line[0]   line[1] line[2] line[3] line[4]
        # name      type    size    format  description
        # set datatype
        if(line[1]=='num'):
            #varType = 'INTEGER('+line[2]+'),'
            varType = 'INTEGER,'
        elif(line[1]=='char'):
            varType = 'VARCHAR('+line[2]+'),'
        else:
            #error of input (e.g. ',,,,')
            print("unknown type ", line[1])
            closeFiles(o)
            closeFiles(w)
            sys.exit("need new type")

        #add line to the file
        #print("\t{0:35}{1:>15}\t{2:15}".format(line[0],varType, ('-- '+line[3] if line[3]!='' else ''))) # no description
        w[fi].write("\t{0:35}{1:>15}\t{2:15}{3:}\n".format(line[0],varType, ('-- '+line[3] if line[3]!='' else ''),"-- "+line[4]))    
        #add format to the list
        specialFormatType(readFormatsArray,line[3])
    #
    print(");")
    w[fi].write(");\n")
#
######End       Read           Table######

closeFiles(o)
closeFiles(w)

#sort format array and write to file
readFormatsArray.sort()
for f in readFormatsArray:
    formats.write(f)
formats.close()


