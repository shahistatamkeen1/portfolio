const linkedinPosts = [
  {
    url: "https://www.linkedin.com/in/shahista-tamkeen/recent-activity/all/",
    title: "A little girl with big dreams completed her Master’s degree",
    date: "May 2026",
    category: "Milestone · Women in Tech",
    preview: "I shared the journey from India to earning my Master’s in Computer Science & Information Technology—and becoming the first girl child in my bloodline to reach this milestone.",
    thumbnail: "images/graduation.jpeg",
    theme: "graduation",
    featured: true
  },
  {
    url: "https://www.linkedin.com/in/shahista-tamkeen/recent-activity/all/",
    title: "Built an AI-powered 3D Point Cloud QA System",
    date: "Spring 2026",
    category: "Computer Vision · Construction AI",
    preview: "An interactive platform using React, Three.js, FastAPI, Open3D, and Python for ICP alignment, deviation heatmaps, measurements, quality scoring, and automated reports.",
    thumbnail: "images/pointcloud.png",
    theme: "vision"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7450734175370010624/",
    title: "Automated construction RFIs with Microsoft Power Platform",
    date: "Spring 2026",
    category: "Power Platform · Workflow Automation",
    preview: "A complete RFI workflow with digital submissions, approvals, comments, real-time status tracking, advanced filters, Dataverse, and an auditable history dashboard.",
    thumbnail: "images/RFI.png",
    theme: "automation"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7448539918576029696/",
    title: "Deployed a Patient Readmission Risk Analysis Dashboard",
    date: "Spring 2026",
    category: "Machine Learning · Healthcare AI",
    preview: "An end-to-end ML workflow covering data cleaning, feature engineering, Logistic Regression, evaluation metrics, risk prediction, and a deployed Streamlit analytics experience.",
    thumbnail: "images/patient.png",
    theme: "healthcare"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7449887531082592258/",
    title: "Learning, networking, and career insights at LinkedIn Chicago",
    date: "Spring 2026",
    category: "Professional Growth · ALPFA",
    preview: "A memorable office visit with lessons on continuous learning, authentic networking, hiring, and career growth from LinkedIn professionals and the ALPFA community.",
    thumbnail: "images/linkedin-office.jpg",
    theme: "linkedin"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7436818114949885953/",
    title: "Inside Google Chicago: culture, collaboration, and career journeys",
    date: "March 2026",
    category: "Industry Learning · Google",
    preview: "I reflected on Google’s collaborative environment and the career advice shared by professionals during an Elmhurst University Business Club office tour.",
    thumbnail: "images/7.jpeg",
    theme: "google"
  },
  {
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7436143603338498048/",
    title: "Turning career-fair conversations into meaningful opportunities",
    date: "March 2026",
    category: "Networking · Career Growth",
    preview: "Conversations with recruiters across finance, technology, logistics, and professional services reinforced the value of sharing real projects and research work.",
    thumbnail: "images/1.jpeg",
    theme: "career"
  }
];

