document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleInfoBtn");
  const section = document.getElementById("infoSections");

  if (!btn || !section) return;

  // Başlangıçta kapalı
  section.classList.remove("show");
  btn.classList.remove("active");

  btn.addEventListener("click", () => {
    if (section.classList.contains("show")) {
      section.classList.remove("show");
      btn.textContent = "Keşfetmeye Başla";
      btn.classList.remove("active");
    } else {
      section.classList.add("show");
      btn.textContent = "Kapat";
      btn.classList.add("active");
    }
  });
});