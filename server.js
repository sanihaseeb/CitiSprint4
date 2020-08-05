// Express
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());


const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user')

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


////////// DO NOT CHANGE THE CODE OR PORT NUMBER BELOW
const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
});
