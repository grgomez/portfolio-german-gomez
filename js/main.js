// NAVBAR COLOR
const header = document.querySelector('.header');

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= window.innerHeight -  window.innerHeight * 0.1) {
        header.classList.add("colored");
    } 
    else {
        header.classList.remove("colored");
    }
};