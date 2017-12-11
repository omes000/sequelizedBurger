var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();
var db = require("./models");

app.use(express.static(__dirname+ "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function() {
	app.listen(port, function() {
		console.log("Listening on port " + port);
	});
});