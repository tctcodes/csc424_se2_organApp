import os
import csv
import sys
import re
#function defs
###############################################

###capitalCase()
def capitalCase(name):
    n = name.lower()
    sn = n.split('_')
    cn = list(map(lambda x: x.capitalize(), sn))
    return ''.join(cn) 
###

###camelCase()
def camelCase(name):
    n = name.lower()
    sn = n.split('_')
    cn = list(map(lambda x: x.capitalize(), sn))
    cn[0] = cn[0].lower()
    return ''.join(cn) 
###

### close file arrays
def closeFiles(filesArray):
    for fi in filesArray:
        fi.close()
### 

###createState()
def mapState(reader,outFile):
    outFile.write("{\n")
    for line in reader :
        capC = capitalCase(line[0])
        camC = camelCase(line[0])
        outFile.write("\t{0:}: makeSelect{1:}(),\n".format(camC,capC))
    outFile.write("};\n")
###
###createReducer()
def mapDispatch(reader,outFile):
    outFile.write("return {\n")
    for line in reader :
        line[0] = capitalCase(line[0])
        outFile.write("\tonChange{0:}: evt => dispatch(change{0:}(evt.target.value)),\n".format(line[0]))
    outFile.write("};\n")
###
###createConstants()\
def propType(reader, outFile):
    outFile.write("{\n")
    for line in reader :
        capC = capitalCase(line[0])
        camC = camelCase(line[0])
        outFile.write("\t{0:}: Proptypes.string,\n".format(camC))
        outFile.write("\tonChange{0:}: Proptypes.func,\n".format(capC))
    outFile.write("};\n")

###

# 1 file IN
inFilePath = "./tablecsv/CAND_LIIN.csv"
outPath = "./outMap/CAND"

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

# open files
inFile = open(inFilePath,"r")
outFile = []

outFileNames = ['state','dispatch','propType']
for filename in outFileNames :   
    outFile.append(open(outPath + "/"+ filename+".js","w"))

#read CSV
reader = csv.reader(inFile)

mapState(reader,outFile[0])
inFile.seek(0)
mapDispatch(reader,outFile[1])
inFile.seek(0)
propType(reader,outFile[2])


closeFiles(outFile)
inFile.close()


#############################################################