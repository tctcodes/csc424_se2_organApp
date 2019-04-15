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
def createState(reader,outFile):
    print("reducer initial state")

    outFile.append('import { fromJS } from "immutable";\n')
    outFile.append('import * as constant from "./constants";\n\n')
    outFile.append('export const initialState = fromJS({\n')

    for line in reader :
        line[0] = camelCase(line[0])
        #print(line[0]+":\t\t\t '',")
        #print("\t{0:30}{1:},".format(line[0]+":","''"))
        outFile.append("\t{0:30}{1:},\n".format(line[0]+":","null"))
   
    outFile.append("});\n\n")
###

###createReducer()
def createReducer(reader,outFile,domain):
    print("reducer case")
    outFile.append('function '+domain+'Reducer(state = initialState, action) {\n')
    
    outFile.append("\tswitch (action.type) {\n")
    for line in reader :
        line[0] = camelCase(line[0])
        caseName = "constant.CHANGE_"+line[0].upper()
        #print("\tcase {0:}:".format(caseName))
        outFile.append("\t\tcase {0:}:\n".format(caseName))
        #print("\t\treturn state.set('{0:}', action.{0:};".format(line[0]))
        outFile.append("\t\t\treturn state.set('{0:}', action.{0:});\n".format(line[0]))
    outFile.append("\t\tdefault:\n\t\t\t return state;\n")
    outFile.append("\t}\n")
    outFile.append("}\n\n")
    outFile.append("export default "+domain+"Reducer;\n")

###

###createConstants()\
def createConstants(reader, outFile, domain):
    for line in reader :
        line[0] = capitalCase(line[0]).upper()
        #print(line[0]+":\t\t\t '',")
        #print("\t{0:30}{1:},".format(line[0]+":","''"))
        outFile.append('export const CHANGE_{0:} = "app/{1:}/CHANGE_{0:}";\n'.format(line[0],domain))
###

###createActions()
def createActions(reader, outFile):
    outFile.append('import * as constant from "./constants";\n\n')
    for line in reader :
        capC = capitalCase(line[0])
        camC = camelCase(line[0])
        #print(line[0]+":\t\t\t '',")
        #print("\t{0:30}{1:},".format(line[0]+":","''"))
        outFile.append("export function change{0:}({1:}) {{ \n".format(capC, camC))
        outFile.append('\treturn{\n')
        outFile.append('\t\ttype: constant.CHANGE_{0:},\n\t\t{1:},\n\t}};\n'.format(capC.upper(),camC))
        outFile.append('}\n\n')
###

###createSelectors()
def createSelectors(reader, outFile, domain):
    #export=[]
    outFile.append('import {{ createSelector }} from "reselect";\nimport {{ initialState }} from "./reducer";\nexport const select{0:}Domain = state => state.get("{0:}", initialState);\n\n'.format(domain))
    #export.append('select{}Domain'.format(domain))
    for line in reader:
        capC = capitalCase(line[0])
        camC = camelCase(line[0])
        outFile.append('export const makeSelect{} = () =>\n'.format(capC))
        outFile.append('createSelector(select{0:}Domain, substate => substate.get("{1:}"));\n\n'.format(domain,camC))
        #export.append('makeSelect{}'.format(capC))
    # outFile.write('export {\n')
    # for s in export:
    #     outfile.write(s+',\n')

###
###############################################
# 1 file IN
inFilePath = "./tablecsv/CAND_LIIN.csv"
outPath = "./outRedux/CAND"

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

outArray={}
outFileNames = ['reducer','constants','actions','selectors']
for p in outFileNames:
    outArray[p]=[]

#read CSV
reader = csv.reader(inFile)
domain = 'CanForm'
createState(reader,outArray['reducer'])
inFile.seek(0)
createReducer(reader,outArray['reducer'],domain)
inFile.seek(0)
createConstants(reader,outArray['constants'],domain)
inFile.seek(0)
createActions(reader,outArray['actions'])
inFile.seek(0)
createSelectors(reader,outArray['selectors'],domain)

outFile = []
for fi, filename in enumerate(outFileNames) :   
    outFile.append(open(outPath + "/"+ filename+".js","w"))
    for line in outArray[filename]:
        outFile[fi].write(line)



closeFiles(outFile)
inFile.close()


#############################################################
