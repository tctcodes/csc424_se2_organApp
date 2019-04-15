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
            
            cat = csv.reader(open(catPath + "/" + filename,"r"))
            retString = '\t\t\t\t<select className="form-control" value={{this.props.{0:}}} onChange={{this.props.onChange{1:}}}>\n'.format(cam,cap)
            retString = retString +'\t\t\t\t\t<option value="" hidden disabled selected/>\n'
            for l in cat:
                retString = retString + '\t\t\t\t\t<option value="{0:}">{1:}</option>\n'.format(l[0],re.sub(' & ',' {"&"} ',re.sub('<','{"<"}',l[1])))
            retString = retString + '\t\t\t\t</select>\n'
    return retString


# _id regular expression
idre= r'_ID\b'
research = re.compile(idre,re.I)

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
    sys.exit("please input a source path")

print(len(sys.argv), sys.argv[1])
###############################################################
# set path directories
catPath  ="./catcsv/CAND"           # in
inPath = sys.argv[1]                # in
outPath ="./outform/CAND"   # out



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
print(sys.argv[2])
outFile = open(outPath + "/"+sys.argv[2]+".js","w")
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


#a dictionary to build form
formDict = {}
for t in types :
    formDict[t] = []


outFile.write('<Tabs defaultActiveKey="{}">\n'.format(types[0]))
#Only one file
for fi, t in enumerate(types) : # index, filename
    #first line of section
    formDict[t].append('\t<Tab eventKey="{0:}" title="{0:}">\n'.format(t))
    
    formDict[t].append('\t\t<div className="d-flex flex-wrap bg-light">\n')
    
# end    
dropdown = False
#create table lines    
for  line in reader :
    
    # CSV format
    # line[0]   line[1] line[2] line[3] line[4] line[5]
    # name      type    size    format  desc    group
    #start section
    formDict[line[5]].append('\t\t\t<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 border d-flex flex-column justify-content-between">\n')
    #labels
    formDict[line[5]].append('\t\t\t\t<label className="font-weight-bold" >{0:}</label>\n'.format(' '.join(line[0].split('_'))))
    formDict[line[5]].append('\t\t\t\t<label className="text-secondary" >{0:}:</label>\n'.format(line[4]))        
    
    #capcase camelcase
    capC = capitalCase(line[0])
    camC = camelCase(line[0])
    
    
    if( line[1] =='num' and research.search(line[0]) != None):  # for all ID's with regx
        varType = 'type="number" readOnly' 
    elif(line[1]=='num' and line[3] == 'MMDDYY'):
        varType = 'type="datetime-local"' 
    elif(line[1]=='num' and line[3] == 'TIME'):
        varType = 'type="text"'
    elif(line[1]=='num' and line[3] != ''):                     #has a catigorical type           
        varType = 'type="text"' # add cat
        dropdown = True
    elif(line[1]=='num' and line[2] == '3'):                     #most likely true or false type NUMERIC(3)         
        varType = 'type="text"' 
    elif(line[1]=='num'):
        varType = 'type="number"'
    ####################### CHAR
    elif(line[1]=='char' and line[3] != ''):
        varType = 'type="text"'# add cat
        dropdown = True
    elif(line[1]=='char' and line[2] == '50'):
        varType = 'as="textarea" rows="3"'
    elif(line[1]=='char' and line[2] == '1'):                                      # end of nums
        varType = 'type="text"'
    elif(line[1]=='char'): 
        varType = 'type="text"'
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
        formDict[line[5]].append('\t\t\t\t<input className="form-control"')
        formDict[line[5]].append(varType+' />\n') #end <input/>
    else:
        formDict[line[5]].append(createSelect(line,catFiles,catPath))

    #end section  
    formDict[line[5]].append("\t\t\t</div>\n")
    dropdown = False
### END FOR
    
#Last line of each tab
for fi, t in enumerate(types) : # index, filename
    #first line of section
    formDict[t].append('\t\t</div>\n\n')
    formDict[t].append('\t</Tab>\n')

#write body of file
for tab in formDict:
    for line in formDict[tab]:
        outFile.write(line)


#last line
outFile.write('</Tabs>\n')
###### End Read Table ######

# close files
inFile.close()
outFile.close()