const skillCapabilities = {
  ai: {
    number: "01 / 06",
    kicker: "Predictive intelligence",
    icon: "fa-brain",
    title: "AI & Machine Learning",
    description: "Building explainable predictive systems across healthcare, financial risk, computer vision, and deep learning.",
    skills: ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "TensorFlow", "PyTorch", "PyTorch Geometric", "GNNs", "CNNs", "RNNs", "LSTMs", "Transformers", "SHAP", "LIME"],
    projects: [
      { label: "Patient Readmission", url: "https://github.com/shahistatamkeen1/patient-readmission-dashboard" },
      { label: "Banking Risk", url: "https://github.com/shahistatamkeen1/Banking-Customer-Risk-Loan-Analysis" },
      { label: "Brain Age Research", url: "https://github.com/shahistatamkeen1/AI_for_Brain_Age" }
    ],
    signal: "Model development, evaluation, and explainability"
  },
  genai: {
    number: "02 / 06",
    kicker: "Agentic intelligence",
    icon: "fa-wand-magic-sparkles",
    title: "Generative AI & LLMs",
    description: "Designing production-focused RAG, agentic AI, semantic search, function-calling, and persistent-memory systems.",
    skills: ["RAG", "LangChain", "LangGraph", "Azure OpenAI", "OpenAI API", "AI Agents", "Prompt Engineering", "Function Calling", "Semantic Search", "Pinecone", "Llama", "Mistral"],
    projects: [
      { label: "Digital Twin AI", url: "https://github.com/shahistatamkeen1/my_digital_twin" },
      { label: "Cloud Monitoring AI", url: "https://github.com/shahistatamkeen1/AI_powered_cloud_monitoring_and_security_platform" }
    ],
    signal: "From architecture to deployed workflows"
  },
  backend: {
    number: "03 / 06",
    kicker: "Reliable application core",
    icon: "fa-code",
    title: "Backend Engineering",
    description: "Engineering secure APIs, services, integrations, and event-driven systems that support AI-powered products.",
    skills: ["Python", "Java", "SQL", "Bash", "FastAPI", "Flask", "REST APIs", "Microservices", "Apache Kafka", "Data Structures", "Algorithms", "Unit Testing", "Integration Testing"],
    projects: [
      { label: "Digital Twin APIs", url: "https://github.com/shahistatamkeen1/my_digital_twin" },
      { label: "Cloud Monitor", url: "https://github.com/shahistatamkeen1/AI_powered_cloud_monitoring_and_security_platform" },
      { label: "Job Tracker", url: "https://github.com/shahistatamkeen1/Job_Tracker" }
    ],
    signal: "Secure services, integrations, and testing"
  },
  cloud: {
    number: "04 / 06",
    kicker: "Operational intelligence",
    icon: "fa-cloud",
    title: "Cloud & MLOps",
    description: "Deploying and operating intelligent systems with reproducible pipelines, observability, containerization, and model serving.",
    skills: ["Microsoft Azure", "AWS", "MLflow", "Docker", "Kubernetes", "GitHub Actions", "CI/CD Pipelines", "Model Monitoring", "FastAPI Serving"],
    projects: [
      { label: "AI Cloud Monitoring", url: "https://github.com/shahistatamkeen1/AI_powered_cloud_monitoring_and_security_platform" },
      { label: "3D QA Deployment", url: "https://3-d-point-cloud-qa-system.vercel.app/" }
    ],
    signal: "Automated delivery and observable AI systems"
  },
  data: {
    number: "05 / 06",
    kicker: "Decision-ready data",
    icon: "fa-database",
    title: "Data Engineering",
    description: "Transforming high-volume operational data into reliable pipelines, analytical models, dashboards, and actionable insights.",
    skills: ["Apache Spark", "Structured Streaming", "ETL Pipelines", "Snowflake", "SQL Server", "PostgreSQL", "Redis", "Pandas", "NumPy", "Power BI", "Tableau"],
    projects: [
      { label: "Banking Analytics", url: "https://banking-customer-risk-loan-analysis-dashboard.streamlit.app/" },
      { label: "Patient Dashboard", url: "https://patient-readmission-dashboard.streamlit.app/" }
    ],
    signal: "Pipelines, analytics, and decision support"
  },
  product: {
    number: "06 / 06",
    kicker: "Human-centered delivery",
    icon: "fa-laptop-code",
    title: "Product Development",
    description: "Turning complex AI capabilities into responsive, accessible, and recruiter-ready product experiences.",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Streamlit", "Responsive Design", "Git", "GitHub", "Jupyter", "Postman", "Agile"],
    projects: [
      { label: "Job Tracker", url: "https://github.com/shahistatamkeen1/Job_Tracker" },
      { label: "3D QA Interface", url: "https://3-d-point-cloud-qa-system.vercel.app/" },
      { label: "Portfolio", url: "https://shahistatamkeen1.github.io/portfolio/" }
    ],
    signal: "Responsive interfaces built around real workflows"
  }
};

