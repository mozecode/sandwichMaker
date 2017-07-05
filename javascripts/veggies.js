var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var vegPrices={
  	spinach: .55,
  	olives: .75,
  	tomato: .35,
  	pickles: .25,
  	avocado: .75
  };

  // Augment the original object with another method
  maker.addVeg = function(selectedTopping) {
    return vegPrices[selectedTopping];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});