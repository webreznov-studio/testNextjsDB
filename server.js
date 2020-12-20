require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const helmet = require("helmet"); // creates headers that protect from attacks (security)
const cors = require("cors"); // allows/disallows cross-site communication
const userModel = require("./db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// --> Add this
// ** MIDDLEWARE ** //
const whitelist = [process.env.LOCALHOST_3000, process.env.LOCALHOST_8080, process.env.WEBREZNOV_AUDIO];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(helmet());
// --> Add this
app.use(cors(corsOptions));

app.put("/api/database/add-user", (req, res) => {
  const addUser = new userModel({
    id: "1r22-1r22-1r22-1r22",
    email: req.body.params.email,
    password: req.body.params.password,
    isAdmin: true,
  });

  addUser.save(function (err, doc) {
    if (err) {
      res.send("error: ", JSON.stringify(err));
      return console.log(err);
    }
    res.send(doc);
  });
});

app.post("/api/database/check-user", (req, res) => {
  const result = {
    status: false,
  };
  const findUser = userModel;
  console.log("1email: ", req.body.params.email);
  console.log("2password: ", req.body.params.password);

  findUser
    .findOne({}, (err, data) => {
      if (!data) {
        Object.assign(result, {
          status: false,
          message: "email error",
        });
        console.log(result);
        res.status(409).send(result);
      } else if (data.password === req.body.params.password) {
        Object.assign(result, {
          status: true,
          id: data.id,
        });
        console.log(result);
        res.status(200).send(result);
      } else {
        Object.assign(result, {
          status: false,
          message: "password error",
        });
        console.log(result);
        res.status(409).send(result);
      }

      if (err) {
        Object.assign(result, {
          status: false,
          message: JSON.stringify(err),
        });
        console.log(result);
        res.send(result);
      }
    })
    .where({ email: req.body.params.email });
});

// --> Add this
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
  console.log(`server listening on port: ${PORT}`);
});
