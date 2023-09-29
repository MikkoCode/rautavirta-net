const express = require('express');
const path = require('path');
const i18n = require('i18n');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

// Configure i18n middleware
i18n.configure({
    locales: ['fi', 'en'], // Supported languages (Finnish and English)
    directory: path.join(__dirname, 'locales'), // Path to language files
    cookie: 'language', // Cookie name for storing language preference
});

// Initialize middleware
app.use(cookieParser());
app.use(i18n.init);

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Define the directory for Pug templates
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the "public" directory

// Language change route
app.get('/switch-language/:lang', (req, res) => {
    const { lang } = req.params;
    res.cookie('language', lang);
    i18n.setLocale(lang); // Set the locale
    console.log(`Language changed to ${i18n.getLocale()}`);
    res.redirect('/');
});

// Render the Pug template
app.get('/', (req, res) => {

      const reqLocale = req.cookies.language || i18n.getLocale();
      res.cookie('language', reqLocale);
      i18n.setLocale(reqLocale);
      console.log('Rendering Pug template. Current locale: ${reqLocale}');

      const templateData = {
        welcomeMessage: res.__('welcome_message'),
        about: res.__('about'),
        skills: res.__('skills'),
        projects: res.__('projects'),
        contact: res.__('contact'),
        shortDescription: res.__('short_description'),
        sourceCode: res.__('sourcecode'),
       viewResume: res.__('view_resume'),
      };

      res.render('pages/index', templateData);
});
app.get('/about', (req, res) => {
    res.render('pages/about', templateData);
});
app.get('/cv-fi', function (req, res) {
    res.render('cv');
});
// Not found route
app.get('*', function (req, res) {
    res.render('pages/notfound');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
