const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");
const users = require("./routes/api/users");

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

// connect to mongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"), err => console.log(err));

const port = process.env.PORT || 5000;

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// User routes
app.use("/api/users/", users);
app.use("/api/profile/", profile);
app.use("/api/posts/", posts);

app.listen(port, () => console.log("Server is up on port " + port));
