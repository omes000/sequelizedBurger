console.log("loaded");
$(function(){
	$(".create-form").on("submit", function(event){
		console.log("clicked");
		event.preventDefault();
		if($("#bu").val().trim() !== ""){
			$("#error-message").removeClass("visible").addClass("hidden");
			var newBurger = {
				burger_name: $("#bu").val().trim(),
				devoured: false
			};
			$.ajax("/index", {
				type: "POST",
				data: newBurger
			}).then(function(){
				console.log("added new burger");
				location.reload();
			});
		} else {
			$("#error-message").removeClass("hidden").addClass("visible");
		}
	});

	$(".devour").on("click", function(event){
		var id = $(this).attr("id");
		var newDevourState = {
			id: id,
			devoured: 1
		}

		$.ajax("/index", {
			type: "PUT",
			data: newDevourState
		}).then(function(){
			console.log("changed");
			location.reload();
		})
	})
})
