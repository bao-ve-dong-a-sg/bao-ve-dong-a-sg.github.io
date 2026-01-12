// Toggle bóng đổ cho navbar khi cuộn
const navbar = document.querySelector(".navbar");
const navbarBrand = document.querySelector(".navbar-brand");
const logo = document.querySelector(".logo");

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Bóng đổ khi scroll
  if (scrollTop > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  
  // Trên mobile: ẩn/hiện logo khi scroll
  if (window.innerWidth < 992) {
    if (scrollTop > 50) {
      // Scroll xuống - ẩn logo, làm mảnh navbar
      if (logo) logo.style.display = "none";
      if (navbarBrand) navbarBrand.classList.add("scrolled-down");
      navbar.classList.add("scrolled-down");
    } else {
      // Scroll lên đầu - hiện logo
      if (logo) logo.style.display = "block";
      if (navbarBrand) navbarBrand.classList.remove("scrolled-down");
      navbar.classList.remove("scrolled-down");
    }
  } else {
    // Desktop: luôn hiện logo
    if (logo) logo.style.display = "block";
    if (navbarBrand) navbarBrand.classList.remove("scrolled-down");
    navbar.classList.remove("scrolled-down");
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
// Chạy ngay khi load để xử lý trường hợp đã scroll
handleScroll();

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
