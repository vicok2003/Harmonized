document.addEventListener('DOMContentLoaded', () => {
    const navhead = document.querySelector('.navhead');
    let scrollTimeout;

    if (!navhead) {
        console.error("navhead element not found");
        return;
    }

    // Function to show navhead
    function showNavhead() {
        navhead.classList.remove('hidden');
        navhead.classList.add('visible');
    }

    // Function to hide navhead after scrolling stops
    function hideNavhead() {
        navhead.classList.remove('visible');
        navhead.classList.add('hidden');
    }

    // Event listener for scrolling
    window.addEventListener('scroll', () => {
        // If the user is at the top of the page
        if (window.scrollY === 0) {
            // Keep the navhead fixed and visible
            navhead.classList.remove('hidden', 'visible');
            navhead.classList.add('fixed');
        } else {
            // Show the navhead when scrolling
            showNavhead();
            // Clear the previous timeout to reset the hide timer
            clearTimeout(scrollTimeout);
            // Set the timeout to hide the navhead after 3 seconds of no scrolling
            scrollTimeout = setTimeout(hideNavhead, 3000);
            // Ensure the navhead is fixed when scrolling
            navhead.classList.add('fixed');
        }
    });

    // Event listeners to keep navhead visible when mouse is over it
    navhead.addEventListener('mouseenter', () => {
        clearTimeout(scrollTimeout); // Clear the timeout to prevent hiding
        showNavhead(); // Ensure it stays visible
    });

    navhead.addEventListener('mouseleave', () => {
        if (window.scrollY > 0) { // Only hide if not at the top
            scrollTimeout = setTimeout(hideNavhead, 3000);
        }
    });
});
