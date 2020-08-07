// create a server with Express
const express = require('express')
const app = express();
const { mongoose } = require('./db/mongoose');

// use bodyParser as a middleware to parse json
const bodyParser = require('body-parser')
app.use(bodyParser.json());

// import model
const { User } = require('./models/user')
const { Expense } = require('./models/expense') 


// route to add a user to database
app.post('/addUser', (req, res) => {
	const user = new User({
		email: req.body.email,
		password: req.body.password
	})

	// Save user to the database
	user.save().then((result) => {
		res.send(result)
	}, (error) => {
		res.status(400).send(error) // 400 for bad user request
	})
})


// route to get all users from database
app.get("/getUsers", (req, res) => {
	User.find()
	  .then(users => {
		res.send(users);
	  })
	  .catch(error => {
		res.status(500).send(error);
	  });
  });
  

// route to get a specific user by email
app.get("/getUser/:email", (req, res) => {
	const userEmail = req.params.email;
	User.findOne({ email: userEmail })
	  .then(user => {
		if (!user) {
			res.status(404).send(); // send 404 if user not found
		} 
		else {
			res.send(user)
		}
	  })
	  .catch(error => res.status(500).send); // send 500 if server error
  });


// route to add an expense for a user
app.post('/addExpense', (req, res) => {
	const userEmail = req.body.email;
	User.findOne({ email: userEmail })
	.then(user=>{
		if(!user){
			res.status(404).send(); // send 404 if user not found
		} else{
			const expense = new Expense({
				point: req.body.point,
				CAD: req.body.CAD,
				feeling: req.body.feeling,
				email: req.body.email,
			})
			expense.save().then((result) => {
				res.send(result)
			}, (error) => {
				res.status(400).send(error) // send 400 for bad request
			})
		}
	}).catch(error => res.status(500).send); // send 500 for server error
})


////////// DO NOT CHANGE THE CODE OR PORT NUMBER BELOW
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
});

module.exports = app