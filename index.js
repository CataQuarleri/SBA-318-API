//Run Server
const express = require('express');
const app = express();
const port = 5050;
const baseUrl = 'http://localhost:';

//Dependencies
const path = require('path');
const store = require('store2');
const multer = require('multer');

//Utilities and middlewares
const error = require('./src/middlewares/errorHandling.js');
const storage = require('./src/middlewares/filesHandling.js');
const upload = multer({storage: storage});
app.use(upload.single('picture'));

//App settings
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

//Routes
const usersRoutes = require('./src/routes/usersRoutes.js');
const petsRoutes = require('./src/routes/petsRoutes.js');
const addressRoutes = require('./src/routes/addressRoutes.js');
app.use('/users/api', usersRoutes);
app.use('/pets', petsRoutes);
app.use('/address/api', addressRoutes);

//Main app
app.get('/', (req, res) => {
	// let regex = /[0-9]+.*\+.*-.*\(/i;
	// console.log(regex.test('+54-(800)-555-9985'))
	// console.log(regex)
	res.render('pages/home.ejs', {pageName: 'home'});
});

app.get('/success', (req, res) => {
	let petInfo = store.get('petInfo');
	res.send(`<h3>You submitted your pet's info correctly! Your pet's id is: ${petInfo?.id ? petInfo.id : 1}</h3>
  <p>To attach your pet to your user, submit a PUT request to http://localhost:5050/users/api/*YOUR USER ID*/pets/*YOUR PET'S ID*</p>
  <p>To find your user ID go to http://localhost:5050/users/api?lastName=*YOUR LAST NAME HERE*&firstName=*YOUR FIRST NAME HERE*</p>`);
});

//Middlewares
app.use((req, res, next) => {
	next(error(404, 'Resource Not Found'));
});

app.use((err, req, res, next) => {
	res.status(err.status || 500);
	// res.json({ error: err.message });
});

//Run server
app.listen(port, () => {
	console.log(`Server listening in: ${baseUrl}${port}`);
});
