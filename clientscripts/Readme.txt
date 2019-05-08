from_single-file_multi-component_out.py (fsfmo)
-takes two arguments from the command line.
-a source file and a domain name (i.e. CanForm)
-this will create a folder with the domain name
-folder will contain a number of files based on the source file.
!!! Important !!!
    -source file requires a fifth column, in the source, csv that 
        the sqript will group the attributes into react components.
    -see files in tablecsv/labeledsegments
    -can be a word (meld, hist, ...) or numer (1, 2, ... 13, ...)
!!! Important !!!

redux_stream.py
-this file takes a source csv and domain.
-will generate a folder in outRedux with a number of redux files.
    -constants.js, actions.js, reducer.js, selectors.js

catcsv
-holds all catagory csv's 
-used with fsfmo to generate the <select/> option dropdowns.
-there are some custom cats' (i.e.YNNUM, YNCHAR ...) that are used 
    but do not exist in the SRTR data dictionary.

outComp
-output target for fsfmo

outRedux
-output target for redux_stream

tablecsv
-csv source
    labeledsegments
    -source for fsfmo with 5th column to group attributes.
        