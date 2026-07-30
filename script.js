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

/* =========================
   HEADER SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {

    const logo = document.querySelector(".logo");

    if (window.scrollY > 80) {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.backdropFilter = "blur(12px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

        logo.style.color = "#06384b";

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.style.color = "#06384b";
        });

        if (dropBtn) {
            dropBtn.style.color = "#06384b";
        }

    } else {

        header.style.background = "transparent";
        header.style.backdropFilter = "none";
        header.style.boxShadow = "none";

        logo.style.color = "white";

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.style.color = "white";
        });

        if (dropBtn) {
            dropBtn.style.color = "white";
        }

    }

});

/* =========================
   MOBILE MENU
========================= */

if (menu) {

    menu.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/* =========================
   MORE DROPDOWN
========================= */

if (dropBtn) {

    dropBtn.addEventListener("click", (e) => {

        e.preventDefault();
        e.stopPropagation();

        dropdown.classList.toggle("open");

    });

}

/* =========================
   CLOSE DROPDOWN WHEN CLICKING OUTSIDE
========================= */

document.addEventListener("click", (e) => {

    if (!dropdown.contains(e.target)) {

        dropdown.classList.remove("open");

    }

});

/* =========================
   CLOSE MOBILE MENU AFTER CLICKING LINK
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 1000) {

            navLinks.classList.remove("active");
            dropdown.classList.remove("open");

        }

    });

});

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* =========================
   SCROLL REVEAL
========================= */

const revealItems = document.querySelectorAll(

    ".intro-text, .intro-image, .experience-card, .story-image, .story-content, .gallery-grid img, .booking-box"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: .15

});

revealItems.forEach(item => {

    item.classList.add("reveal");

    observer.observe(item);

});

/* =========================
   ADD ANIMATION CSS
========================= */

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `

.reveal{

opacity:0;
transform:translateY(60px);
transition:1s ease;

}

.visible{

opacity:1;
transform:translateY(0);

}

`;

document.head.appendChild(animationStyle);

/* =========================
   HERO PARALLAX
========================= */

window.addEventListener("scroll", () => {

    if (heroImage) {

        heroImage.style.transform =
            "translateY(" + (window.scrollY * .25) + "px)";

    }

});

/* =========================
   BOOKING BUTTON
========================= */

if (bookingButton) {

    bookingButton.addEventListener("click", () => {

        document.querySelector("#booking").scrollIntoView({

            behavior: "smooth"

        });

    });

}

/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 200;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* =========================
   PAGE LOAD
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});