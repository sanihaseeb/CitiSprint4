// Express
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());


const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user')

// route to add a user
app.post('/addUser', (req, res) => {
	const user = new User({
		name: req.body.name,
		password: req.body.password
	})

	// Save user to the database
	user.save().then((result) => {
		res.send(result)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})
})

// route to get all users
app.get("/getUsers", (req, res) => {
	User.find()
	  .then(users => {
		res.send(users);
	  })
	  .catch(error => {
		res.status(500).send(error);
	  });
  });
  
// route to get a specific user by username
app.get("/getUser/:userName", (req, res) => {
	const userName = req.params.userName;
	User.findOne({ name: userName })
	  .then(user => {
		if (!user) {
			res.status(404).send();
		} 
		else {
			res.send(user)
		}
	  })
	  .catch(error => res.status(500).send);
  });



////////// DO NOT CHANGE THE CODE OR PORT NUMBER BELOW
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
});
