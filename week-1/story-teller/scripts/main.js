// Find elements
const image = document.querySelector('.story-image img');
const caption = document.querySelector('#story-caption');
const resetButton = document.querySelector('#reset-button');
// Story content
const captions = [
  "The Story of MLK Jr. \nClick the image to begin...",
  "Growing up in Atlanta he faced racial segregation, but he grew up with the strong Christian values instilled by his family.",
  "He took after his father and became a pastor, and also an activist for civil rights.",
  "After many peaceful protests he would go on to deliver his famous 'I Have a Dream' speech in Washington D.C.",
  "Unfortunately, his life was cut short when he was assassinated in 1968. The place where he was shot is now a National Historic Site.",
  "His legacy continues to inspire people around the world to fight for equality and justice. His birthday is now celebrated as a national holiday in the United States."
];

// Track current step
let currentStep = 0;

// Listen for clicks
image.addEventListener('click', function() {
  currentStep++;

  if (currentStep < captions.length) {
    // Update caption
    caption.textContent = captions[currentStep];

    // Update image
    image.src = `assets/images/image-${currentStep}.jpg`;

    // Update progress dots
     updateProgress(currentStep);
  
    // Story is complete - show reset button
  if (currentStep === 5) {
   resetButton.style.display = 'block';
  }
  }   
});

function updateProgress(step) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index <= step) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}
resetButton.addEventListener('click', function() {
  currentStep = 0;
  caption.textContent = captions[0];
  image.src = `assets/images/image-0.jpg`;
  updateProgress(0);
  resetButton.style.display = 'none';
});
