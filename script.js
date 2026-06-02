/* =========================
   STICKY NAVBAR EFFECT
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

let countersStarted = false;

function runCounters() {
    if (countersStarted) return;

    const statsSection = document.querySelector(".hero-stats");

    if (!statsSection) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
        countersStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.dataset.target);
            const duration = 2000;
            const increment = target / (duration / 16);

            let current = 0;

            const updateCounter = () => {
                current += increment;

                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }
}

window.addEventListener("scroll", runCounters);
window.addEventListener("load", runCounters);

/* =========================
   SMOOTH SCROLL FOR LINKS
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

/* =========================
   HERO FADE-IN
========================= */

window.addEventListener("load", () => {

    const heroContent =
        document.querySelector(".hero-content");

    const heroStats =
        document.querySelector(".hero-stats");

    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(40px)";

        setTimeout(() => {
            heroContent.style.transition =
                "all 1s ease";

            heroContent.style.opacity = "1";
            heroContent.style.transform =
                "translateY(0)";
        }, 150);
    }

    if (heroStats) {
        heroStats.style.opacity = "0";
        heroStats.style.transform =
            "translateY(40px)";

        setTimeout(() => {
            heroStats.style.transition =
                "all 1s ease";

            heroStats.style.opacity = "1";
            heroStats.style.transform =
                "translateY(0)";
        }, 450);
    }
});

/* =========================
   PARALLAX GLOW EFFECT
========================= */

const glow1 = document.querySelector(".glow-1");
const glow2 = document.querySelector(".glow-2");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    if (glow1) {
        glow1.style.transform =
            `translate(${x * 40}px, ${y * 40}px)`;
    }

    if (glow2) {
        glow2.style.transform =
            `translate(${-x * 40}px, ${-y * 40}px)`;
    }
});

/* =========================
   SERVICE CARD HOVER TILT
========================= */

const cards = document.querySelectorAll(
    ".service-card, .portfolio-card, .benefit-card, .testimonial-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 20;

        const rotateY =
            (centerX - x) / 20;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";
    });
});

/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }
    });
});

/* =========================
   FLOATING PARTICLES
========================= */

function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * window.innerWidth + "px";

    particle.style.animationDuration =
        Math.random() * 10 + 8 + "s";

    particle.style.opacity =
        Math.random();

    particle.style.width =
        particle.style.height =
        Math.random() * 4 + 2 + "px";

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 18000);
}

setInterval(createParticle, 350);