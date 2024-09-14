const express = require('express');
const app = express();
const port = 80;
app.set('view engine', 'ejs');


process.on('uncaughtException', (error) => console.log(error));
process.on('unhandledRejection', (error) => console.log(error));


app.locals.require = require;
app.use(express.static(__dirname + '/'));
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
console.log(`start`)
});