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
let products = navNodeList[1];
let services = navNodeList[2];
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





// Add KeyFrame Animation On Scroll
let countryLogosNodeList = document.querySelectorAll('.countryLogos');
let northAmerica = countryLogosNodeList[0];
let southAmerica = countryLogosNodeList[1];
let europe = countryLogosNodeList[2];
let asia = countryLogosNodeList[3];

let productListNodeList = document.querySelectorAll('.productItems');
let paper = productListNodeList[0];
let boxes = productListNodeList[1];
let envelopes = productListNodeList[2];
let labels = productListNodeList[3];
let more = productListNodeList[4];

let servicesNodeList = document.querySelectorAll('.servicesItems');
let custom = servicesNodeList[0];
let award = servicesNodeList[1];
let easy = servicesNodeList[2];


window.addEventListener('scroll', (event) => {
    if (window.scrollY > 990) {
        northAmerica.classList.add('show');
        southAmerica.classList.add('show');
        europe.classList.add('show');
        asia.classList.add('show');
        paper.classList.add('show');
        boxes.classList.add('show');
        envelopes.classList.add('show');
        labels.classList.add('show');
        more.classList.add('show');
    }
});

window.addEventListener('scroll', (event) => {
    if (window.scrollY > 1725) {
        custom.classList.add('show');
        award.classList.add('show');
        easy.classList.add('show');
    }
});