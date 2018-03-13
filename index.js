var cart = [];
var item;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// phunkshion1: this wizard passing!
function addToCart(item) {
  let itemObj = {
    [item]: Math.floor(Math.random()*100)
  }
  cart.push(itemObj);
  console.log(`${item} has been added to your cart.`)
  return cart
}

// phunkshion2: bring it
function viewCart() {
  var intro = 'In your cart, you have '
  var list = []
  
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  }  
  
  for(let i = 0; i < cart.length; i++) {
    var cartKey = Object.keys(cart[i]);
    var cartPrice = Object.values(cart[i]);
    list.push(`${cartKey} at $${cartPrice}`)
  }   
  
  if (cart.length === 1) {
    console.log(intro + list + '.')
  }
  
  if (cart.length === 2) {
    console.log(intro + list.join(' and ') + '.')
    } 
      
  if (cart.length >= 3) {
    var lastItem = list.splice(-1);
    list.splice(-1)
    console.log(intro + list.join(', ') + 'and ' + lastItem + '.' ) 
    }
   
}
// phunkshion3: come at me...D.O.N.EEEEEEEE

function total() {
  var sum = 0
  for (let i = 0; i < cart.length; i++) {
    var cartItem = cart[i];
    var cartItemPrice = Object.values(cartItem);
    sum += parseInt(cartItemPrice)
  } return sum
}

// phunkshion4: let's settle this score
function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
     if (cart[i].hasOwnProperty(item)) {
      delete cart.item
     } 
  }
    if (!cart.hasOwnProperty(item)) {
      console.log('That item is not in your cart.')
     }
      
     return cart
    
}
// phunkshion5: DOA
function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.' )
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0);
    }
}





