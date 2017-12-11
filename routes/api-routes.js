var db = require("../models");

module.exports = function(app) {
	app.get("/index", function(req, res) {
		db.Burger.findAll({}).then(function(dbBurger){
			var burgerObject = {
				burgers: dbBurger
			};
			res.render("index", burgerObject);
		});
	});

	app.post("/index", function(req, res) {
		db.Burger.create({
			burger_name: req.body.burger_name, 
			devoured: req.body.devoured
		}).then(function(dbBurger){
			res.json({id: dbBurger.insertId});
		});
	});

	app.put("/index", function(req, res) {
		db.Burger.update({
			devoured: req.body.devoured
		}, {
			where:{
				id: req.body.id 
			}
		}).then(function(dbBurger){
			res.status(200).end();
		});
	});
};
