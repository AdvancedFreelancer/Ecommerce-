let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  totalPrice += price;
  document.getElementById('cart-items').innerHTML = cart.map(item => `<p>${item.product} - $${item.price}</p>`).join('');
  document.getElementById('total-price').textContent = totalPrice;
}

function checkout() {
  alert('Proceeding to payment integration...');
  // Here you would integrate PayPal, Fampay, etc.
}
