// js/main.js
// Kategorilerdeki arama çubuğu ve detay sayfalarındaki açılır/kapanır (toggle) mantığını içerir.

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. KATEGORİ SAYFALARI ARAMA FONKSİYONU
    const searchInput = document.getElementById('searchInput');
    const instrumentsGrid = document.getElementById('instrumentsGrid');

    if (searchInput && instrumentsGrid) {
        searchInput.addEventListener('keyup', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            const cards = instrumentsGrid.querySelectorAll('.instrument-card'); 

            cards.forEach(card => {
                // data-name özelliğini kullanarak arama yapar
                const instrumentName = card.getAttribute('data-name').toLowerCase(); 
                
                if (instrumentName.includes(searchTerm) || searchTerm === '') {
                    card.style.display = 'flex'; 
                } else {
                    card.style.display = 'none'; 
                }
            });
        });
    }
    
    // 2. ENSTRÜMAN DETAY SAYFALARI İÇİN AÇILIR/KAPANIR (TOGGLE) FONKSİYONU
    function setupDetailToggle(buttonId, sectionId, defaultText, activeText) {
        const toggleButton = document.getElementById(buttonId);
        const typesSection = document.getElementById(sectionId);

        if (toggleButton && typesSection) {
            toggleButton.addEventListener('click', function() {
                const isVisible = typesSection.classList.toggle('visible'); 
                
                if (isVisible) {
                    toggleButton.innerHTML = activeText;
                    // Açılınca sayfayı açılan bölüme kaydır
                    setTimeout(() => {
                        typesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100); 
                } else {
                    toggleButton.innerHTML = defaultText;
                    // Kapanınca butonun kendisine geri kaydır
                    toggleButton.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
    }
    
    // TÜM ENSTRÜMANLAR İÇİN DETAY SAYFASI TOGGLE ÇAĞRILARI:
    
    // 1. Telli Çalgılar:
    setupDetailToggle('toggleTypesButton', 'guitarTypesSection', 'Gitarın Başlıca Çeşitlerini Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
    setupDetailToggle('toggleTypesButton', 'baglamaTypesSection', 'Bağlama Çeşitlerini ve Özelliklerini Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
    setupDetailToggle('toggleTypesButton', 'kemanTypesSection', 'Keman Ailesini ve Türlerini Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
    setupDetailToggle('toggleTypesButton', 'udTypesSection', "Ud'un Tarihçesini ve Çeşitlerini Keşfet! ⬇️", 'Çeşitleri Gizle ⬆️');
    setupDetailToggle('toggleTypesButton', 'kanunTypesSection', "Kanun'un Yapısını ve Çalınma Tekniklerini Keşfet! ⬇️", 'Çeşitleri Gizle ⬆️');

    // 2. Üflemeli Çalgılar:
    setupDetailToggle('toggleTypesButton', 'flutTypesSection', 'Flüt Çeşitlerini ve Özelliklerini Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
    setupDetailToggle('toggleTypesButton', 'klarnetTypesSection', 'Klarnet Türlerini ve Yapısını Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
    setupDetailToggle('toggleTypesButton', 'saksafonTypesSection', 'Saksafon Ailesini ve Kullanım Alanlarını Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
    setupDetailToggle('toggleTypesButton', 'trompetTypesSection', 'Trompet Türlerini ve Mekanizmasını Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
    setupDetailToggle('toggleTypesButton', 'neyTypesSection', "Ney'in Yapısını ve Çeşitlerini Keşfet! ⬇️", 'Çeşitleri Gizle ⬆️');

    // 3. Vurmalı Çalgılar:
    setupDetailToggle('toggleTypesButton', 'bateriTypesSection', 'Bateri Bileşenlerini ve Türlerini Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
    // Zil kaldırıldı.
    setupDetailToggle('toggleTypesButton', 'darbukaTypesSection', 'Darbuka Türlerini ve Çalım Tekniklerini Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
    setupDetailToggle('toggleTypesButton', 'timpaniTypesSection', 'Timpani Mekanizmasını ve Çeşitlerini Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
    setupDetailToggle('toggleTypesButton', 'djembeTypesSection', 'Djembe Çalım Tekniklerini ve Özelliklerini Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
    setupDetailToggle('toggleTypesButton', 'handpanTypesSection', 'Handpan Özelliklerini ve Çalınış Biçimini Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');

    // 4. Tuşlu Çalgılar:
    setupDetailToggle('toggleTypesButton', 'pianoTypesSection', 'Piyano Çeşitlerini ve Mekanizmasını Keşfet! ⬇️', 'Çeşitleri Gizle ⬆️');
});