import os
import csv
import sys
import re
### check type
def checkType(typ, types):
    for t in types:
        if (t == typ):
            return 1
    return 0
###
### close file arrays
def closeFiles(filesArray):
    for fi in filesArray:
        fi.close()
### 


inPath = "./segcsv/CAND_LIIN_SEG.csv"
outPath = "./segcsv/out/CAND_LIIN"

inFile = open(inPath,'r')
outFile = []
types = []
reader = csv.reader(inFile)
#get all types
for line in reader:
    if(checkType(line[5],types)):
        continue
    else:
        types.append(line[5])
inFile.seek(0)
print(types)

for t in types:
    outFile.append(open(outPath+'/'+t+'.csv','w'))

for i, f in enumerate(outFile):
    print(types[i])
    for line in reader:
        if (line[5]==types[i]):
            f.write(','.join(line)+'\n')
    inFile.seek(0)


closeFiles(outFile)
inFile.close()


