const router = require("express").Router();
const controller = require("./PieController"); 
const createRoute = require("../../util/createRoute");

createRoute(router, controller);

module.exports = router;