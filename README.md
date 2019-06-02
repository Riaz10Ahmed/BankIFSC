# BankIFSC
A simple web application to fetch bank details using IFSC code.

# Index File
Entry point is app.js. Start the app by running "node app.js" from command line. May sure you have "mogod" running.

# Populating into database
Before running the app populate the bank details from "bank" folder which is included in this repo.
To populate data go to the mongod command line and type the following command.

  for filename in *; do mongoimport --db <Database> --collection <Collection Name> --file $filename; done
  
where,  $filename refers to "bank" folder,
        Database - name of the database (Data),
        Collection Name - name of the collection (Ifsc).
After pushing the data into mongodb, run the node app.js command.
