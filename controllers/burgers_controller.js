var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/index", function(req,res){
	burger.selectAll(function(data){
		var burgerObject = {
			burgers: data
		};
		res.render("index", burgerObject);
	});
});

router.post("/index", function(req, res){
	burger.insertOne("burger_name", req.body.burger_name, function(result){
		res.json({id: result.insertId});
	});
});

router.put("/index", function(req,res){
	burger.updateOne("devoured", req.body.devoured, "id", req.body.id, function(result){
		res.status(200).end();
	})
})

module.exports = router;