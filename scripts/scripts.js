document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    const body = document.body;

    // Toggle dark mode
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    // Fetch and update visitor count
    async function fetchVisitorCount() {
        try {
            const response = await fetch('https://dw7kfk3jyd.execute-api.us-west-2.amazonaws.com/prod/visitorcount');
            const data = await response.json();
            return data.count;
        } catch (error) {
            console.error('Failed to fetch visitor count', error);
            return 0;
        }
    }

    async function updateVisitorCount() {
        const visitorCountElement = document.getElementById('visitor-count');
        const count = await fetchVisitorCount();
        if (visitorCountElement) {
            visitorCountElement.textContent = count;
        }
    }

    updateVisitorCount();

    // Handle mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const sidebar = document.querySelector('.sidebar');

    navbarToggler.addEventListener('click', function() {
        sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
    });

    // Ensure the sidebar is hidden on mobile view initially
    if (window.innerWidth <= 768) {
        sidebar.style.display = 'none';
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    });
});
