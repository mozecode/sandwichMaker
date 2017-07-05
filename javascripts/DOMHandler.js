// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

let orderArray = [];
// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var breadChooser = document.getElementById("bread-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condChooser = document.getElementById("cond-chooser");
var vegChooser = document.getElementById("veg-chooser");
/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  orderArray.push(selectedTopping);
  let meatCost= SandwichMaker.addMeat(selectedTopping);
   // Determine the price of the topping chosen
  SandwichMaker.addTopping(meatCost);
  // Add the topping to the SandwichMaker to increase the total price
});

breadChooser.addEventListener("change", function(event){
	selectedBread= event.target.value;
	orderArray.push(selectedBread);
	let breadCost = SandwichMaker.addBread(selectedBread);
	SandwichMaker.addTopping(breadCost);

})

cheeseChooser.addEventListener("change", function(event){
	selectedCheese = event.target.value;
	orderArray.push(selectedCheese);
	let cheeseCost = SandwichMaker.addCheese(selectedCheese);
	SandwichMaker.addTopping(cheeseCost);

})

condChooser.addEventListener("change", function(event){
	selectedCond = event.target.value;
	orderArray.push(selectedCond);
	let condCost = SandwichMaker.addCond(selectedCond);
	SandwichMaker.addTopping(condCost);

})

vegChooser.addEventListener("change", function(event){
	selectedVeg = event.target.value;
	orderArray.push(selectedVeg);
	let vegCost = SandwichMaker.addVeg(selectedVeg);
	SandwichMaker.addTopping(vegCost);

})

