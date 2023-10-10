// const path = require('path');
// const morgan = require('morgan');
// const express = require('express');
// const {engine}  = require('express-handlebars');
// const port = process.env.PORT || 3000


// const app = express();
// app.use(morgan('combined'));
// app.use(express.static(path.join(__dirname, 'public')));


// app.engine('hbs', engine({
//     extname: '.hbs',

// }));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'resources\\views'));


// app.get('/', (req, res) => {
//     res.render('home');
// })

// app.get('/news', (req, res) => {
//     res.render('news');
// })



// app.listen(port,() => {
// console.log(`Server running at port `+port);
// });


const http = require('http');
const port = process.env.PORT || 6059
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello World</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
