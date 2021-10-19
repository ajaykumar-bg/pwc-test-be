const express = require('express');
var cors = require('cors');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(cors());

const EXTERNAL_API_URL = 'https://jsonplaceholder.typicode.com';

app.get('/', (req, res) => {
	res.end('PWC Backend App running!');
});

app.get('/users', (req, res) => {
	axios
		.get(`${EXTERNAL_API_URL}/users`)
		.then(function (response) {
			res.json(response.data);
		})
		.catch(function (error) {
			res.json('Error occured while fetching users!');
		});
});

app.listen(port, () => {
	console.log(`PWC Backend App listening at http://localhost:${port}`);
});
