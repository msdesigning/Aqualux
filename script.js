/* =====================================================
   AQUALUX - Luxury Bahamas Charter Website
   SCRIPT.JS
===================================================== */


/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

    }, 500);

});



/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.getElementById("header");


window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});



/* =========================
   ACTIVE NAV LINK
========================= */


const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



/* =========================
   ANIMATED COUNTERS
========================= */

const counters = document.querySelectorAll(".stat-number");


let counterStarted = false;


function startCounters(){

    if(counterStarted) return;


    const statsSection = document.querySelector(".hero-stats");

    const position = statsSection.getBoundingClientRect().top;


    if(position < window.innerHeight){

        counterStarted = true;


        counters.forEach(counter => {

            const target = +counter.dataset.count;

            let count = 0;

            const speed = target / 80;


            function update(){

                count += speed;


                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }
                else{

                    counter.innerText = target + "+";

                }

            }


            update();

        });

    }

}


window.addEventListener("scroll", startCounters);



/* =========================
   FAQ ACCORDION
========================= */

const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item => {


    const button = item.querySelector(".faq-question");


    button.addEventListener("click", () => {


        faqItems.forEach(other => {

            if(other !== item){

                other.classList.remove("active");

            }

        });


        item.classList.toggle("active");


    });


});



/* =========================
   BACK TO TOP BUTTON
========================= */


const backTop = document.getElementById("back-to-top");


window.addEventListener("scroll", () => {


    if(window.scrollY > 500){

        backTop.classList.add("show");

    }

    else{

        backTop.classList.remove("show");

    }


});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});



/* =========================
   SMOOTH SCROLL
========================= */


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});



/* =========================
   SCROLL REVEAL ANIMATION
========================= */


const revealElements = document.querySelectorAll(
    ".tour-card, .feature-card, .why-card, .fleet-card, .testimonial-card, .contact-card"
);



const revealObserver = new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


            revealObserver.unobserve(entry.target);


        }


    });


},
{
    threshold:0.15
});



revealElements.forEach(element=>{


    element.classList.add("hidden");


    revealObserver.observe(element);


});



/* =========================
   BOOKING FORM
========================= */


const bookingForm = document.getElementById("booking-form");


bookingForm.addEventListener("submit",(e)=>{


    e.preventDefault();


    const button = bookingForm.querySelector("button");


    button.innerHTML =
    '<i class="fa-solid fa-check"></i> Request Sent';


    button.style.background="#1fa463";


    setTimeout(()=>{


        bookingForm.reset();


        button.innerHTML =
        "Request a Quote";


        button.style.background="";


    },3000);


});



/* =========================
   CURRENT YEAR FOOTER
========================= */


const year = document.querySelector(".footer-bottom p");


if(year){

    year.innerHTML =
    `&copy; ${new Date().getFullYear()} Aqualux. All rights reserved.`;

}