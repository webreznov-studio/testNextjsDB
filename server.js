require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const helmet = require('helmet') // creates headers that protect from attacks (security)
const cors = require('cors')  // allows/disallows cross-site communication
const userModel = require('./db')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// --> Add this
// ** MIDDLEWARE ** //
const whitelist = [
  process.env.LOCALHOST_3000, 
  process.env.LOCALHOST_8080, 
  process.env.WEBREZNOV_AUDIO
]
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
// --> Add this
app.use(cors(corsOptions))

app.get('/api/database/add-user', (req, res) => {
  const addUser = new userModel({
    id: '1r22-1r22-1r22-1r22',
    email: 'sharkercool96@gmail.com',
    password: 'qwe123',
    isAdmin: true,
  });

  addUser.save(function (err) {
    if (err) return handleError(err);
  });

  res.send('user added!');
});

app.get('/api/database/check-user', (req, res) => {
  const result = {
    status: false
  };
  const findUser = userModel;
  console.log('email: ',req.query.email)
  console.log('password: ',req.query.password)

  findUser
    .findOne({}, (err, data) => {
      if (data.password === req.query.password) {
        Object.assign(result, {
          status: true,
          id: data.id
        })
      } else {
        Object.assign(result, {
          status: false,
        })
      }
    })
    .where({email: req.query.email});

  console.log(result)
  res.send(result)
});

// --> Add this
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080
app.listen(PORT, (req, res) => {
    console.log(`server listening on port: ${PORT}`)
  });
