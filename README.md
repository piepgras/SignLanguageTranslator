# Lost in Translation

## Description

This is an alphabetical sign language translator built with ReactJS.

The app is capable of translating characters a-z into sign language represented by images. The app is also capable of creating and managing users.  

### Setup

- Clone repository
- Navigate to repository root using a CLI
- Run commands:
    npm install react-router-dom
    npm install react-dotenv
    npm install react-hook-form
- Add .env file to root
- In .env file add API URL and API KEY with names:
    REACT_APP_API_KEY
    REACT_APP_API_URL
- We used this API: https://github.com/dewald-els/noroff-assignment-api
    Host it on something like glitch.com
- Run 'npm start' to start the server

### Usage
Login Page:
Prompted with a login form, type in a desired username (No password necessary).

Translation Page:
Input translations in text field and press the button.

Credits Page:
Review translation history and clear it if you wish.


### Structure (NOT COMPLETE)
```bash
public
└───signs
src
├───api
├───compontents
│   ├───login
│   ├───profile
│   └───translate
├───const
├───hoc
│   └───withAuth.js
├───state
├───utils
└───views
```

#### Contributors:
MissSundebo    https://github.com/MissSundebo
Farhang Younis https://github.com/compsci-78
piepgras       https://github.com/piepgras
