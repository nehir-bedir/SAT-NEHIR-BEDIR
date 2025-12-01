// js/homepage-toggle.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Gerekli elementleri yakala
    const ctaButton = document.querySelector('.cta-button'); 
    const heroSection = document.querySelector('.hero-section');
    const infoSections = document.getElementById('infoSections');
    const body = document.body; // body elementini yakala

    if (ctaButton && heroSection && infoSections) {
        // Kartlar bölümünün başlangıçta sayfadan kaymasını engellemek için gerekli olabilir
        // Eğer kartlar görünmüyorsa: body.classList.add('hide-info-sections'); 

        // 2. Butona tıklama olayını dinle
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault(); 

            // 3. Hero bölümüne "hidden" sınıfını ekle (Bu gizleme ve akıştan kaldırma yapar)
            heroSection.classList.add('hidden');
            
            // 4. ***YENİ EKLENEN KISIM:***
            // Sayfanın genelini kontrol etmek için body'ye bir sınıf ekleyelim.
            // Bu, Header'ın hemen altında kartların görünmesini sağlamalı.
            body.classList.add('homepage-content-visible');

            // 5. Kaydırma animasyonunun tamamlanmasını bekleyip sayfayı kartlara kaydır.
            setTimeout(() => {
                 infoSections.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 550); // CSS geçiş süresinden (0.5s) biraz daha uzun
        });
    }
    
    // Sayfa zaten kaydırılmış durumdaysa, Hero'yu gizle (Yenileme sonrası konumunu koruma)
    // Bu, tarayıcıda geri gelindiğinde tam ekran siyah ekran görmeyi engeller.
    if (window.scrollY > 50) { 
        heroSection.classList.add('hidden');
        body.classList.add('homepage-content-visible');
    }
});