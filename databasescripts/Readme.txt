Createtable.py
-takes a .csv and parses it into create table commands.

DumpMay2019.sql
-this is the latest state of the database for the project
-note the auto incrementor on 'Info' table, this was placed as a
    generator for unique keys that will get placed into the donor
    or candidate table. (this is not yet implemented).

load.sql
-helper script to reload table and import sample data.

Folders:
csv
-all tables from the data dictionary made into csv

format
-holds all catagory name per table

sql
-createtable output destination

rest of the folders are tests and can be ignored.