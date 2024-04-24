const express = require('express');
const app = express();
const port = 5050;
const baseUrl = 'http://localhost:';

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('pages/home.ejs');
});

// app.post('/', (req, res) => {
//     createUser(body)

// 	res.render('pages/home.ejs');
// });

app.listen(port, () => {
	console.log(`Server listening in: ${baseUrl}${port}`);
});
