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
const text = "AI Application Developer & Full Stack Developer";
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

// ================= LINKEDIN POSTS PREVIEW =================

const linkedinPosts = [
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7436818114949885953/",
    title: "An inspiring experience at the Google Office Tour!",
    age: "2d",
    subtitle: "Graduate Assistant @ Elmhurst University",
    preview: "On March 6th, I had the opportunity to explore, learn, and connect with incredible professionals.",
    thumbnail: "images/7.jpeg",
    reactions: "33",
    comments: "2 comments",
    reposts: "1 repost"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7436143603338498048/",
    title: "Great conversations. Inspiring professionals. Exciting opportunities.",
    age: "4d",
    subtitle: "Graduate Assistant @ Elmhurst University",
    preview: "Career fair highlights and networking moments that can lead to meaningful opportunities in tech.",
    thumbnail: "images/1.jpeg",
    reactions: "16",
    comments: "0 comments",
    reposts: "0 reposts"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7428982038562725888/",
    title: "I made this page for a friend just ...more",
    age: "Recent",
    subtitle: "Graduate Assistant @ Elmhurst University",
    preview: "A small webcoding build with interactive UI and playful animations.",
    thumbnail: "images/3.png",
    reactions: "0",
    comments: "0 comments",
    reposts: "0 reposts"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7343363461403348994/",
    title: "Data Analysis with Python Certification",
    age: "8mo",
    subtitle: "Graduate Assistant @ Elmhurst University",
    preview: "I am happy to share that I obtained a new certification in Data Analysis with Python from IBM.",
    thumbnail: "certifications/ibm.jpg",
    reactions: "0",
    comments: "0 comments",
    reposts: "0 reposts"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7278704313391079424/",
    title: "Java Certification Achievement",
    age: "1yr",
    subtitle: "Graduate Assistant @ Elmhurst University",
    preview: "Thrilled to have earned the Java certification and continue strengthening core programming foundations.",
    thumbnail: "certifications/java.jpg",
    reactions: "0",
    comments: "0 comments",
    reposts: "0 reposts"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7268070482850033665/",
    title: "Published Research Paper",
    age: "1yr",
    subtitle: "Graduate Assistant @ Elmhurst University",
    preview: "Proud to share a published research contribution and the learning journey behind this milestone.",
    thumbnail: "certifications/ijrpr.jpg",
    reactions: "0",
    comments: "0 comments",
    reposts: "0 reposts"
  }
];

function getLinkedInPostId(postUrl) {
  if (!postUrl || typeof postUrl !== "string") {
    return null;
  }

  const urnMatch = postUrl.match(/urn:li:(activity|share):(\d+)/i);
  if (urnMatch && urnMatch[2]) {
    return urnMatch[2];
  }

  const activityMatch = postUrl.match(/activity-(\d+)/i);
  if (activityMatch && activityMatch[1]) {
    return activityMatch[1];
  }

  return null;
}

function renderLinkedInPosts() {
  const container = document.getElementById("linkedin-posts-grid");
  if (!container) {
    return;
  }

  if (linkedinPosts.length === 0) {
    container.innerHTML = `
      <article class="linkedin-post-card">
        <i class="fab fa-linkedin"></i>
        <h3 class="linkedin-post-title">No LinkedIn post URLs added yet</h3>
        <p class="linkedin-post-meta">Add your post links and title/preview text in the linkedinPosts array inside script.js.</p>
        <a class="linkedin-post-link" href="https://www.linkedin.com/in/shahista-tamkeen/" target="_blank" rel="noopener noreferrer">Visit My LinkedIn Profile</a>
      </article>
    `;
    return;
  }

  container.innerHTML = "";

  linkedinPosts.forEach((post, index) => {

    container.insertAdjacentHTML(
      "beforeend",
      `
        <a class="linkedin-post-card" href="${post.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${post.title || `LinkedIn post ${index + 1}`} on LinkedIn">
          <div class="linkedin-post-head">
            <img class="linkedin-avatar" src="images/profile1.jpeg" alt="Shahista Tamkeen">
            <div class="linkedin-head-text">
              <h3 class="linkedin-author">Shahista Tamkeen <span class="linkedin-dot">•</span> You</h3>
              <p class="linkedin-role">${post.subtitle || "Graduate Assistant @ Elmhurst University"}</p>
              <p class="linkedin-time">${post.age || "Recently"} <i class="fas fa-globe-americas"></i></p>
            </div>
            <i class="fas fa-ellipsis-h linkedin-more"></i>
          </div>

          <p class="linkedin-copy">${post.title || `LinkedIn Post ${index + 1}`}</p>
          ${post.preview ? `<p class="linkedin-copy linkedin-copy-secondary">${post.preview}</p>` : ""}

          <div class="linkedin-post-shot-wrap">
            <img class="linkedin-post-shot" src="${post.thumbnail || "images/1.jpeg"}" alt="${post.title || "LinkedIn Post"} preview">
          </div>

          <div class="linkedin-stats">
            <span>🟦🟢 ${post.reactions || "0"}</span>
            <span>${post.comments || "0 comments"} · ${post.reposts || "0 reposts"}</span>
          </div>

          <div class="linkedin-actions">
            <span><i class="far fa-thumbs-up"></i></span>
            <span><i class="far fa-comment-dots"></i></span>
            <span><i class="fas fa-retweet"></i></span>
            <span><i class="far fa-paper-plane"></i></span>
          </div>

          <div class="linkedin-open-hint">Open on LinkedIn</div>
        </a>
      `
    );
  });
}

function initLinkedInSlider() {
  const slider = document.getElementById("linkedin-posts-grid");
  const prevBtn = document.getElementById("linkedin-prev");
  const nextBtn = document.getElementById("linkedin-next");

  if (!slider || !prevBtn || !nextBtn) {
    return;
  }

  const scrollStep = () => {
    const firstCard = slider.querySelector(".linkedin-post-card");
    if (!firstCard) {
      return 390;
    }
    const cardWidth = firstCard.getBoundingClientRect().width;
    return cardWidth + 14;
  };

  const updateButtons = () => {
    const maxScroll = slider.scrollWidth - slider.clientWidth - 2;
    prevBtn.disabled = slider.scrollLeft <= 2;
    nextBtn.disabled = slider.scrollLeft >= maxScroll;
  };

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollStep(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollStep(), behavior: "smooth" });
  });

  slider.addEventListener("scroll", updateButtons);
  window.addEventListener("resize", updateButtons);
  updateButtons();
}

document.addEventListener("DOMContentLoaded", renderLinkedInPosts);
document.addEventListener("DOMContentLoaded", initLinkedInSlider);
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

document.addEventListener("DOMContentLoaded", function () {
  const videoModal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");
  const closeVideoBtn = document.querySelector(".close-video-modal");

  document.querySelectorAll(".open-video-modal").forEach(button => {
    button.addEventListener("click", function () {
      const videoSrc = this.dataset.video;
      if (!videoSrc || !videoPlayer || !videoModal) return;

      videoPlayer.pause();
      videoPlayer.currentTime = 0;
      videoPlayer.src = videoSrc;
      videoPlayer.load();

      videoModal.classList.add("show");
      document.body.classList.add("modal-active");
    });
  });

  function closeVideoModal() {
    videoModal.classList.remove("show");
    document.body.classList.remove("modal-active");
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
  }

  if (closeVideoBtn) {
    closeVideoBtn.addEventListener("click", closeVideoModal);
  }

  window.addEventListener("click", function (e) {
    if (e.target === videoModal) {
      closeVideoModal();
    }
  });
});