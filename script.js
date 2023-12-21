document.addEventListener('DOMContentLoaded', function() {
  const title = document.getElementById('animatedTitle');
  const originalText = "Durate Store";
  let currentIndex = 0;

  function animateTitle() {
    document.title = originalText.slice(0, currentIndex) + "⠀";
    currentIndex++;

    if (currentIndex > originalText.length) {
      currentIndex = 0;
    }
  }

  setInterval(animateTitle, 250);
});

function toggleTheme() {
  const body = document.body;
  const logo = document.getElementById('logo');
  const themeToggleIcon = document.getElementById('themeToggleIcon');

  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    logo.src = 'img/logo-escrito.png';
    themeToggleIcon.src = 'img/sol.png'; // Imagem para o tema claro
  } else {
    body.classList.add('dark-theme');
    logo.src = 'img/logo-escrito-white.png';
    themeToggleIcon.src = 'img/lua.png'; // Imagem para o tema escuro
  }
}