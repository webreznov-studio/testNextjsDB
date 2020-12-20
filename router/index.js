const express = require("express");
const checkUser = 

module.exports = function (app) {
  app.use(express.json());

  app.use("/router1", router1Router);
  app.use("/router2", router2Router);
};
