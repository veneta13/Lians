const express = require("express");
const cors = require("cors");
const MongoClient = require ("mongodb").MongoClient;

const app = express();
app.use(express.json());

const User = require("./models/User");

const Authentication = require("./apiRoutes/Authentication");
const SendNotifications = require("./apiRoutes/SendNotifications");

// WE NEED TO SET THIS UP AS ENV VARIABLE
const client = new MongoClient("mongodb+srv://aryan:abcd1234@cluster0.39ko8.azure.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useUnifiedTopology: true});
client.connect();

app.use(cors({
    origin: 'http://localhost:19006',
}));

app.post('/register', (req, res) => {
    Authentication.createUser(req, res, client.db("myFirstDatabase"), User)
});
app.get('/login', (req, res) => {
    Authentication.loginUser(req, res, client.db("myFirstDatabase"), User)
});

app.get('/sendnotification', (req, res) => {
    SendNotifications.sendNotifications(req, res)
});

app.get('/', (req, res) => { 
    res.status(200).json("Server is running"); 
});

app.listen(3000, () => console.log("Server running on port 3000"));
