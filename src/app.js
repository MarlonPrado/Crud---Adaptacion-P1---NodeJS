const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//Importing Routes
const usuarioRoutes = require('./routes/usuario');
const { urlencoded } = require('express');


//Settings
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//MiddleWare
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'sqluser',
    password: 'password',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));
app.use(express.urlencoded({extend: false  }));

//Routes

app.use('/', usuarioRoutes);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
} );
