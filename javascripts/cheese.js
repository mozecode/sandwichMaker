var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices={
  	american: .50,
  	cheddar: .75,
  	swiss: .90,
  	havarti: 1.05,
  	provolone: .60
  };

  // Augment the original object with another method
  maker.addCheese = function(selectedTopping) {
    return cheesePrices[selectedTopping];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});