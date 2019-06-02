var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

mongoose.connect("mongodb://localhost/data",{ useNewUrlParser: true});
var connection = mongoose.connection;

// var input = 'JANA0000031';

app.get('/',function(req,res){
	res.render('ifsc');
});

app.post('/ifsc',function(req,res){
	var input = req.body.name.toUpperCase();
	console.log(input);
	if(input.length === 11 && input[4] === '0'){
	connection.on('error', console.error.bind(console, 'connection error:'));
		// connection.once('open', function () {
		    connection.db.collection("Ifsc", function(err, collection){
		        collection.find({}).toArray(function(err, data){
		            collection.distinct(input,function(err,ifsc){
		            	if(err){
		            		console.log(err);
		            		res.send("error");
		            	}
		            	console.log(ifsc);
		            	res.render("results",{bank:ifsc});
		            });
		        })
		    });
		// });
	}else{
		 console.log("invalid ifsc");
		 res.render('error');
	}
});


app.listen(8000,function(){
	console.log("SERVER STARTED");
});
