// JavaScript code to change image source on hover
let accountIcon = document.getElementById("AccountIcon");
let shoppingCartIcon = document.getElementById("ShoppingCartIcon");

// Change image source on hover for Account Icon
accountIcon.addEventListener("mouseover", function() {
    accountIcon.src = "img/AccountIcon_Hover.png";
});

accountIcon.addEventListener("mouseout", function() {
    accountIcon.src = "img/AccountIcon.png";
});

// Change image source on hover for Shopping Cart Icon
shoppingCartIcon.addEventListener("mouseover", function() {
    shoppingCartIcon.src = "img/ShoppingCartIcon_Hover.png";
});

shoppingCartIcon.addEventListener("mouseout", function() {
    shoppingCartIcon.src = "img/ShoppingCartIcon.png";
});


// code for responsiveness
// Get the elements
const logoImg = document.querySelector('.weldasLogo');
const searchbar = document.querySelector('.wholeSearchbar');
const headerIcons = document.querySelector('.headerIcons');
const menuButtons = document.querySelectorAll('.menuButton');
const menuBtn = document.querySelector("#menuBtn");
const menuOptions = document.querySelector(".menuOptions");
const openMenu = document.getElementsByClassName(".open");
const closeMenu = document.getElementsByClassName(".menu");

// Add a resize event listener to the window
window.addEventListener('resize', function() {
    // Get the window width
    const width = window.innerWidth;

    // Check if the width is less than 1200 pixels
    if (width < 1200) {
        // Change the Weldas logo image source
        logoImg.src = 'img/Weldas Logo small.png';

        // Hide the search bar, header icons, and menu buttons
        searchbar.style.display = 'none';
        headerIcons.style.display = 'none';
        menuBtn.style.display = 'inline-block';
        // Add 'side' class to menu buttons
        menuButtons.forEach(button => button.classList.add('side'));
    } else {
        // Change the Weldas logo image source back to the original
        logoImg.src = 'img/Weldas logo.gif';

        // Show the search bar, header icons, and menu buttons
        searchbar.style.display = 'block';
        headerIcons.style.display = 'flex';
        menuBtn.style.display = 'none';
        // Remove 'side' class from menu buttons
        menuButtons.forEach(button => button.classList.remove('side'));
    }
});

// Add a click event listener to the menu button
menuBtn.addEventListener('click', () => {
    menuOptions.classList.toggle('show');
    menuBtn.classList.toggle('open');
    menuBtn.classList.toggle('menu');
});

// Add a mutation observer to the menu options
const observer = new MutationObserver(mutations => {
    // Check if the menu options has the 'show' class
    const hasShowClass = menuOptions.classList.contains('show');

    // Toggle the 'side' class on each menu button based on the 'show' class
    menuButtons.forEach(button => {
        if (hasShowClass) {
            button.classList.add('side');
            button.style.color = 'white';
            button.style.padding = 'inherit';
            button.style.display = 'flex';
            button.style.height = 'fit-content';
        } else {
            button.classList.remove('side');
            button.style.display = 'none';
        }
    });
});

observer.observe(menuOptions, { attributes: true });