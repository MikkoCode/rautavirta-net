# Mikko Rautavirta's Portfolio Website

## Introduction

This repository contains the source code for Mikko Rautavirta's personal portfolio website. The website is built using Node.js (Express) and the Pug template engine. It showcases Mikko's skills, projects, and contact information, offering both English and Finnish translations.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Structure](#structure)
4. [Contributing](#contributing)
5. [License](#license)
6. [Contact](#contact)

## Installation

### Prerequisites
- Node.js (20.6.0)
- npm (7.20.3)

### Steps
1. Clone the repository: `git clone https://github.com/your-repository-url.git`
2. Navigate to the project directory: `cd your-repository-name`
3. Install dependencies: `npm install`
4. Run the server: `npm start`

## Usage

Visit `http://localhost:3000` to view the website in your browser.

## Structure

- `app.js`: The main server file.
- `public/`: Directory containing static files such as CSS, JavaScript, and images.
- `views/`: Directory containing Pug templates for the different sections of the website.
- `locales/`: Directory containing JSON files for English (`en.json`) and Finnish (`fi.json`) translations.
- `assets/`: Directory containing assets like profile pictures and favicons.

### Directories and Files

#### `views/`
- `layout.pug`: Basic structure of the web pages.
- `header.pug`: Template for the navbar.
- `footer.pug`: Template for the footer.
- `about.pug`: Template for the "About Me" section.
- `skills.pug`: Template for the "Skills" section.
- `projects.pug`: Template for the "Projects" section.
- `contact.pug`: Template for the "Contact" section.
- `notfound.pug`: Template for the 404 - Not Found page.

#### `public/stylesheets/`
- `nav.css`: Styles for the navbar.
- `styles.css`: General styles across the website.
- (Additional CSS files)

#### `public/javascripts/`
- `script.js`: Client-side JavaScript file for handling various functionalities.

#### `public/images/`
- `profilepic.jpg`: Profile picture used in the "About" section.
- `favicon.ico`: Website favicon.

#### `locales/`
- `en.json`: English translation file.
- `fi.json`: Finnish translation file.


