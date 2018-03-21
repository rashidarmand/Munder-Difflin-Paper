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






// document.addEventListener('click', (scrollToContactUs) => {
//     let navNodeList = document.getElementsByClassName('navBarItems');
//     let contactUs = navNodeList[3];

// }





// let scrollToContactUs = scrollToContactUs();
// document.addEventListener('click', (event)// => { });
//     function scrollToContactUs() {
//       document.querySelector('#contactUs').scrollIntoView({ behavior: 'smooth' });
// }






// let navBarItems = document.querySelectorAll('.navBarScroll')

// console.log(navBarItems)

// document.querySelectorAll('.navBarScroll').scrollIntoView({ behavior: 'smooth' });

// // scrollIntoView({ 
// //     behavior: 'smooth' 
// //   });