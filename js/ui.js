// Kullanıcı arayüzü ile ilgili scriptler

function initMenuToggle() {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("header nav ul");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
}

// Scroll ile header efektleri (isteğe bağlı)
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// === Header ve Footer Dinamik Yükleme ===
document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");

  // Header yükleme
  if (headerEl) {
    fetch("partials/header.html")
      .then((res) => {
        if (!res.ok) throw new Error("Header yüklenemedi.");
        return res.text();
      })
      .then((data) => {
        headerEl.innerHTML = data;
        initMenuToggle(); // menü toggle'ı aktif et
      })
      .catch((err) => console.error(err));
  }

  // Footer yükleme
  if (footerEl) {
    fetch("partials/footer.html")
      .then((res) => {
        if (!res.ok) throw new Error("Footer yüklenemedi.");
        return res.text();
      })
      .then((data) => {
        footerEl.innerHTML = data;
      })
      .catch((err) => console.error(err));
  }
});
