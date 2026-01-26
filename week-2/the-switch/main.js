// Step 1: Find the button
// What selector goes here? Look at your HTML — what class is on the button?
const toggle = document.querySelector('.toggle');

// Step 2: Listen for clicks
toggle.addEventListener('click', function() {
  // Step 3: Toggle the dark class on body
  document.body.classList.toggle('dark');
  // What class are we toggling? Look at your CSS — what class changes the colors?
  
});