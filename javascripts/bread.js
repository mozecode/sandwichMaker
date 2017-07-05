//augmenting iife
var SandwichMaker = (function(maker) {

  // Private variable to store the different prices
  var breadPrices={
  		wholeWheat: 1.00,
  		sourdough: 1.50,
  		rye:1.50,
  		honeyOat: 2.00,
  		pumpernickel: 2.50
  };

   // Augment the original object with another method
  maker.addBread = function(selectedTopping) {
    return breadPrices[selectedTopping];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker ||{});