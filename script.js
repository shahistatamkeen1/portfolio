console.log("JS loaded");

// Always start at top when page loads
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
  history.replaceState(null, null, ' ');
});
// Scroll Reveal Animation
const faders = document.querySelectorAll(".fade-up");

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / 100;

    if(count < target){
      counter.innerText = (count + inc).toFixed(1);
      setTimeout(update,20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// Typewriter Effect
const text = "IT & Data Analytics Graduate Student";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
    }
}

typeEffect();
// Subtle Fade-In on Scroll
const fadeElements = document.querySelectorAll(".fade-element");

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

fadeElements.forEach(el => {
    fadeObserver.observe(el);
});

const aboutCards = document.querySelectorAll(".text-card, .metrics-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

aboutCards.forEach(card => {
    observer.observe(card);
});

const bg = document.querySelector(".background-particles");

if (bg) {   // ✅ prevents crash if container doesn't exist
  for (let i = 0; i < 25; i++) {
    const particle = document.createElement("div");
    particle.classList.add("bg-particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDuration = (8 + Math.random() * 10) + "s";

    bg.appendChild(particle);
  }
}

// ================= PDF MODAL FUNCTIONALITY =================

document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("pdfModal");
  const pdfViewer = document.getElementById("pdfViewer");
  const closeBtn = document.querySelector(".close-modal");

  document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", function () {
      const file = this.dataset.file;
      console.log("Opening:", file);

       if (window.innerWidth <= 768) {
        window.open(file, "_blank");
        return;
      }

      if (modal && pdfViewer) {
       pdfViewer.src = file + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH";

        // ✅ SHOW MODAL
        modal.classList.add("show");
        document.body.classList.add("modal-active");
      }
    });
  });

  if (closeBtn && modal && pdfViewer) {
    closeBtn.addEventListener("click", function () {

      // ✅ HIDE MODAL
      modal.classList.remove("show");
      document.body.classList.remove("modal-active");

      pdfViewer.src = "";
    });
  }

  window.addEventListener("click", function (e) {
    if (modal && e.target === modal) {

      modal.classList.remove("show");
      document.body.classList.remove("modal-active");

      pdfViewer.src = "";
    }
  });

});
// CERTIFICATE FILTER (SAFE VERSION)

document.addEventListener("DOMContentLoaded", function () {

  const filterButtons = document.querySelectorAll(".filter-btn");
  const certCards = document.querySelectorAll(".cert-card");

  if (filterButtons.length > 0 && certCards.length > 0) {

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        certCards.forEach(card => {

          if (filter === "all" || card.dataset.category === filter) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }

        });

      });
    });

  }

});

// Show profile icon after leaving home section

document.addEventListener("DOMContentLoaded", function () {

  const navProfile = document.querySelector(".nav-profile");
  const homeSection = document.getElementById("hero");

  if (navProfile && homeSection) {
    window.addEventListener("scroll", () => {
      const homeBottom = homeSection.offsetHeight;

      if (window.scrollY > homeBottom - 100) {
        navProfile.classList.add("show");
      } else {
        navProfile.classList.remove("show");
      }
    });
  }

});

// ================= MOBILE MENU =================

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".navbar ul");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".navbar ul li a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

window.addEventListener("scroll", function(){

  const logoText = document.querySelector(".logo-text");

  if(window.scrollY > 50){
      logoText.classList.add("hide-logo");
  } else {
      logoText.classList.remove("hide-logo");
  }

});

// CERTIFICATE POPUP (FINAL CLEAN VERSION)
document.addEventListener("DOMContentLoaded", function () {

  const popup = document.getElementById("certPopup");
  const popupImg = document.getElementById("popupImg");
  const closeBtn = document.querySelector(".cert-close");

  document.querySelectorAll(".cert-card img").forEach(img => {
    img.addEventListener("click", function (e) {
      e.stopPropagation(); // prevents conflicts
      popup.style.display = "flex";
      popupImg.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

});

// ================= EMAILJS CONTACT FORM =================

document.addEventListener("DOMContentLoaded", function () {

  if (typeof emailjs !== "undefined") {
    emailjs.init("3VUrI-ZOiQMtlfBpi");
  }

  const form = document.getElementById("contact-form");
  const popup = document.getElementById("success-popup");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_cqe16o7", "template_2rytli9", this)
        .then(function () {

          if (popup) popup.classList.add("show");
          form.reset();

          setTimeout(() => {
            if (popup) popup.classList.remove("show");
          }, 3000);

        })
        .catch(function (error) {
          console.log("EmailJS Error:", error);
        });

    });
  }


});










