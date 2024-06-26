document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    const visitorCountElement = document.getElementById('visitor-count');
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    visitorCountElement.textContent = visitorCount;

    const navbarToggler = document.querySelector('.navbar-toggler');
    const sidebar = document.querySelector('.sidebar');

    navbarToggler.addEventListener('click', function() {
        sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
    });
});
