const express = require('express');
const handlebars = require('express-handlebars')

const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.use(routes);

app.listen(3000, () => console.log('Server is listening on port 3000.....'))