function CandyShop(numberOfCandy, numberOfLollypos){
	this.numberOfCandy = numberOfCandy;
	this.numberOfLollypos = numberOfLollypos;
	this.rateOfSpeed = this.numberOfLollypos / 10;

	var showCandies = document.getElementsByClassName("candies");
	var showLollypos = document.getElementsByClassName("lollypops");
	var showRateOfSpeed = document.getElementsByClassName("speed");



	showCandies[0].innerHTML = this.numberOfCandy;
	showLollypos[0].innerHTML = '🍭'.repeat(this.numberOfLollypos);
	showRateOfSpeed[0].innerHTML = this.rateOfSpeed;

	var buttonCandy = document.getElementsByClassName("create-candies");
	
	let that = this;
	buttonCandy[0].addEventListener("click", function(event) {
	that.numberOfCandy += 1;
		// console.log(that.numberOfCandy);
	showCandies[0].innerHTML = that.numberOfCandy;
	})

	var buttonLollypos = document.getElementsByClassName("buy-lollypops");
	buttonLollypos[0].addEventListener("click", function(event) {
	that.numberOfCandy -= 100;
	that.numberOfLollypos += 1;
	that.rateOfSpeed = that.numberOfLollypos / 10;

	showCandies[0].innerHTML = that.numberOfCandy;
	showLollypos[0].innerHTML = '🍭'.repeat(that.numberOfLollypos);
	showRateOfSpeed[0].innerHTML = that.rateOfSpeed;
	})

	var buttonCandyRain = document.getElementsByClassName("candy-machine");
	buttonCandyRain[0].addEventListener("click", function(event) {
	that.numberOfCandy +=10;
	showCandies[0].innerHTML = that.numberOfCandy;
	})

}

var newCandy = new CandyShop(500, 10);
