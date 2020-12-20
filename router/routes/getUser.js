const models = require("../db/models");

app.get("/api/database/add-user", (req, res) => {
    const addUser = new models.userModel({
      id: "1r22-1r22-1r22-1r22",
      email: "test@gmail.com",
      password: "qwe123",
      isAdmin: true,
    });

    addUser.save(function (err) {
      if (err) return console.log(err);
      res.send("user added!");
    });
  });