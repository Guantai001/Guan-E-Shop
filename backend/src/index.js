const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');


const app = express();
const port = 3001;
const userRouter = require('./routes/authUser');

const MongoStore = require('connect-mongo');


require('./database');
require('./strategies/local');
require('./strategies/google');

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser());
app.use(
    session({
        secret: 'supersecret',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
          mongoUrl: 'mongodb://localhost:27017/groceries' }),
    })
);


app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
  });

  app.use(passport.initialize());
  app.use(passport.session());


app.use('/api/user', userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Path: backend/src/index.js