const projectCaseStudies = {
  "digital-twin": {
    problem: "Career, finance, and health decisions are usually handled by disconnected tools with no shared memory or coordinated reasoning.",
    contribution: "Designed a multi-agent architecture with LangGraph orchestration, persistent memory, RAG, FastAPI services, and approval-aware workflows.",
    outcome: "An evolving production platform that coordinates specialized AI twins while preserving context across user goals and decisions.",
    pipeline: ["User context", "Vector memory", "Twin agents", "LangGraph", "Product UI"],
    accent: "#a98cff",
    accentRgb: "169, 140, 255"
  },
  "cloud-monitor": {
    problem: "Infrastructure teams need faster visibility into anomalies and clearer remediation guidance than raw monitoring dashboards provide.",
    contribution: "Built the monitoring interface and integrated real-time metrics, intelligent alerts, secure APIs, Azure infrastructure, and OpenAI-generated recommendations.",
    outcome: "A deployed cloud operations platform that turns system signals into actionable security and reliability insights.",
    pipeline: ["Cloud metrics", "Anomaly engine", "AI analysis", "Secure API", "Live dashboard"],
    accent: "#63b7ff",
    accentRgb: "99, 183, 255"
  },
  "point-cloud": {
    problem: "Construction point-cloud inspection is difficult to validate manually and often lacks accessible deviation and measurement tooling.",
    contribution: "Connected Open3D processing with FastAPI and an interactive Three.js viewer for registration, heatmaps, measurements, comparison, and export.",
    outcome: "A working 3D quality-assessment application with live inspection, alignment metrics, AI classification, and reporting tools.",
    pipeline: ["PLY upload", "Open3D", "QA analysis", "FastAPI", "3D viewer"],
    accent: "#f2a65a",
    accentRgb: "242, 166, 90"
  },
  "job-tracker": {
    problem: "Candidates lose time maintaining scattered application records and manually interpreting recruitment emails and status changes.",
    contribution: "Created an application workspace with email synchronization, AI parsing, deduplication, stage tracking, analytics, and career-support workflows.",
    outcome: "A centralized productivity system that makes application progress, follow-ups, and career insights easier to manage.",
    pipeline: ["Email sync", "AI parser", "Application data", "ATS workflow", "Career insights"],
    accent: "#53d6b5",
    accentRgb: "83, 214, 181"
  },
  rfi: {
    problem: "Construction RFIs frequently depend on manual communication, creating approval delays and limited status visibility.",
    contribution: "Developed the Power Apps experience, Dataverse model, Power Automate approval routing, comments, filters, and complete history tracking.",
    outcome: "A completed traceable workflow that centralizes submissions, approvals, ownership, and real-time RFI status.",
    pipeline: ["RFI submission", "Dataverse", "Approval flow", "Notifications", "History dashboard"],
    accent: "#f5c76c",
    accentRgb: "245, 199, 108"
  },
  readmission: {
    problem: "Healthcare teams need an understandable way to explore readmission patterns and identify high-risk patients from model results.",
    contribution: "Prepared the data, trained and evaluated predictive models, and created an interactive dashboard for performance and risk exploration.",
    outcome: "A deployed decision-support experience connecting model performance with patient-level readmission insights.",
    pipeline: ["Patient data", "Feature pipeline", "Risk model", "Evaluation", "Dashboard"],
    accent: "#ff8da9",
    accentRgb: "255, 141, 169"
  },
  portfolio: {
    problem: "A broad AI engineering profile can feel fragmented when projects, research, cloud work, and product skills are presented separately.",
    contribution: "Designed and developed a responsive portfolio system with accessible interactions, structured case studies, and recruiter-focused content hierarchy.",
    outcome: "A cohesive professional narrative that makes technical depth, production experience, and project evidence easier to evaluate.",
    pipeline: ["Content strategy", "UI system", "Responsive build", "Accessibility", "GitHub Pages"],
    accent: "#53d6b5",
    accentRgb: "83, 214, 181"
  },
  ecommerce: {
    problem: "A handcrafted clothing brand needed a digital storefront capable of supporting collections, customization, authentication, and order handling.",
    contribution: "Developed the responsive shopping experience, backend services, data model, REST integrations, authentication, and order workflow.",
    outcome: "A full-stack commerce foundation designed around made-to-order products and a brand-specific customer journey.",
    pipeline: ["Product catalog", "Customization", "REST API", "PostgreSQL", "Order flow"],
    accent: "#ff8da9",
    accentRgb: "255, 141, 169"
  },
  "banking-risk": {
    problem: "Lending teams need interpretable credit-risk and loan insights rather than isolated prediction outputs.",
    contribution: "Built preprocessing, supervised learning, segmentation, evaluation, and interactive analytics workflows using financial customer data.",
    outcome: "A deployed risk-analysis dashboard supporting loan prediction, customer segmentation, and explainable lending insights.",
    pipeline: ["Financial data", "Feature engineering", "Risk models", "Explainability", "Analytics UI"],
    accent: "#f5c76c",
    accentRgb: "245, 199, 108"
  },
  "brain-age": {
    problem: "Biological brain-age estimation from MRI requires a reproducible image-processing and deep-learning research workflow.",
    contribution: "Implemented preprocessing, augmentation, CNN feature learning, training, evaluation, and research documentation.",
    outcome: "A published research contribution with reproducible experiments, presentation material, and an accessible technical report.",
    pipeline: ["MRI images", "Preprocessing", "CNN model", "Evaluation", "Research paper"],
    accent: "#a98cff",
    accentRgb: "169, 140, 255"
  },
  nlp: {
    problem: "Text classification requires a reliable pipeline that compares representations, models, and tuning strategies rather than relying on one experiment.",
    contribution: "Created vectorization, model comparison, cross-validation, hyperparameter tuning, and evaluation workflows for sentiment classification.",
    outcome: "A documented NLP system demonstrating the complete path from raw text to validated classification results.",
    pipeline: ["Raw text", "Vectorization", "Model tuning", "Validation", "Classification"],
    accent: "#63b7ff",
    accentRgb: "99, 183, 255"
  },
  pneumonia: {
    problem: "Chest X-ray classification requires careful preprocessing and transparent evaluation to avoid misleading medical-imaging results.",
    contribution: "Built an image pipeline with augmentation, CNN modeling, confusion-matrix analysis, ROC evaluation, and documented experiments.",
    outcome: "A complete medical computer-vision study with reproducible training, evaluation evidence, and presentation assets.",
    pipeline: ["X-ray images", "Augmentation", "CNN training", "ROC analysis", "Classification"],
    accent: "#ff8da9",
    accentRgb: "255, 141, 169"
  }
};

