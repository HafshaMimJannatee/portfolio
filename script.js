// ==== TOP NAV ====
//Nav bar
    const bar = document.getElementById("bar");
    const cancel = document.getElementById("cancel");
    const move = document.getElementById("sfTpNvItms");

    // Open menu when bars icon is clicked
    bar.addEventListener("click", function () {
        move.style.left = "0";
    });

    // Close menu when cross icon is clicked
    cancel.addEventListener("click", function () {
        move.style.left = "-100%";
    });

// ===== DARK MODE TOGGLE =====
const darkModeToggle = document.getElementById('dark-mode-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Check saved preference or system setting
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (savedTheme === null && prefersDark.matches)) {
    document.body.classList.add('dark-mode');
  }
}
loadTheme();

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Listen for system preference changes
prefersDark.addEventListener('change', (e) => {
  if (localStorage.getItem('theme') === null) {
    document.body.classList.toggle('dark-mode', e.matches);
  }
});
