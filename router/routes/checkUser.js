const models = require("../db/models");

app.get("/api/database/check-user", (req, res) => {
    const result = {
      status: false,
    };
    const findUser = models.userModel;
    console.log("email: ", req.query.email);
    console.log("password: ", req.query.password);

    findUser
      .findOne({}, (err, data) => {
        if (data.password === req.query.password) {
          Object.assign(result, {
            status: true,
            id: data.id,
          });
        } else {
          Object.assign(result, {
            status: false,
          });
        }
      })
      .where({ email: req.query.email });

    console.log(result);
    res.send(result);
  });