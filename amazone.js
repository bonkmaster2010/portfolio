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

const body = document.querySelector('body');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;  // Mouse X position as a fraction of screen width
  const y = e.clientY / window.innerHeight; // Mouse Y position as a fraction of screen height

  // Map the mouse position to color values
  const r = Math.floor(x * 255);  // Red value based on X position
  const g = Math.floor(y * 255);  // Green value based on Y position
  const b = Math.floor((x + y) * 128);  // Blue value based on combined X and Y position

  // Apply the background color dynamically based on mouse movement
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});