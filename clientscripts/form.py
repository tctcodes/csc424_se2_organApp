import os
import csv
import sys
import re

# paths
inPath ="./segcsv/out/CAND"
outPath ="./outform/CAND"
catPath  ="./catcsv/CAND"

# _id regular expression
idre= r'_ID\b'
research = re.compile(idre,re.I)

###cSharpName()
def cSharpName(name):
    n = name.lower()
    sn = n.split('_')
    cn = list(map(lambda x: x.capitalize(), sn))
    return ''.join(cn) 
###

### close file arrays
def closeFiles(filesArray):
    for fi in filesArray:
        fi.close()
### 

    
############## START ##########################     

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
    
# get file list
files = [] #file names
files = os.listdir(inPath)

print("files in directory, "+inPath)
print(files)
#open CSV to read and write 
o = [] #open files
w = [] #write files

# open and create file arrays 
for filename in files :
    o.append(open(inPath + "/" + filename,"r"))            
    w.append(open(outPath + "/"+ filename[:-4]+".js","w"))
print("number of table files: ", len(o))
print("number of write files: ", len(w))

catFiles = []
catFiles = os.listdir(catPath)
print(catFiles)
c = [] #cat files
for filename in catFiles :
    c.append(open(catPath + "/" + filename,"r"))  

#for each file
for fi, inputFile in enumerate(o) : # index, filename

    #read CSV
    reader = csv.reader(inputFile)
    print("<Form> "+files[fi])
    #first line
    w[fi].write("<Form>\n")

    #create table lines    
    for  line in reader :
        # CSV format
        # line[0]   line[1] line[2] line[3] line[4] line[5]
        # name      type    size    format  desc    group
        w[fi].write('\t<Form.Group controlId="{0:}{1:}">\n'.format(line[1],line[2]))
        w[fi].write('\t\t<Form.Label>{0:}</Form.Label>\n'.format(' '.join(line[0].split('_'))))
        var = cSharpName(line[0])
        # set Form.Control Attributes
        w[fi].write('\t\t<Form.Control ')
        if( line[1] =='num' and research.search(line[0]) != None):  # for all ID's with regx
            varType = 'type="text" readonly' 
        elif(line[1]=='num' and line[3] == 'MMDDYY'):
            varType = 'type="date"' 
        elif(line[1]=='num' and line[3] == 'TIME'):
            varType = 'type="time"'
        elif(line[1]=='num' and line[3] != ''):                     #has a catigorical type           
            varType = 'type="text"' # add cat
        elif(line[1]=='num' and line[2] == '3'):                     #most likely true or false type NUMERIC(3)         
            varType = 'type="text"' 
        elif(line[1]=='num'):
            varType = 'type="text"'
        ####################### CHAR
        elif(line[1]=='char' and line[3] != ''):
            varType = 'type="text"'# add cat
        elif(line[1]=='char' and line[2] == '50'):
            varType = 'as="textarea" rows="3"'
        elif(line[1]=='char' and line[2] == '1'):                                      # end of nums
            varType = 'type="text"'
        elif(line[1]=='char'): 
            varType = 'type="text"'
        else:
            #error of csv input (e.g. ',,,,')
            print("unknown type ", line[1])
            closeFiles(o)
            closeFiles(w)
            closeFiles(c)
            sys.exit("need new type")
        varType = varType+'value={{this.props.{0:}}} onChange={{this.props.onChange{0:}}}'.format(var) 
        w[fi].write(varType+' />\n')

        #add line to the file    
        w[fi].write("\t</Form.Group>\n")
    ### END INNER FOR
    
    #Last line of table
    w[fi].write("</Form>\n")
### END OUTER FOR

###### End Read Table ######

# close files
closeFiles(o)
closeFiles(w)
closeFiles(c)


