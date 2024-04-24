const express = require('express');
const app = express();
const port = 5050;
const baseUrl = 'http://localhost:';

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use('/api/users')
app.use('/api/pets')
app.use('/api/address')

app.get('/', (req, res) => {
	res.render('pages/home.ejs');
});

app.listen(port, () => {
	console.log(`Server listening in: ${baseUrl}${port}`);
});
