# This file will take a csv table with grouping column
# and output multiple react components with appropriate 
# selectors and action functions.


import os
import csv
import sys
import re

###createSelect()
def createSelect(line,catFiles,catPath):
    retString = ''
    cap = capitalCase(line[0])
    cam = camelCase(line[0])
    for filename in catFiles:
        if (filename[:-4]==line[3]):
            #open catagory file
            cat = csv.reader(open(catPath + "/" + filename,"r"))
            retString = '\t\t\t\t\t<select className="form-control" value={{this.props.{0:}}} onChange={{this.props.onChange{1:}}}>\n'.format(cam,cap)
            retString = retString +'\t\t\t\t\t\t<option value="" hidden disabled selected/>\n'
            for l in cat:
                retString = retString + '\t\t\t\t\t\t<option value="{0:}">{1:}</option>\n'.format(l[0],re.sub(' & ',' {"&"} ',re.sub('<','{"<"}',l[1])))
            retString = retString + '\t\t\t\t\t</select>\n'
    return retString
###



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


if (len(sys.argv) < 3):
    sys.exit("please input a source path, and domain name (folder name & react component name)")

print(len(sys.argv), sys.argv[1])
###############################################################
# set path directories
#   domian is the folder/react-component
domain = sys.argv[2]                
catPath  ="./catcsv/all"           # in
inPath = sys.argv[1]                # in
outPath ="./outComp/"+domain   # out
#make directory path
try:  
    os.makedirs(outPath)
except OSError as err:  
    print (err)
else:  
    print ("Successfully created the directory %s " % outPath)


# _id regular expression
idre= r'_ID\b'
research = re.compile(idre,re.I)

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

############## START ##########################     
#open in file
inFile = open(inPath,'r')
print(domain)

reader = csv.reader(inFile)

types = []
#get all types
for line in reader:
    if(checkType(line[5],types)):
        continue
    else:
        types.append(line[5])
inFile.seek(0)
print(types) 

# open catagorie files
catFiles = []
catFiles = os.listdir(catPath)
print(catFiles)


#a dictionary to hold form
#each entry is a group array to hold lines for a specific file
formDict = {}
parts = ['component','mapStateToProps','mapDispatchToProps']
for t in types :
    formDict[t] = {}
    for p in parts:
        formDict[t][p]=[]



#boiler plate
#       ...
for t in types : 
    for p in parts:
        if (p == 'component') :
            #first line of section
            formDict[t][p].append("import React from 'react';\n")
            formDict[t][p].append("import PropTypes from 'prop-types';\n")
            formDict[t][p].append("import { connect } from 'react-redux';\n")
            formDict[t][p].append("import { createStructuredSelector } from 'reselect';\n")
            formDict[t][p].append("import { compose } from 'redux';\n")
            #formDict[t][p].append("import injectSaga from 'utils/injectSaga';\n")
            #formDict[t][p].append("import injectReducer from 'utils/injectReducer';\n")
            formDict[t][p].append("import * as select from './selectors';\n")
            formDict[t][p].append("import * as action from './actions';\n\n")
            #formDict[t][p].append("import reducer from './reducer';\n")
            #formDict[t][p].append("import saga from './saga';\n\n")
            formDict[t][p].append("export class "+domain+t.capitalize()+" extends React.Component {\n")
            formDict[t][p].append("\trender(){ \n\t\treturn(\n")
            formDict[t][p].append('\t\t\t<div className="d-flex flex-wrap bg-light">\n')
        elif (p == 'mapStateToProps') :
            formDict[t][p].append("const mapStateToProps = createStructuredSelector({\n")
        elif (p == 'mapDispatchToProps') :
            formDict[t][p].append("function mapDispatchToProps(dispatch) {\n\treturn {\n")
        
