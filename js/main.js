// js/main.js

/**
 * Bu script, tüm HTML sayfalarında ortak olan Header ve Footer'ı 
 * harici dosyalardan (partials) çekerek DOM'a ekler.
 */
document.addEventListener("DOMContentLoaded", () => {
    
    // Header Yükleme İşlemi (partials/header.html)
    fetch("partials/header.html")
      .then(res => {
        if (!res.ok) {
            console.error('HATA: partials/header.html bulunamadı.');
            return;
        }
        return res.text();
      })
      .then(data => {
        const headerElement = document.getElementById("site-header");
        if (headerElement) {
          headerElement.innerHTML = data;
        }
      })
      .catch(err => console.error("Header yüklenirken hata oluştu:", err));


    // Footer Yükleme İşlemi (partials/footer.html)
    fetch("partials/footer.html")
      .then(res => {
        if (!res.ok) {
            console.error('HATA: partials/footer.html bulunamadı.');
            return;
        }
        return res.text();
      })
      .then(data => {
        const footerElement = document.getElementById("site-footer");
        if (footerElement) {
          footerElement.innerHTML = data;
        }
      })
      .catch(err => console.error("Footer yüklenirken hata oluştu:", err));
});