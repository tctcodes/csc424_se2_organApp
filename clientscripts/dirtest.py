import os
outPath ="./test/path"   # out
#make directory path
try:  
    os.makedirs(outPath)
except OSError as err:  
    print (err)
else:  
    print ("Successfully created the directory %s " % outPath)

print("continue code")