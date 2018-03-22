// When the user scrolls 20 px from the top, show the topButton
window.onscroll = function() {
    showTopButton()
};

function showTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
};



// Scroll To Top Feature
let topOfPageList = document.getElementsByTagName('button');
let topOfPage = topOfPageList[0];

topOfPage.addEventListener('click', (scrollToTop) => {
    document.querySelector('#logo').scrollIntoView({ behavior: 'smooth' });
});
// I chose the logo because it is at the top of the page





//Scroll to Section Feature
let navNodeList = document.getElementsByClassName('navBarItems');
let aboutUs = navNodeList[0];
let services = navNodeList[1];
let products = navNodeList[2];
let contactUs = navNodeList[3];

aboutUs.addEventListener('click', (scrollToSection) => {
    document.querySelector('#aboutUs').scrollIntoView({ behavior: 'smooth' });
});

services.addEventListener('click', (scrollToSection) => {
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

products.addEventListener('click', (scrollToSection) => {
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});

contactUs.addEventListener('click', (scrollToSection) => {
    document.querySelector('#contactUs').scrollIntoView({ behavior: 'smooth' });
});


