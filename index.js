const express = require('express');

// Following line is where NodeJS server is coupled to the HTML
// const moduleToFetch = require("./index");
// const getDatabase = moduleToFetch.getDatabase;
// const newEntryToDatabase = moduleToFetch.newEntryToDatabase;


const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});