function smoothScrollTo(targetY, reducedMotion, onComplete) {
  const startY = window.scrollY;
  const distance = targetY - startY;

  if (reducedMotion || Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    onComplete?.();
    return;
  }

  const duration = Math.min(980, Math.max(560, Math.abs(distance) * 0.42));
  const startTime = performance.now();
  const easeInOutCubic = (progress) => progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) requestAnimationFrame(step);
    else onComplete?.();
  };

  requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navAnchors = navLinks ? [...navLinks.querySelectorAll("a")] : [];
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 20);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    navLinks?.classList.remove("open");
    menuToggle?.classList.remove("active");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
  };

  menuToggle?.addEventListener("click", () => {
    const open = !navLinks?.classList.contains("open");
    navLinks?.classList.toggle("open", open);
    menuToggle.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });

  navAnchors.forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) closeMenu();
  });

  const allSections = [...document.querySelectorAll("main section")];
  const observedSections = allSections.filter((section) => section.id);

  allSections.forEach((section) => {
    section.classList.add("section-transition");
    [...section.querySelectorAll(".reveal")]
      .forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index * 85, 340)}ms`);
      });
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;

    link.addEventListener("click", (event) => {
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();

      const headerOffset = (header?.offsetHeight || 78) + 14;
      const destination = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);

      smoothScrollTo(destination, motionQuery.matches, () => {
        history.pushState(null, "", hash);
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
      });
    });
  });

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("section-in-view", entry.isIntersecting);
      if (entry.isIntersecting && entry.target.id) {
        navAnchors.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      }
    });
  }, { rootMargin: "-28% 0px -62%", threshold: 0.01 });
  allSections.forEach((section) => sectionObserver.observe(section));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -8%" });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const projectGrid = document.getElementById("projects-grid");
  const projectToggle = document.getElementById("toggle-projects");
  projectToggle?.addEventListener("click", () => {
    const showAll = !projectGrid?.classList.contains("show-all");
    projectGrid?.classList.toggle("show-all", showAll);
    projectToggle.setAttribute("aria-expanded", String(showAll));
    projectToggle.innerHTML = showAll
      ? 'Show fewer projects <i class="fas fa-minus"></i>'
      : 'View all projects <i class="fas fa-plus"></i>';
    if (!showAll) document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  });

  setupProjectShowcase(projectGrid, projectToggle);

  setupPremiumHero();
  setupAboutImpact();
  setupSkillsExplorer();
  setupCertificateFilters();
  renderLinkedInPosts();
  setupLinkedInSlider();
  setupModals();
  setupContactForm();

  const year = document.getElementById("current-year");
  if (year) year.textContent = String(new Date().getFullYear());
});

function setupProjectShowcase(projectGrid, projectToggle) {
  if (!projectGrid) return;

  const cards = [...projectGrid.querySelectorAll(".project-card")];
  const filters = [...document.querySelectorAll(".project-filter")];
  const resultCount = document.getElementById("project-result-count");
  const modal = document.getElementById("project-case-study-modal");
  const panel = document.getElementById("project-case-study");
  const panelTitle = document.getElementById("case-study-title");
  const panelProblem = document.getElementById("case-study-problem");
  const panelContribution = document.getElementById("case-study-contribution");
  const panelOutcome = document.getElementById("case-study-outcome");
  const panelPipeline = document.getElementById("case-study-pipeline");
  const panelClose = document.getElementById("case-study-close");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeFilter = "all";
  let activeProject = null;
  let closeTimer = null;
  let lastCaseStudyTrigger = null;

  const updateCount = () => {
    const visibleCards = cards.filter((card) => {
      if (card.hidden) return false;
      if (activeFilter !== "all") return true;
      return projectGrid.classList.contains("show-all") || !card.classList.contains("project-extra");
    });

    if (resultCount) {
      const label = activeFilter === "all" && !projectGrid.classList.contains("show-all") ? "featured projects" : "projects";
      resultCount.textContent = `Showing ${visibleCards.length} ${label}`;
    }
  };

  const closeCaseStudy = (immediate = false, returnFocus = true) => {
    if (!modal || modal.hidden) return;
    if (closeTimer) window.clearTimeout(closeTimer);
    modal.classList.remove("is-open");
    document.body.classList.remove("case-study-modal-open");
    cards.forEach((card) => card.classList.remove("case-study-active"));
    cards.forEach((card) => card.querySelector(".project-case-toggle")?.setAttribute("aria-expanded", "false"));
    activeProject = null;

    const finishClose = () => {
      modal.hidden = true;
      if (returnFocus && lastCaseStudyTrigger?.isConnected && !lastCaseStudyTrigger.closest("[hidden]")) {
        lastCaseStudyTrigger.focus({ preventScroll: true });
      }
      lastCaseStudyTrigger = null;
    };

    if (immediate || reducedMotion) finishClose();
    else closeTimer = window.setTimeout(finishClose, 300);
  };

  const openCaseStudy = (card, trigger) => {
    if (!modal || !panel || !panelTitle || !panelProblem || !panelContribution || !panelOutcome || !panelPipeline) return;
    const projectId = card.dataset.project;
    const study = projectCaseStudies[projectId];
    if (!study) return;

    if (activeProject === projectId && !modal.hidden) {
      closeCaseStudy();
      return;
    }

    if (closeTimer) window.clearTimeout(closeTimer);
    activeProject = projectId;
    lastCaseStudyTrigger = trigger || null;
    panel.style.setProperty("--case-accent", study.accent);
    panel.style.setProperty("--case-accent-rgb", study.accentRgb);
    panelTitle.textContent = card.querySelector("h3")?.textContent || "Project case study";
    panelProblem.textContent = study.problem;
    panelContribution.textContent = study.contribution;
    panelOutcome.textContent = study.outcome;
    panelPipeline.replaceChildren(...study.pipeline.map((step) => {
      const item = document.createElement("span");
      item.className = "pipeline-step";
      item.textContent = step;
      return item;
    }));

    cards.forEach((item) => {
      const isActive = item === card;
      item.classList.toggle("case-study-active", isActive);
      item.querySelector(".project-case-toggle")?.setAttribute("aria-expanded", String(isActive));
    });

    modal.hidden = false;
    document.body.classList.add("case-study-modal-open");
    requestAnimationFrame(() => modal.classList.add("is-open"));
    window.setTimeout(() => panel.focus({ preventScroll: true }), reducedMotion ? 0 : 120);
  };

  cards.forEach((card) => {
    const media = card.querySelector(".project-media");
    const links = card.querySelector(".project-links");
    const study = projectCaseStudies[card.dataset.project];

    if (media && !media.querySelector(".project-media-meta")) {
      const metadata = document.createElement("div");
      metadata.className = "project-media-meta";
      metadata.innerHTML = `<span>${card.dataset.index || ""}</span><span>${card.dataset.domain || "Engineering"}</span>`;
      media.append(metadata);
    }

    if (media && study && !media.querySelector(".project-flow-preview")) {
      const flow = document.createElement("div");
      flow.className = "project-flow-preview";
      study.pipeline.slice(0, 4).forEach((step) => {
        const item = document.createElement("span");
        item.textContent = step;
        flow.append(item);
      });
      media.append(flow);
    }

    if (links && !links.querySelector(".project-case-toggle")) {
      const button = document.createElement("button");
      button.className = "project-case-toggle";
      button.type = "button";
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", "project-case-study-modal");
      button.innerHTML = '<i class="fas fa-layer-group"></i> Case study';
      button.addEventListener("click", () => openCaseStudy(card, button));
      links.append(button);
    }

    if (!reducedMotion) {
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
        card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
      });
      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--spotlight-x", "50%");
        card.style.setProperty("--spotlight-y", "40%");
      });
    }
  });

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      activeFilter = filter.dataset.filter || "all";
      filters.forEach((item) => {
        const active = item === filter;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      closeCaseStudy(true, false);
      const filtering = activeFilter !== "all";
      projectGrid.classList.toggle("filtering", filtering);
      if (projectToggle) projectToggle.hidden = filtering;

      cards.forEach((card) => {
        const categories = (card.dataset.category || "").split(/\s+/);
        const matches = !filtering || categories.includes(activeFilter);
        card.hidden = !matches;
        if (matches && filtering && !reducedMotion) {
          card.animate(
            [
              { opacity: 0, transform: "translateY(14px) scale(0.985)" },
              { opacity: 1, transform: "translateY(0) scale(1)" }
            ],
            { duration: 420, easing: "cubic-bezier(0.2, 0.75, 0.25, 1)" }
          );
        }
      });

      updateCount();
    });
  });

  panelClose?.addEventListener("click", () => closeCaseStudy());
  modal?.querySelector("[data-case-study-dismiss]")?.addEventListener("click", () => closeCaseStudy());
  document.addEventListener("keydown", (event) => {
    if (!modal || modal.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeCaseStudy();
      return;
    }

    if (event.key === "Tab") {
      const focusable = [...panel.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) {
        event.preventDefault();
        panel.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === panel)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (!panel.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  projectToggle?.addEventListener("click", () => requestAnimationFrame(() => {
    const activeCard = activeProject ? projectGrid.querySelector(`[data-project="${activeProject}"]`) : null;
    if (!projectGrid.classList.contains("show-all") && activeCard?.classList.contains("project-extra")) closeCaseStudy(true, false);
    updateCount();
  }));
  updateCount();
}

function setupPremiumHero() {
  const hero = document.getElementById("home");
  const visual = document.getElementById("hero-visual");
  const specialty = document.getElementById("hero-rotating-specialty");
  const roleLine = specialty?.closest(".hero-role-line");
  if (!hero || !visual || !specialty || !roleLine) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const specialties = [
    "Agentic AI & RAG systems",
    "Production machine learning",
    "Cloud-native AI platforms",
    "Intelligent product experiences"
  ];

  if (!reducedMotion) {
    let specialtyIndex = 0;
    window.setInterval(() => {
      roleLine.classList.add("is-changing");
      window.setTimeout(() => {
        specialtyIndex = (specialtyIndex + 1) % specialties.length;
        specialty.textContent = specialties[specialtyIndex];
      }, 140);
      window.setTimeout(() => roleLine.classList.remove("is-changing"), 310);
    }, 2800);

    hero.addEventListener("pointermove", (event) => {
      const heroBounds = hero.getBoundingClientRect();
      hero.style.setProperty("--hero-x", `${event.clientX - heroBounds.left}px`);
      hero.style.setProperty("--hero-y", `${event.clientY - heroBounds.top}px`);

      const visualBounds = visual.getBoundingClientRect();
      const x = (event.clientX - visualBounds.left) / visualBounds.width - 0.5;
      const y = (event.clientY - visualBounds.top) / visualBounds.height - 0.5;
      visual.style.setProperty("--visual-rx", `${(-y * 5).toFixed(2)}deg`);
      visual.style.setProperty("--visual-ry", `${(x * 6).toFixed(2)}deg`);
    });

    hero.addEventListener("pointerleave", () => {
      visual.style.setProperty("--visual-rx", "0deg");
      visual.style.setProperty("--visual-ry", "0deg");
    });
  }
}

function setupAboutImpact() {
  const section = document.querySelector(".about-impact");
  const counters = section ? [...section.querySelectorAll("[data-count]")] : [];
  if (!section || !counters.length) return;

  const showFinalValues = () => {
    counters.forEach((counter) => {
      counter.textContent = `${counter.dataset.count || "0"}${counter.dataset.suffix || ""}`;
    });
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    showFinalValues();
    return;
  }

  counters.forEach((counter) => {
    counter.textContent = `0${counter.dataset.suffix || ""}`;
  });

  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();

    const start = performance.now();
    const duration = 950;
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      counters.forEach((counter) => {
        const target = Number(counter.dataset.count || 0);
        const suffix = counter.dataset.suffix || "";
        counter.textContent = `${Math.round(target * eased)}${suffix}`;
      });

      if (progress < 1) requestAnimationFrame(animate);
      else showFinalValues();
    };

    requestAnimationFrame(animate);
  }, { threshold: 0.35 });

  observer.observe(section);
}

function setupSkillsExplorer() {
  const skillsMap = document.getElementById("skills-map");
  const buttons = [...document.querySelectorAll(".skill-node[data-skill]")];
  const number = document.getElementById("skill-detail-number");
  const kicker = document.getElementById("skill-detail-kicker");
  const title = document.getElementById("skill-detail-title");
  const description = document.getElementById("skill-detail-description");
  const chipList = document.getElementById("skill-chip-list");
  const proofList = document.getElementById("skill-proof-list");
  const signal = document.getElementById("skill-detail-signal");

  if (!skillsMap || !buttons.length || !number || !kicker || !title || !description || !chipList || !proofList || !signal) return;

  const renderSkill = (key) => {
    const capability = skillCapabilities[key];
    if (!capability) return;

    skillsMap.dataset.active = key;
    buttons.forEach((button) => {
      const active = button.dataset.skill === key;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    number.textContent = capability.number;
    kicker.innerHTML = `<i class="fas ${escapeHtml(capability.icon)}"></i> ${escapeHtml(capability.kicker)}`;
    title.textContent = capability.title;
    description.textContent = capability.description;
    signal.textContent = capability.signal;
    chipList.innerHTML = capability.skills.map((skill) => `<span>${escapeHtml(skill)}</span>`).join("");
    proofList.innerHTML = capability.projects.map((project) => `
      <a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">
        ${escapeHtml(project.label)} <i class="fas fa-arrow-up-right-from-square"></i>
      </a>
    `).join("");
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => renderSkill(button.dataset.skill));
  });

  skillsMap.addEventListener("pointermove", (event) => {
    const bounds = skillsMap.getBoundingClientRect();
    skillsMap.style.setProperty("--skill-x", `${event.clientX - bounds.left}px`);
    skillsMap.style.setProperty("--skill-y", `${event.clientY - bounds.top}px`);
  });

  renderSkill("genai");
}

function setupCertificateFilters() {
  const buttons = [...document.querySelectorAll(".filter-btn")];
  const cards = [...document.querySelectorAll(".cert-card")];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;

      cards.forEach((card) => {
        const hidden = filter !== "all" && card.dataset.category !== filter;
        card.classList.toggle("hidden", hidden);
      });
    });
  });
}

function renderLinkedInPosts() {
  const container = document.getElementById("linkedin-posts-grid");
  if (!container) return;

  container.innerHTML = linkedinPosts.map((post, index) => {
    const number = String(index + 1).padStart(2, "0");
    const visual = post.thumbnail
      ? `<img src="${escapeHtml(post.thumbnail)}" alt="Preview for ${escapeHtml(post.title)}" loading="lazy">`
      : `<div class="linkedin-card-abstract" aria-hidden="true">
          <span class="linkedin-orbit linkedin-orbit-one"></span>
          <span class="linkedin-orbit linkedin-orbit-two"></span>
          <i class="fas ${escapeHtml(post.icon || "fa-sparkles")}"></i>
          <strong>Dreams<br>to degree.</strong>
        </div>`;

    return `
      <article class="linkedin-card${post.featured ? " linkedin-card-featured" : ""}" data-theme="${escapeHtml(post.theme)}">
        <div class="linkedin-card-visual">
          ${visual}
          <span class="linkedin-card-number">${number}</span>
          <span class="linkedin-card-topic">${escapeHtml(post.category)}</span>
        </div>
        <div class="linkedin-card-body">
          <span class="linkedin-card-meta"><i class="fab fa-linkedin-in"></i> ${escapeHtml(post.date)}</span>
          <h3>${escapeHtml(post.title)}</h3>
          <p>${escapeHtml(post.preview)}</p>
          <a class="text-link" href="${escapeHtml(post.url)}" target="_blank" rel="noopener noreferrer" aria-label="Read ${escapeHtml(post.title)} on LinkedIn">
            Read on LinkedIn <i class="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </article>`;
  }).join("");
}

