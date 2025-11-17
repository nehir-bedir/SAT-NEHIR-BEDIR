// js/ui.js

document.addEventListener("DOMContentLoaded", () => {
    
    // ------------------------------------
    // 1. İletişim Formu İşlevi (contact.html)
    // ------------------------------------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

            // Basit bir demo mesajı göster
            alert("Mesajınız başarıyla gönderildi! (Bu sadece demo bir işlevdir.)");
            
            // Formu temizle
            this.reset();
        });
    }

    // ------------------------------------
    // 2. Kategori Arama İşlevi (categories.html ve detay sayfaları)
    // ------------------------------------
    const searchInput = document.getElementById('searchInput');
    const categoriesGrid = document.getElementById('categoriesGrid');

    if (searchInput && categoriesGrid) {
        // Arama input'unu etkinleştir
        searchInput.disabled = false;
        
        searchInput.addEventListener('input', function() {
            const searchText = this.value.toLowerCase().trim();
            const cards = categoriesGrid.querySelectorAll('.instrument-card');
            
            cards.forEach(card => {
                const cardName = card.getAttribute('data-name').toLowerCase();
                
                // Eğer kart adı, arama metnini içeriyorsa göster, yoksa gizle
                if (cardName.includes(searchText)) {
                    card.style.display = 'flex'; // CSS'teki display değerine uygun olmalı
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});