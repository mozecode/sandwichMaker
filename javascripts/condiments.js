
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condPrices={
  	sriracha: 1.25,
  	yellowMustard: .50,
  	honeyMustard: .75,
  	mayo: .50,
  	oilVinegar:.75
  };


  // Augment the original object with another method
  maker.addCond = function(selectedTopping) {
    return condPrices[selectedTopping];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});