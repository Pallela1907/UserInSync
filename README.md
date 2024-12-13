# Running with direct hosted link:
- Input () in your browser and done !


# Running without direct Link :
## Initialization of App
Open code editor with any folder and open terminal. 
```
npx create-react-app "App Name"
cd "App Name"
```

## File structure 
-Replace the src folder created by the src folder in this github repository. <br>
-Make sure your file structure contains these :
```
src/
│
├── components/
│   ├── Login.js
│   ├── UserList.js
│   ├── EditUser.js
│
├── pages/
│   ├── HomePage.js
│   ├── LoginPage.js
│
├── utils/
│   ├── api.js
│
├── App.js
├── index.js
└── styles/
    ├── styles.css
```

## Possible dependencies (Assuming you already have npm in your system)

```
npm install axios react-router-dom bootstrap
npm intsall web-vitals
```


## Running the code
```
npm start
```
-This will run the web application in your local server which is  (http://localhost:3000/)


## Testing the web app
- Click on Go to Login to direct yourself to the Level 1 (Authentication Page) <br>
- Enter this email and password to login : (eve.holt@reqres.in) & (cityslicka) <br>
- Upon successful login, you can see the Users listed, browse through list using Next and Previous buttons.
- Added functionality of search bar to search the present page user easily.
- Test the Edit and Delete buttons for every profile displayed.
- Ctrl + C and type Y in the terminal to stop the development server of the website. 

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
