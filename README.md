🎵 Melodi Rehberi: İnteraktif Müzik Keşif Platformu
Bu proje, müziğin evrensel gücünü, tarihsel gelişimini ve insan ruhu üzerindeki etkilerini modern web teknolojileriyle sunan etkileşimli bir platformdur. Kullanıcıların müzik kültürünü derinleştirmeyi ve onlara görsel bir şölen sunmayı amaçlar.

✨Öne Çıkan Özellikler
Dinamik Keşfet Deneyimi: Ana sayfadaki interaktif butonlar aracılığıyla sayfa yenilenmeden açılan, akıcı animasyonlara sahip içerik alanları.

Görsel Odaklı Tasarım: Her müzik kategorisi için özel olarak tasarlanmış, CSS linear-gradient ve background-size: cover ile optimize edilmiş tam ekran arka plan görselleri.

Akıllı İçerik Değiştirici: "Müzik Türleri" sayfasında JavaScript tabanlı çalışan, türler arası geçişi (Klasik, Caz, Rock vb.) hızlandıran sekmeli (tabbed) yapı.

Modüler CSS Mimarisi: Kodun okunabilirliğini ve yönetilebilirliğini artıran parçalı stil yapısı (hero.css, detail-page.css, reset.css).

Duyarlı (Responsive) Tasarım: CSS Grid ve Flexbox kullanılarak oluşturulan, her ekran boyutunda kusursuz görünen ızgara (grid) yerleşimi.

├── assets/
│   └── images/          # Arka planlar ve enstrüman görselleri
├── css/
│   ├── components/      # Header, Footer ve özel alan stilleri
│   ├── main.css         # Genel site stilleri
│   └── reset.css        # Tarayıcı sıfırlama dosyası
├── js/
│   ├── ui.js            # Genel arayüz etkileşimleri
│   └── switcher.js      # İçerik değiştirme mantığı
├── index.html           # Ana sayfa
└── genres.html          # Müzik türleri detay sayfası

