// Toggle bóng đổ cho navbar khi cuộn
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Đóng menu mobile khi click nút mũi tên lên
const navbarCollapseClose = document.querySelector(".navbar-collapse-close");
const navbarCollapse = document.getElementById("navbarNav");
const navbarToggler = document.querySelector(".navbar-toggler");

if (navbarCollapseClose && navbarCollapse && navbarToggler) {
  navbarCollapseClose.addEventListener("click", () => {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
}

// Hiện nút Back to Top khi cuộn
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Đánh dấu nav-link active theo mục đang xem
const sections = document.querySelectorAll("main > section");
const navLinks = document.querySelectorAll(".nav-link");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("active"));
        const id = entry.target.getAttribute("id");
        const current = document.querySelector(
          `.nav-link[href="#${id}"]`
        );
        if (current) current.classList.add("active");
      }
    });
  },
  { rootMargin: "-50% 0px -45% 0px" }
);
sections.forEach((s) => io.observe(s));
