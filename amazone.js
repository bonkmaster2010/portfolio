// script.js

// Initialize the cart count
let cartCount = 0;

// Function to update the cart display
function updateCart() {
  const cartButton = document.querySelector('.cart button');
  cartButton.textContent = `Cart (${cartCount})`;
}

// Function to handle adding items to the cart
function addToCart() {
  cartCount++;
  updateCart(); // Update the cart display
}

// Attach event listeners to product buttons
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.product button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
});