/* =====================================================
   AQUALUX - Tropical Bahamas Luxury Website
   SCRIPT.JS
===================================================== */


/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(255,255,255,0.95)";
        header.style.backdropFilter = "blur(10px)";

        document.querySelector(".logo").style.color = "#06384b";


        document.querySelectorAll(".nav-links a")
        .forEach(link => {

            link.style.color = "#06384b";

        });


    } else {


        header.style.background = "transparent";


        document.querySelector(".logo").style.color = "white";


        document.querySelectorAll(".nav-links a")
        .forEach(link => {

            link.style.color = "white";

        });


    }


});





/* =========================
   MOBILE MENU
========================= */


const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");


menu.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});





/* =========================
   MOBILE MENU STYLE
========================= */


const style = document.createElement("style");


style.innerHTML = `

@media(max-width:1000px){

.nav-links.active{

display:flex;
position:absolute;
top:100px;
left:0;
width:100%;
background:white;

flex-direction:column;
align-items:center;

padding:40px;

box-shadow:0 20px 40px rgba(0,0,0,.1);

}

.nav-links.active a{

color:#06384b !important;

}

}

`;

document.head.appendChild(style);






/* =========================
   SMOOTH SCROLL
========================= */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target=document.querySelector(
this.getAttribute("href")
);


if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


navLinks.classList.remove("active");


}


});


});







/* =========================
   SCROLL REVEAL ANIMATION
========================= */


const revealElements = document.querySelectorAll(

".intro-text, .intro-image, .experience-card, .story-image, .story-content, .gallery-grid img, .booking-box"

);



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("visible");


}


});


},

{

threshold:.15

}


);



revealElements.forEach(element=>{


element.classList.add("reveal");


observer.observe(element);


});






/* =========================
   ADD ANIMATION CSS
========================= */


const animationCSS = document.createElement("style");


animationCSS.innerHTML = `


.reveal{

opacity:0;
transform:translateY(60px);
transition:1s ease;

}



.visible{

opacity:1;
transform:translateY(0);

}



.booking-card{

animation:floatCard 4s ease-in-out infinite;

}



@keyframes floatCard{


0%{

transform:translateY(0);

}


50%{

transform:translateY(-15px);

}


100%{

transform:translateY(0);

}


}



`;



document.head.appendChild(animationCSS);







/* =========================
   HERO PARALLAX EFFECT
========================= */


const heroImage = document.querySelector(".hero-image img");


window.addEventListener("scroll",()=>{


let scroll = window.scrollY;


if(heroImage){


heroImage.style.transform =

`translateY(${scroll * .25}px)`;


}


});






/* =========================
   IMAGE HOVER EFFECT
========================= */


document.querySelectorAll("img")
.forEach(image=>{


image.addEventListener("mouseenter",()=>{


image.style.transition=".5s";


});


});






/* =========================
   BOOKING BUTTON
========================= */


const bookingButton =
document.querySelector(".booking-card button");



if(bookingButton){


bookingButton.addEventListener("click",()=>{


document.querySelector("#booking")
.scrollIntoView({

behavior:"smooth"

});


});


}






/* =========================
   ACTIVE SECTION HIGHLIGHT
========================= */


const sections =
document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop =
section.offsetTop - 200;


if(window.scrollY >= sectionTop){

current = section.id;

}


});



document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}


});


});






/* =========================
   PAGE LOAD EFFECT
========================= */


window.addEventListener("load",()=>{


document.body.style.opacity="1";


});