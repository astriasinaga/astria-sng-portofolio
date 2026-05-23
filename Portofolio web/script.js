const navLinks = document.querySelectorAll(".nav-menu a, .bottom-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const parent = this.closest(".nav-menu, .bottom-nav");

    if (!parent) return;

    parent.querySelectorAll("a").forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");
  });
});