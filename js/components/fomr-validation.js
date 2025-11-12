// İletişim veya yorum formu doğrulama işlemleri

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const name = form.querySelector("[name='name']");
      const message = form.querySelector("[name='message']");

      if (!name.value.trim() || !message.value.trim()) {
        alert("Lütfen tüm alanları doldurunuz!");
        return;
      }

      // Veritabanı yoksa localStorage kullanılabilir
      const comments = JSON.parse(localStorage.getItem("comments")) || [];
      comments.push({
        name: name.value,
        message: message.value,
        date: new Date().toLocaleString("tr-TR")
      });
      localStorage.setItem("comments", JSON.stringify(comments));

      alert("Yorumunuz kaydedildi!");
      form.reset();
    });
  }
});
