const express = require("express");
const connectBD = require("./Config/db");
const cors = require('cors')
const doenv = require("dotenv").config();
const app = express();

const port = 5000;

app.use(cors());

// connexion a la bd
connectBD();

// les middlewares qui permet de traiter les donnees de resquet
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// les router
app.use("/post" , require("./Router/post.route"));
app.use("/" , require("./Router/user.route"));

// lancer le serveur
app.listen(port , ()=>{console.log("le server a demarrer au port "+ port)});
