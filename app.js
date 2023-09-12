const express = require('express');
const path = require('path');
const i18n = require('i18n');
const cookieParser = require('cookie-parser');
require("domain");

const app = express();
const port = process.env.PORT || 3000;

// Configure i18n middleware
i18n.configure({
    locales: ['fi', 'en'], // Supported languages (Finnish and English)
    directory: __dirname + '/locales', // Path to language files
    cookie: 'language', // Cookie name for storing language preference
});

// Initialize cookie-parser middleware
app.use(cookieParser());

// Initialize i18n middleware
app.use(i18n.init);

// Set Pug as the view engine
app.set('view engine', 'pug');

// Define the directory where your Pug templates are located
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(__dirname + '/public'));

// Define a route to change the language
// Define a route to change the language
app.get('/switch-language/:lang', (req, res) => {
    const { lang } = req.params;
    res.cookie('language', lang);
    i18n.setLocale(lang); // Explicitly set the locale
    console.log(`Language change route accessed. Current locale: ${i18n.getLocale()}`);
    res.redirect('/');
});

// Define a route to render the Pug template
app.get('/', (req, res) => {
    if (!req.cookies.language) {
        const reqlocale = i18n.getLocale(); // Set the locale from the Accept-Language header
        console.log('No cookie found, request locale: ' + reqlocale);
        res.cookie('language', reqlocale);
        i18n.setLocale(reqlocale);
        res.setLocale(i18n.getLocale()); // Set the locale from the cookie
        console.log(`Rendering Pug template. Current locale: ${res.getLocale()}`);
        res.render('index', {
            welcomeMessage: res.__('welcome_message'),
            about: res.__('about'),
            skills: res.__('skills'),
            projects: res.__('projects'),
            contact: res.__('contact'),
            shortDescription: res.__('short_description'),
            languageMessage: res.__('language_message')
        });
    } else {
        res.setLocale(i18n.getLocale()); // Set the locale from the cookie
        console.log(`Rendering Pug template. Current locale: ${res.getLocale()}`);
        res.render('index', {
            welcomeMessage: res.__('welcome_message'),
            about: res.__('about'),
            skills: res.__('skills'),
            projects: res.__('projects'),
            contact: res.__('contact'),
            shortDescription: res.__('short_description') });
    }

});

app.get('*', function (req, res) {
    res.render('notfound');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
