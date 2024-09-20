// document.addEventListener('DOMContentLoaded', () => {
//     const navhead = document.querySelector('.navhead');
//     let scrollTimeout;

//     if (!navhead) {
//         console.error("navhead element not found");
//         return;
//     }

//     function showNavhead() {
//         navhead.classList.remove('hidden');
//         navhead.classList.add('visible');
//     }

//     function hideNavhead() {
//         navhead.classList.remove('visible');
//         navhead.classList.add('hidden');
//     }

//     window.addEventListener('scroll', () => {
//         if (window.scrollY === 0) {
//             navhead.classList.remove('hidden', 'visible');
//             navhead.classList.add('fixed');
//         } else {
//             showNavhead();
//             clearTimeout(scrollTimeout);
//             scrollTimeout = setTimeout(hideNavhead, 3000);
//             navhead.classList.add('fixed');
//         }
//     });

    
//     navhead.addEventListener('mouseenter', () => {
//         clearTimeout(scrollTimeout); 
//         showNavhead(); 
//     });

//     navhead.addEventListener('mouseleave', () => {
//         if (window.scrollY > 0) { 
//             scrollTimeout = setTimeout(hideNavhead, 3000);
//         }
//     });
// });

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close the menu when a link is clicked
const links = navLinks.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

