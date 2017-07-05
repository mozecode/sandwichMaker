// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices={
  	turkey:1.00,
  	ham: 1.00,
  	lamb: 1.50,
  	chicken:1.00,
  	bacon:.75
  };


  // Augment the original object with another method
  maker.addMeat = function(selectedTopping) {
  	  return meatPrices[selectedTopping];

  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});