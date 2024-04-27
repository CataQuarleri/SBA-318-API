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
const {createNewUser} = require('./src/utilities/createNewUser.js')
const {createNewPet} = require('./src/utilities/createNewPet.js')

//App settings
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

//Routes
const usersRoutes = require('./src/routes/usersRoutes.js');
const petsRoutes = require('./src/routes/petsRoutes.js');
const addressRoutes = require('./src/routes/addressRoutes.js')
app.use('/users', usersRoutes);
app.use('/pets', petsRoutes);
app.use('/api/address', addressRoutes)

//Main app
app.get('/', (req, res) => {
	createNewUser()
  // createNewPet()
	res.render('pages/home.ejs');
});

app.get('/success', (req, res) => {
	res.send("You submitted the info correctly. We'll contact you shortly")
})

//Middlewares
app.use((req, res, next) => {
    next(error(404, "Resource Not Found"));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
  });

//Run server
app.listen(port, () => {
	console.log(`Server listening in: ${baseUrl}${port}`);
});
