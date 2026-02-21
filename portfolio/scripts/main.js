const savedTheme = localStorage.getItem('theme');
if (savedTheme) {  
  // User has made a choice — respect it
  document.documentElement.dataset.theme = savedTheme;
} else {
  // No saved choice — check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
}
// const toggle = document.querySelector('.theme-toggle');

// toggle.addEventListener('click', function() {
//   const currentTheme = document.documentElement.dataset.theme;

//   let newTheme;
//   if (currentTheme === 'dark') {
//     newTheme = 'light';
//   }  else {
//     newTheme = 'dark';
//   } 

//   document.documentElement.dataset.theme = newTheme;
//   localStorage.setItem('theme', newTheme);  // NEW: Save to memory
// });


// const toggle = document.querySelector('.theme-toggle');
// toggle.addEventListener('click', function() {});




const lightToggle = document.querySelector('.light') 
const darkToggle = document.querySelector('.dark') 
const systemToggle = document.querySelector('.system') 

// lightToggle.addEventListener('click', function() {
//   document.documentElement.dataset.theme = 'light';
//   localStorage.setItem('theme', 'light');  // NEW: Save to memory
// }
// );

// darkToggle.addEventListener('click', function() {
//   document.documentElement.dataset.theme = 'dark';
//   localStorage.setItem('theme', 'dark');  // NEW: Save to memory
// }
// );

systemToggle.addEventListener('click', function() {
  localStorage.setItem('theme', 'system');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
});

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}

// Add keyboard support (Enter/Space to activate)
[lightToggle, darkToggle, systemToggle].forEach(button => {
  button.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});







