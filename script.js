/* =====================================================
   AQUALUX CAPTAIN & MAINTENANCE PORTAL
   script.js
===================================================== */


/* =====================================================
   DOM ELEMENTS
===================================================== */

const modal = document.getElementById("vesselModal");

const modalWindow = document.querySelector(".modal-window");

const openButtons = document.querySelectorAll(".open-vessel-modal");

const closeButton = document.querySelector(".close-modal");

const dropdownButton = document.querySelector(".dropdown-button");

const dropdown = document.querySelector(".nav-dropdown");
const STAFF_PIN = "4728";

let staffAuthorized = false;



/* =====================================================
   MODAL FUNCTIONS
===================================================== */

function openModal() {

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}



/* =====================================================
   OPEN BUTTONS
===================================================== */

openButtons.forEach(button => {

    button.addEventListener("click", openModal);

});



/* =====================================================
   CLOSE BUTTON
===================================================== */

closeButton.addEventListener("click", closeModal);



/* =====================================================
   CLICK OUTSIDE
===================================================== */

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        closeModal();

    }

});



/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && modal.classList.contains("active")) {

        closeModal();

    }

});



/* =====================================================
   PREVENT MODAL FROM CLOSING
===================================================== */

modalWindow.addEventListener("click", function (event) {

    event.stopPropagation();

});
/* =====================================================
   SMOOTH SCROLLING
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});


/* =====================================================
   CLOSE DROPDOWN AFTER LINK CLICK
===================================================== */

/* =====================================================
   PASSWORD PROTECTED DROPDOWN
===================================================== */

dropdownButton.addEventListener("click", function (e) {

    e.preventDefault();

    e.stopPropagation();

    if (!staffAuthorized) {

        const entered = prompt("Enter Staff PIN");

        if (entered !== STAFF_PIN) {

            alert("Incorrect PIN");

            return;

        }

        staffAuthorized = true;

    }

    dropdown.classList.toggle("open");

});
/* =====================================================
   PROTECT STAFF LINKS
===================================================== */

document.querySelectorAll(".dropdown-menu a, .submenu-btn").forEach(item => {

    item.addEventListener("click", function(e){

        if(!staffAuthorized){

            e.preventDefault();

            e.stopPropagation();

            const entered = prompt("Enter Staff PIN");

            if(entered !== STAFF_PIN){

                alert("Incorrect PIN");

                return;

            }

            staffAuthorized = true;

            dropdown.classList.add("open");

        }

    });

});

/* =====================================================
   SUBMENUS
===================================================== */

document.querySelectorAll(".submenu-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        e.stopPropagation();

        this.parentElement.classList.toggle("active");

    });

});


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".dropdown-menu a");

function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
    ".dashboard-card, .spec-card, .operation-card, .notice-card"
).forEach(card => {

    card.classList.add("fade-up");

    observer.observe(card);

});


/* =====================================================
   PAGE LOADED
===================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
/* =====================================================
   CLOSE DROPDOWN WHEN CLICKING AWAY
===================================================== */

document.addEventListener("click", function (e) {

    if (!dropdown.contains(e.target)) {

        dropdown.classList.remove("open");

        document.querySelectorAll(".submenu").forEach(menu => {

            menu.classList.remove("active");

        });

    }

});


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%cAQUALUX Captain Portal Ready",
    "color:#00b8ff;font-size:16px;font-weight:bold;"
);
