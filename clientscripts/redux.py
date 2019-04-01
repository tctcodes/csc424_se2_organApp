import os
import csv
import sys
import re
#function defs
###############################################

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

###createState()
def createState(reader,outFile):
    print("fromJS({")
    outFile.write("fromJS({\n")
    for line in reader :
        line[0] = cSharpName(line[0])
        #print(line[0]+":\t\t\t '',")
        #print("\t{0:30}{1:},".format(line[0]+":","''"))
        outFile.write("\t{0:30}{1:},\n".format(line[0]+":","''"))
    print("});")
    outFile.write("});")
###
###createReducer()
def createReducer(reader,outFile):
    print("switch (action.type) {")
    outFile.write("switch (action.type) {\n")
    for line in reader :
        line[0] = cSharpName(line[0])
        caseName = "CHANGE_"+line[0].upper()
        #print("\tcase {0:}:".format(caseName))
        outFile.write("\tcase {0:}:\n".format(caseName))
        #print("\t\treturn state.set('{0:}', action.{0:};".format(line[0]))
        outFile.write("\t\treturn state.set('{0:}', action.{0:});\n".format(line[0]))
    print("\tdefault:")
    print("\t\t return state;")
    outFile.write("\tdefault:\n\t\t return state;\n")
    print("}")
    outFile.write("}\n")
###
###createConstants()\
def createConstants(reader, outFile, domain):
    for line in reader :
        line[0] = cSharpName(line[0]).upper()
        #print(line[0]+":\t\t\t '',")
        #print("\t{0:30}{1:},".format(line[0]+":","''"))
        outFile.write('export const CHANGE_{0:} = "app/{1:}/CHANGE_{0:}";\n'.format(line[0],domain))

###
###createActions()
def createActions(reader, outFile):
    outFile.write('import * from "./constants";\n\n')
    for line in reader :
        line[0] = cSharpName(line[0])
        #print(line[0]+":\t\t\t '',")
        #print("\t{0:30}{1:},".format(line[0]+":","''"))
        outFile.write("export function change{0:}({0:}) {{ \n".format(line[0]))
        outFile.write('\treturn{\n')
        outFile.write('\t\ttype: CHANGE_{0:},\n\t\t{1:},\n\t}};\n'.format(line[0].upper(),line[0]))
        outFile.write('}\n\n')


###createSelectors()
def createSelectors(reader, outFile, domain):
    export=[]
    outFile.write('import {{ createSelector }} from "reselect";\nimport {{ initialState }} from "./reducer";\nexport const select{0:}Domain = state => state.get("{0:}", initialState);\n\n'.format(domain))
    export.append('select{}Domain'.format(domain))
    for line in reader:
        line[0] = cSharpName(line[0])
        outFile.write('export const makeSelect{} = () =>\n'.format(line[0]))
        outFile.write('createSelector(select{0:}Domain, substate => substate.get("{1:}"));\n\n'.format(domain,line[0]))
        export.append('makeSelect{}'.format(line[0]))
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
outFile = []

outFileNames = ['state','reducer','constants','actions','selectors']
for filename in outFileNames :   
    outFile.append(open(outPath + "/"+ filename+".js","w"))

#read CSV
reader = csv.reader(inFile)
domain = 'CanForm'
createState(reader,outFile[0])
inFile.seek(0)
createReducer(reader,outFile[1])
inFile.seek(0)
createConstants(reader,outFile[2],domain)
inFile.seek(0)
createActions(reader,outFile[3])
inFile.seek(0)
createSelectors(reader,outFile[4],domain)

closeFiles(outFile)
inFile.close()


#############################################################
