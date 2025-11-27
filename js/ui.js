// js/ui.js
// Header/Footer yükleme ve Ana Sayfa CTA (Keşfetmeye Başla) mantığını içerir.

document.addEventListener("DOMContentLoaded", () => {
    
    // Header ve Footer yükleme işlevi
    function loadPartial(selector, path) {
        const element = document.getElementById(selector);
        if (element) {
            // Dizin yapısının 'partials/' olduğunu varsayıyoruz.
            fetch(`partials/${path}`) 
                .then(res => {
                    if (!res.ok) throw new Error(`HTTP Hata! Durum: ${res.status} - ${path}`);
                    return res.text();
                })
                .then(data => {
                    element.innerHTML = data;
                })
                .catch(error => console.error(`Bölüm yüklenemedi: ${path}`, error));
        }
    }
    
    // Yükleme komutları
    loadPartial("site-header", "header.html");
    loadPartial("site-footer", "footer.html");


    // Ana Sayfa (index.html) CTA Buton Toggle Fonksiyonu
    const ctaButton = document.querySelector('.cta-button');
    const infoSections = document.getElementById('infoSections');

    if (ctaButton && infoSections) {
        ctaButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            infoSections.classList.add('show'); 
            setTimeout(() => {
                infoSections.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 500); 
        });
    }
});