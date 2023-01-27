# Lost in Translation
https://farhanglovesgit.vercel.app/

## Description
This is an alphabetical sign language translator built with ReactJS.<br/><br/>

The app is capable of translating characters a-z into sign language represented by images. The app is also capable of creating and managing users.

### Usage
Login Page:<br/>
Prompted with a login form, type in a desired username (No password necessary).

Translation Page:<br/>
Input translations in text field and press the button.

Profile Page:<br/>
Review translation history and clear it if you wish.

### Setup
- Clone repository
- Navigate to repository root using a CLI
- Run commands:<br/>
    npm install react-router-dom<br/>
    npm install react-dotenv<br/>
    npm install react-hook-form
- Add .env file to root
- In .env file add API URL and API KEY with names:<br/>
    REACT_APP_API_KEY<br/>
    REACT_APP_API_URL
- We used this API: https://github.com/dewald-els/noroff-assignment-api<br/>
    Host it on something like glitch.com
- Run 'npm start' to start the server

### Structure
```bash
.root
│
└───public
│   ├───signs
│   │   └ sign .pngs
│   │
│   ├ .pngs & icons
│   ├ index.html
│   ├ manifest.json
│   └ robots.txt
│   
└───src
│   ├───api
│   │   ├ index.js
│   │   ├ translate.js
│   │   └ user.js
│   │
│   ├───components
│   │   ├───login
│   │   │   └ LoginForm.jsx
│   │   │
│   │   ├───navbar
│   │   │   └ Navbar.jsx
│   │   │
│   │   ├───profile
│   │   │   ├ ProfileActions.jsx
│   │   │   ├ ProfileHeader.jsx
│   │   │   ├ ProfileTranslationHistory.jsx
│   │   │   └ ProfileTranslationHistoryItem.jsx
│   │   │
│   │   └───translate
│   │       └ TranslateForm.jsx
│   │
│   ├───const
│   │   └ storageKeys.js
│   │
│   ├───context
│   │   ├ AppContext.jsx
│   │   └ UserContext.jsx
│   │
│   ├───hoc
│   │   └ withAuth.js
│   │
│   ├───utils
│   │   └ storage.js
│   │
│   ├───views
│   │   ├ Login.jsx
│   │   ├ Profile.jsx
│   │   └ Translate.jsx
│   │
│   ├ App.css
│   ├ App.js
│   ├ App.test.js
│   ├ index.css
│   ├ index.js
│   ├ reportWebVitals.js
│   └ setupTests.js
│
├ .gitignore
├ README.md
├ package-lock.json
└ pack
```

#### Contributors:
MissSundebo    https://github.com/MissSundebo<br/>
Farhang Younis https://github.com/compsci-78<br/>
piepgras       https://github.com/piepgras
