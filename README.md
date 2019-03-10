## Cooper Test Challenge

 This project entails the building of a fitness tracking application using a specific test called The Cooper Test.
 This app allows users to track their performance and has the ability to present historical data of tests if a user has saved any data.

As there is a very high correlation between the distance someone can run (or walk) in 12 minutes and their VO2 max value,  this technique provides an accurate estimate of a persons fitness
This test also allows you to compare your cardiovascular endurance with others of your age and gender.

**Software utilized:**

#### BACK-END:
- Ruby on Rails
- Postgresql database
- Rspec

#### FRONT-END:
- React
- jest-puppeteer tests
- Semantic UI

#### CONNECTION:
- Postman

### Specific features incorporated:

- API built using Ruby on Rails
- Testing API endpoints with RSpec using request specs
- Use of CORS
- Authenticating users from a React application
- Making post requests to an API from a client

### Client site deployed:
[Go to page](https://5c855528835c50eef8c1dcc6--gifted-villani-becce3.netlify.com/)

### Backend site deployed:
[Go to page](https://np-cooper-api.herokuapp.com/api/v1/auth)


### Node package manager run instructions:

```
npm start
```
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
```
npm run build
```
Builds the app for production to the build folder.

## Question

In the current implementation of the Cooper Challenge, where are we doing the calculation or rather where do we check the result of the Cooper test. On the client or on the server? What are the pros and cons of doing it that way?

## Answer
In this application the  calculation is performed on the client side.  
Pros:
- calculation is performed rapidly as it does not require access to the server
- as developers we have more control over the look and behaviour of the application

Cons:
- Security is a concern as the client-side computer may be controlled by a malicious attacker. 


### External sources implemenented:
[Craft Academy](https://craftacademy.se/) - Course material and demos.  

[Stack Overflow](https://stackoverflow.com/) was consulted to gain deeper insight into the client and server concepts.
### Authors
[Nici Putter](https://github.com/NiciP)  
[Alecia Benjamin](https://github.com/aleciabenjamin/)
#### Test Functionality
Email: ali@nici.com

Password: password