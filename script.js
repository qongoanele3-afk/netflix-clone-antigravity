// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle (simple alert for demo purposes)
const mobileMenuIcon = document.getElementById('mobile-menu-icon');

mobileMenuIcon.addEventListener('click', () => {
    alert('Mobile menu toggled! (You could add a dropdown menu here)');
});

// Horizontal scroll with mouse wheel for rows
const rows = document.querySelectorAll('.row-posters');

rows.forEach(row => {
    row.addEventListener('wheel', (e) => {
        // Only prevent default if scrolling horizontally or if you strictly want to override vertical scrolling when hovering over rows.
        // For a better UX, it's sometimes better to allow normal scrolling or require Shift+Wheel.
        // We'll allow scrolling horizontally with wheel but let vertical wheel happen if at ends.
        e.preventDefault();
        row.scrollLeft += e.deltaY;
    });
});
