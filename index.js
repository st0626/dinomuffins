const express = require('express');
const path = require('path');

const app = express();
const port = 3000; 

// View engine setup (using EJS)
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');


//static dir
app.use(express.static('static'))

// Routes
const indexRouter = require('./routes/index'); 
app.use('/', indexRouter);

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/shop', (req, res) => {
    res.render('shop');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


