const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const cookieSession = require('cookie-session');
const { MongoClient } = require('mongodb');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}));

const port = 3001;
const userRouter = require('./routes/authUser');
const productRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

require('./database');
require('./strategies/local');
require('./strategies/google');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cookieSession({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: new MongoDBStore({
    uri: 'mongodb://localhost:27017/session-store',
    collection: 'sessions',
    client: MongoClient
  }),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
