const express = require('express');
const path = require('path');
const app = express();
const port = 5050;
const baseUrl = 'http://localhost:';
const {exampleUser} = require('./src/models/usersModel.js')
const usersRoutes = require('./src/routes/usersRoutes.js')
const petsRoutes = require('./src/routes/petsRoutes.js')
// const addressRoutes = require('./src/routes/addressRoutes.js')
const error = require('./src/middlewares/errorHandling.js')

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

app.use('/api/users', usersRoutes)
app.use('/api/pets', petsRoutes)
// app.use('/api/address', addressRoutes)

app.get('/', (req, res) => {
	res.render('pages/home.ejs');
});

// app.use((req, res, next) => {
//     next(error(404, "Resource Not Found"));
// });

// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({ error: err.message });
//   });


app.listen(port, () => {
	console.log(`Server listening in: ${baseUrl}${port}`);
});
