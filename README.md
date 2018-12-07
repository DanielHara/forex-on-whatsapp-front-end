# Front End Forex On WhatsApp

This is a simple app built on React-Redux, but includes the most used features of React-Redux, such as routing, state management, store, mapStateToProps and mapDispatchToProps.

This will be the front end of my Forex On WhatsApp application: https://github.com/DanielHara/forex-on-whatsapp

This app is still just saving the users on Redux store, but I am already working on hitting the endpoints of my API running locally. I just need to solve some CORS issues I am having.

To get the exchange rates for the Euro, you'll need a Fixer API key: https://fixer.io

Create a .env file with the key:
```
REACT_APP_FIXER_API_KEY=YOUR_FIXER_API_KEY
```

Running on Linux:
```
npm install && npm run start
```
The app will be running on http://localhost:3000/

![](demo.gif)

Have fun!
