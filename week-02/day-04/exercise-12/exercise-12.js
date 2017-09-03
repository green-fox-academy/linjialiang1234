'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// The frist columns should be automatically as wide as the longest key

var ingredients = [{
	'vodka': 1,
	'needs_cooling': true
}, {
	'coffee_liqueur': 0,
	'needs_cooling': true
}, {
	'fresh_cream': 1,
	'needs_cooling': true
}, {
	'captain_morgan_rum': 2,
	'needs_cooling': true
}, {
	'mint_leaves': 0,
	'needs_cooling': false
}, {
	'sugar': 100,
	'needs_cooling': false
}, {
	'lime juice': 10,
	'needs_cooling': true
}, {
	'soda': 100,
	'needs_cooling': true
}]



var arr = [];
var key_length = [];
var max_first_colume_length = 0;
var second_colume_length = "Needs cooling".length;
var third_colume_length = "In stock".length;
for (var i = 0; i < ingredients.length; i++) {
	for (var v in ingredients[i]) {
		arr.push(v);
		arr.push(ingredients[i][v]);
		key_length.push(v.length);
	}
}
max_first_colume_length = Math.max.apply(Math, key_length);

function ingredient(para) {
	console.log("+-" + "-".repeat(max_first_colume_length) + "-+-" + "-".repeat(second_colume_length) + "-+-" + "-".repeat(third_colume_length) + "-+");
	console.log("| " + "Ingredient" + " ".repeat((max_first_colume_length - "Ingredient".length)) + " | " + "Needs cooling" + " | " + "In stock" + " |");
	console.log("+-" + "-".repeat(max_first_colume_length) + "-+-" + "-".repeat(second_colume_length) + "-+-" + "-".repeat(third_colume_length) + "-+");

	var yes_or_no = "";
	var number_stock = "";

	for (var i = 0; i < arr.length; i = i + 4) {
		if (arr[i + 3] === true) {
			yes_or_no = "YES";
		} else {
			yes_or_no = "No";
		}
		if (arr[i + 1] === 0) {
			number_stock = "-";
		} else {
			number_stock = arr[i + 1];
		}

		console.log("| " + arr[i] + " ".repeat((max_first_colume_length - arr[i].length)) + " | " + yes_or_no + " ".repeat(second_colume_length - yes_or_no.length) + " | " + number_stock + " ".repeat(third_colume_length - number_stock.toString().length) + " |");
	}
	console.log("+-" + "-".repeat(max_first_colume_length) + "-+-" + "-".repeat(second_colume_length) + "-+-" + "-".repeat(third_colume_length) + "-+");
}

ingredient(ingredients);