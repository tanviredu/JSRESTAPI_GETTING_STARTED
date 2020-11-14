let bodyParser = require("body-parser");
let morgan = require("morgan");
const am = function (app) {
	app.use(morgan("dev"));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }))
	return app;
}
module.exports = am;