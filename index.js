var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101)
  var itemObj = {itemName: [item], itemPrice: price}
  cart.push(itemObj)
  
  return `${item} has been added to your cart.`
}

function viewCart() {
  var retString = "In your cart, you have "
  for (var i = 0; i < cart.length; i++) {
    retString += `${cart[i].itemName} at ${cart[i].itemPrice}`
    if (i !== cart.length) {
      retString += ", "
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}