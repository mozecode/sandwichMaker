var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;
  var outputDiv = document.getElementById("output");
  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      outputDiv.innerHTML=`<h2>Your price for a sandwich with ${orderArray.join()} is $${totalPrice.toFixed(2)}.</h2>`

      }
  };
})(SandwichMaker || {});