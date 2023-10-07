document.getElementById('theme-toggle-btn').addEventListener('click', function() {
    const body = document.body;
    const themeIconPath = document.getElementById('theme-icon-path');
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeIconPath.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707-.707M16 16s-1.5-2-4-2-4 2-4 2'); // Ícono de luna
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        themeIconPath.setAttribute('d', 'M12 2A10 10 0 1022 12A10 10 0 0012 2z'); // Ícono de sol
        localStorage.setItem('theme', 'dark');
    }
});

// Al cargar la página, verifica el tema guardado en localStorage
document.addEventListener('DOMContentLoaded', (event) => {
    const currentTheme = localStorage.getItem('theme');
    const themeIconPath = document.getElementById('theme-icon-path');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIconPath.setAttribute('d', 'M12 2A10 10 0 1022 12A10 10 0 0012 2z'); // Ícono de sol
    }
});
