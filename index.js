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
  this.gay = true
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

var t = new viewCart()
console.log(t.gay)