function setupLinkedInSlider() {
  const slider = document.getElementById("linkedin-posts-grid");
  const previous = document.getElementById("linkedin-prev");
  const next = document.getElementById("linkedin-next");
  if (!slider || !previous || !next) return;

  const scrollAmount = () => slider.querySelector(".linkedin-card")?.getBoundingClientRect().width + 16 || 360;
  const updateButtons = () => {
    previous.disabled = slider.scrollLeft <= 2;
    next.disabled = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 2;
  };

  previous.addEventListener("click", () => slider.scrollBy({ left: -scrollAmount(), behavior: "smooth" }));
  next.addEventListener("click", () => slider.scrollBy({ left: scrollAmount(), behavior: "smooth" }));
  slider.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  requestAnimationFrame(updateButtons);
}

function setupModals() {
  const pdfModal = document.getElementById("pdfModal");
  const pdfViewer = document.getElementById("pdfViewer");
  const certModal = document.getElementById("certModal");
  const certImage = document.getElementById("certModalImage");
  const videoModal = document.getElementById("videoModal");
  const videoPlayer = document.getElementById("videoPlayer");

  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close")?.focus();
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  document.querySelectorAll(".open-modal").forEach((button) => {
    button.addEventListener("click", () => {
      const file = button.dataset.file;
      if (!file) return;
      if (window.innerWidth <= 680) {
        window.open(file, "_blank", "noopener,noreferrer");
        return;
      }
      if (pdfViewer) pdfViewer.src = `${file}#toolbar=0&navpanes=0&view=FitH`;
      openModal(pdfModal);
    });
  });

  document.querySelectorAll(".cert-preview").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      if (!image || !certImage) return;
      certImage.src = image.src;
      certImage.alt = image.alt;
      openModal(certModal);
    });
  });

  document.querySelectorAll(".open-video-modal").forEach((button) => {
    button.addEventListener("click", () => {
      if (!videoPlayer || !button.dataset.video) return;
      videoPlayer.src = button.dataset.video;
      videoPlayer.load();
      openModal(videoModal);
      videoPlayer.play().catch(() => {});
    });
  });

  const closePdf = () => {
    closeModal(pdfModal);
    if (pdfViewer) pdfViewer.src = "";
  };
  const closeCert = () => {
    closeModal(certModal);
    if (certImage) certImage.src = "";
  };
  const closeVideo = () => {
    closeModal(videoModal);
    if (!videoPlayer) return;
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
  };

  document.querySelector(".close-pdf")?.addEventListener("click", closePdf);
  document.querySelector(".close-cert")?.addEventListener("click", closeCert);
  document.querySelector(".close-video")?.addEventListener("click", closeVideo);

  [[pdfModal, closePdf], [certModal, closeCert], [videoModal, closeVideo]].forEach(([modal, close]) => {
    modal?.addEventListener("click", (event) => {
      if (event.target === modal) close();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (pdfModal?.classList.contains("open")) closePdf();
    if (certModal?.classList.contains("open")) closeCert();
    if (videoModal?.classList.contains("open")) closeVideo();
  });
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  if (window.emailjs) window.emailjs.init("3VUrI-ZOiQMtlfBpi");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submit = form.querySelector('button[type="submit"]');
    submit?.setAttribute("disabled", "true");
    status.classList.remove("error");
    status.textContent = "Sending your message...";

    if (!window.emailjs) {
      status.classList.add("error");
      status.textContent = "The message service is unavailable. Please email me at stamkeen0506@gmail.com.";
      submit?.removeAttribute("disabled");
      return;
    }

    try {
      await window.emailjs.sendForm("service_cqe16o7", "template_2rytli9", form);
      status.textContent = "Thank you—your message was sent successfully.";
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      status.classList.add("error");
      status.textContent = "The message could not be sent. Please email me at stamkeen0506@gmail.com.";
    } finally {
      submit?.removeAttribute("disabled");
    }
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
