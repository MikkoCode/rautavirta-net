const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set Pug as the view engine
app.set('view engine', 'pug');

// Define the directory where your Pug templates are located
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(__dirname + '/public'));

// Define a route to render the Pug template
app.get('/', (req, res) => {
    // Render the "index.pug" template
    res.render('index');
});

app.get('*', function(req, res){
    res.render('notfound');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});