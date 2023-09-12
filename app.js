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
        res.render('pages/index', {
            welcomeMessage: res.__('welcome_message'),
            about: res.__('about'),
            skills: res.__('skills'),
            projects: res.__('projects'),
            contact: res.__('contact'),
            shortDescription: res.__('short_description'),
            sourceCode: res.__('sourcecode'),
            viewResume: res.__('view_resume'),
            skillsItem1: res.__('skills_item_1'),
            skillsItem1Desc: res.__('skills_item_1_desc'),
            skillsItem2: res.__('skills_item_2'),
            skillsItem2Desc: res.__('skills_item_2_desc'),
            skillsItem3: res.__('skills_item_3'),
            skillsItem3Desc: res.__('skills_item_3_desc'),
            skillsItem4: res.__('skills_item_4'),
            skillsItem4Desc: res.__('skills_item_4_desc'),
            skillsItem5: res.__('skills_item_5'),
            skillsItem5Desc: res.__('skills_item_5_desc'),
            skillsItem6: res.__('skills_item_6'),
            skillsItem6Desc: res.__('skills_item_6_desc'),
            skillsItem7: res.__('skills_item_7'),
            skillsItem7Desc: res.__('skills_item_7_desc'),
            skillsItem8: res.__('skills_item_8'),
            skillsItem8Desc: res.__('skills_item_8_desc'),
            skillsItem9: res.__('skills_item_9'),
            skillsItem9Desc: res.__('skills_item_9_desc'),
            skillsItem10: res.__('skills_item_10'),
            skillsItem10Desc: res.__('skills_item_10_desc'),
            skillsItem11: res.__('skills_item_11'),
            skillsItem11Desc: res.__('skills_item_11_desc'),
            skillsItem12: res.__('skills_item_12'),
            skillsItem12Desc: res.__('skills_item_12_desc'),
            skillsItem13: res.__('skills_item_13'),
            skillsItem13Desc: res.__('skills_item_13_desc'),
            contactDescription: res.__('contact_description'),
            copyright: res.__('copyright'),
            languageMessage: res.__('language_message')
        });

    } else {
        res.setLocale(i18n.getLocale()); // Set the locale from the cookie
        console.log(`Rendering Pug template. Current locale: ${res.getLocale()}`);
        res.render('pages/index', {
            welcomeMessage: res.__('welcome_message'),
            about: res.__('about'),
            skills: res.__('skills'),
            projects: res.__('projects'),
            contact: res.__('contact'),
            shortDescription: res.__('short_description'),
            sourceCode: res.__('sourcecode'),
            viewResume: res.__('view_resume'),
            skillsItem1: res.__('skills_item_1'),
            skillsItem1Desc: res.__('skills_item_1_desc'),
            skillsItem2: res.__('skills_item_2'),
            skillsItem2Desc: res.__('skills_item_2_desc'),
            skillsItem3: res.__('skills_item_3'),
            skillsItem3Desc: res.__('skills_item_3_desc'),
            skillsItem4: res.__('skills_item_4'),
            skillsItem4Desc: res.__('skills_item_4_desc'),
            skillsItem5: res.__('skills_item_5'),
            skillsItem5Desc: res.__('skills_item_5_desc'),
            skillsItem6: res.__('skills_item_6'),
            skillsItem6Desc: res.__('skills_item_6_desc'),
            skillsItem7: res.__('skills_item_7'),
            skillsItem7Desc: res.__('skills_item_7_desc'),
            skillsItem8: res.__('skills_item_8'),
            skillsItem8Desc: res.__('skills_item_8_desc'),
            skillsItem9: res.__('skills_item_9'),
            skillsItem9Desc: res.__('skills_item_9_desc'),
            skillsItem10: res.__('skills_item_10'),
            skillsItem10Desc: res.__('skills_item_10_desc'),
            skillsItem11: res.__('skills_item_11'),
            skillsItem11Desc: res.__('skills_item_11_desc'),
            skillsItem12: res.__('skills_item_12'),
            skillsItem12Desc: res.__('skills_item_12_desc'),
            skillsItem13: res.__('skills_item_13'),
            skillsItem13Desc: res.__('skills_item_13_desc'),
            contactDescription: res.__('contact_description'),
            copyright: res.__('copyright')
        });
    }

});

app.get('*', function (req, res) {
    res.render('pages/notfound');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
