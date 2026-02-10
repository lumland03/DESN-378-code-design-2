
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


const lightToggle = document.querySelector('.light') 
const darkToggle = document.querySelector('.dark') 
const systemToggle = document.querySelector('.system') 

lightToggle.addEventListener('click', function() {
  document.documentElement.dataset.theme = 'light';
  localStorage.setItem('theme', 'light');  // NEW: Save to memory
}
);

darkToggle.addEventListener('click', function() {
  document.documentElement.dataset.theme = 'dark';
  localStorage.setItem('theme', 'dark');  // NEW: Save to memory
}
);

systemToggle.addEventListener('click', function() 
{  localStorage.setItem('theme', 'system');  // NEW: Save to memory

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    document.documentElement.dataset.theme = 'dark';
  } else {  document.documentElement.dataset.theme = 'light';
}
});





// Don't copy this directly—translate it into working JavaScript:
// ```
// function getAppliedTheme(storedPreference):
//     if storedPreference is "light":
//         return "light"
//     if storedPreference is "dark":
//         return "dark"
//     if storedPreference is "system" OR storedPreference is empty:
//         check OS preference
//         return "dark" if OS prefers dark, else "light"

// on page load:
//     read stored preference from localStorage
//     apply the resolved theme to the page

// when user clicks an option:
//     store their CHOICE (not the resolved theme)
//     apply the resolved theme to the page
