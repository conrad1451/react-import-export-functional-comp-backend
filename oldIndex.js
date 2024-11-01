const express = require('express');

// Following line is where NodeJS server is coupled to the HTML
// const moduleToFetch = require("./index");
// const getDatabase = moduleToFetch.getDatabase;
// const newEntryToDatabase = moduleToFetch.newEntryToDatabase;


const app = express();
const PORT = process.env.PORT || 3000;

const ALLOWED_URL_1 = "https://react-api-use-test-2.vercel.app";
const ALLOWED_URL_2 = "http://localhost:5173/";

// Set middleware of CORS
app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      ALLOWED_URL_2
    );
    res.setHeader(
      "Access-Control-Allow-Origin",
      "*"
    );
    //   res.setHeader(
    //   "Access-Control-Allow-Origin",
    //   *  
    // ); // resulted in "unexpected token"
    // res.setHeader(
    //   "Access-Control-Allow-Methods",
    //   "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    // );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);
  
    next();
  }); 

// app.use(express.static("public"));
// app.use(
//   express.urlencoded({
//     extended: true,
//   }),
// );

// app.get("/users", async (req, res) => {
//   const users = await getDatabase();
//   res.json(users);
// });



app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/sendcomponent', (req, res) => {

    // Sending side
    // import MyComponent from './MyComponent';

    const componentConfig = {
    type: 'MyComponent',
    props: {
        title: 'Hello World',
        data: [1, 2, 3]
    }
    };

    const jsonString = JSON.stringify(componentConfig);

    
    res.send(jsonString);
    // res.send(jsonString);

    // res.send('Hello from Express!');

});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});