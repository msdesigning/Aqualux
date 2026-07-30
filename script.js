/* =====================================================
   AQUALUX - SCRIPT.JS
===================================================== */

/* =========================
   ELEMENTS
========================= */

const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".dropbtn");
const bookingButton = document.querySelector(".booking-card button");
const heroImage = document.querySelector(".hero-image img");

const STAFF_PIN = "4728";
let staffAuthorized = false;

/* =========================
   HEADER
========================= */

window.addEventListener("scroll", () => {

    const logo = document.querySelector(".logo");

    if (window.scrollY > 80) {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.backdropFilter = "blur(12px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        logo.style.color = "#06384b";

        document.querySelectorAll(".nav-links > li > a").forEach(link=>{
            link.style.color="#06384b";
        });

        dropBtn.style.color="#06384b";

    } else {

        header.style.background="transparent";
        header.style.backdropFilter="none";
        header.style.boxShadow="none";

        logo.style.color="white";

        document.querySelectorAll(".nav-links > li > a").forEach(link=>{
            link.style.color="white";
        });

        dropBtn.style.color="white";

    }

});

/* =========================
   MOBILE MENU
========================= */

menu.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

/* =========================
   STAFF DROPDOWN
========================= */

dropBtn.addEventListener("click",(e)=>{

    e.preventDefault();
    e.stopPropagation();

    if(!staffAuthorized){

        const entered=prompt("Enter Staff PIN");

        if(entered!==STAFF_PIN){

            alert("Incorrect PIN");
            return;

        }

        staffAuthorized=true;

    }

    dropdown.classList.toggle("open");

});

/* =========================
   SUBMENUS
========================= */

document.querySelectorAll(".submenu-btn").forEach(button=>{

    button.addEventListener("click",(e)=>{

        e.preventDefault();
        e.stopPropagation();

        button.parentElement.classList.toggle("active");

    });

});

/* =========================
   CLOSE WHEN CLICKING AWAY
========================= */

document.addEventListener("click",(e)=>{

    if(!dropdown.contains(e.target)){

        dropdown.classList.remove("open");

        document.querySelectorAll(".submenu").forEach(menu=>{

            menu.classList.remove("active");

        });

    }

});

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* =========================
   HERO PARALLAX
========================= */

window.addEventListener("scroll",()=>{

    heroImage.style.transform=
        "translateY("+(window.scrollY*.25)+"px)";

});

/* =========================
   BOOKING BUTTON
========================= */

bookingButton.addEventListener("click",()=>{

    document.querySelector("#booking").scrollIntoView({

        behavior:"smooth"

    });

});

/* =========================
   SCROLL REVEAL
========================= */

const revealItems=document.querySelectorAll(

".intro-text,.intro-image,.experience-card,.story-image,.story-content,.gallery-grid img,.booking-box,.vessel-image,.vessel-details"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{threshold:.15});

revealItems.forEach(item=>{

item.classList.add("reveal");

observer.observe(item);

});

const style=document.createElement("style");

style.innerHTML=`

.reveal{

opacity:0;
transform:translateY(60px);
transition:1s;

}

.visible{

opacity:1;
transform:none;

}

`;

document.head.appendChild(style);