# end    
dropdown = False
#create table lines    
for  line in reader :
    
    # CSV format
    # line[0]   line[1] line[2] line[3] line[4] line[5]
    # name      type    size    format  desc    group
    ###################start component####################
    formDict[line[5]]['component'].append('\t\t\t\t<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">\n')
    #labels
    formDict[line[5]]['component'].append('\t\t\t\t\t<label className="font-weight-bold" >{0:}</label>\n'.format(' '.join(line[0].split('_'))))
    formDict[line[5]]['component'].append('\t\t\t\t\t<label className="text-secondary" >{0:}:</label>\n'.format(line[4]))        
    
    #capcase camelcase
    capC = capitalCase(line[0])
    camC = camelCase(line[0])
    
    
    if( line[1] =='num' and research.search(line[0]) != None):  # for all ID's with regx
        varType = 'type="text" readOnly' 
    elif(line[1]=='num' and line[3] == 'MMDDYY'):
        varType = 'type="datetime-local"' 
    elif(line[1]=='num' and line[3] == 'TIME'):
        varType = 'type="text"'
    elif(line[1]=='num' and line[3] != ''):                     #has a catigorical type           
        varType = 'type="text"' # add cat
        dropdown = True
    elif(line[1]=='num' and line[2] == '3'):                     #most likely true or false type NUMERIC(3)         
        varType = 'type="number" min="0" max="999" ' 
    elif(line[1]=='num'):
        varType = 'type="number"'
    ####################### CHAR
    elif(line[1]=='char' and line[3] != ''):
        varType = 'type="text"'# add cat
        dropdown = True
    elif(line[1]=='char' and line[2] == '50'):
        varType = 'as="textarea" rows="3" maxLength="50"'
    elif(line[1]=='char' and line[2] == '1'):                                      # end of nums
        varType = 'type="text" maxLength="1"'
    elif(line[1]=='char'): 
        varType = 'type="text" maxLength="'+line[2]+'"'
    else:
        #error of csv input (e.g. ',,,,')
        print("unknown type ", line[1])
        inFile.close()
        outFile.close()

        sys.exit("need new type")
    #end if
    varType = varType + ' value={{this.props.{0:}}} onChange={{this.props.onChange{1:}}}'.format(camC,capC) #final props
    #input
    if (dropdown == False):
        formDict[line[5]]['component'].append('\t\t\t\t\t<input className="form-control" '+varType+' />\n') #end <input/>
    else:
        formDict[line[5]]['component'].append(createSelect(line,catFiles,catPath))

    formDict[line[5]]['component'].append("\t\t\t\t</div>\n")
    dropdown = False
    ### end component line
    ######## start mapStateToProps
    formDict[line[5]]['mapStateToProps'].append("\t{0:}: select.makeSelect{1:}(),\n".format(camC,capC))
    ###
    ######## start mapDispatchToProps
    formDict[line[5]]['mapDispatchToProps'].append("\t\tonChange{0:}: evt => dispatch(action.change{0:}(evt.target.value)),\n".format(capC))


### END FOR

### end biolerplate
for t in types : 
    for p in parts:
        if (p == 'component') :
            formDict[t][p].append('\t\t\t</div>\n')
            formDict[t][p].append("\t\t)\n\t}\n}\n\n")
        elif (p == 'mapStateToProps') :
            formDict[t][p].append("});\n\n")
        elif (p == 'mapDispatchToProps') :
            formDict[t][p].append("\t};\n}\n\n")
            # end of file
            formDict[t][p].append("const withConnect = connect(\n")
            formDict[t][p].append("\tmapStateToProps,\n")
            formDict[t][p].append("\tmapDispatchToProps,\n")
            formDict[t][p].append(");\n\n")
            #formDict[t][p].append("const withReducer = injectReducer({ key: '"+domain+t.capitalize()+"', reducer });\n")
            #formDict[t][p].append("const withSaga = injectSaga({ key: '"+domain+t.capitalize()+"', saga });\n")
            formDict[t][p].append("export default compose( withConnect )( "+domain+t.capitalize()+" );\n")
        
outFiles = []
for t in types :
    outFiles.append(open(outPath + "/"+domain+t.capitalize()+".js","w"))
#write body of file
for fi, type in enumerate(formDict):
    for part in formDict[type]:
        for line in formDict[type][part]:
            outFiles[fi].write(line)


###### End Read Table ######

# close files
inFile.close()
closeFiles(outFiles)


