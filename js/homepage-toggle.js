// js/homepage-toggle.js

document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector('.hero');
    const infoSections = document.getElementById('infoSections');
    const exploreButton = heroSection ? heroSection.querySelector('.btn') : null;

    if (!heroSection || !infoSections || !exploreButton) {
        // Gerekli elemanlar yoksa (diğer sayfalardaysak) çalışmayı durdur.
        return;
    }

    // Başlangıçta info-sections görünür olmamalı
    infoSections.classList.remove('visible'); 

    // Butona tıklandığında geçişi yap
    exploreButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        // 1. Hero alanını küçült (CSS'teki .hero-minimized sınıfını kullanır)
        heroSection.classList.add('hero-minimized');
        
        // 2. Info Sections içeriğini göster
        infoSections.classList.add('visible');

        // 3. Kullanıcıyı gösterilen içeriğe kaydır
        setTimeout(() => {
            infoSections.scrollIntoView({ behavior: 'smooth' });
        }, 500); // CSS animasyon süresiyle senkronize et

        // 4. Butonu devre dışı bırak/gizle (isteğe bağlı)
        exploreButton.style.display = 'none';
    });
});