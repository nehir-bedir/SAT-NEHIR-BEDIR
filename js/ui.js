
// Header/Footer yükleme işlevini içerir. Ana Sayfa CTA kodu bu dosyadan KALDIRILMIŞTIR.

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

});
// Tema değiştirici
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '🌙';
themeToggle.style = 'position:fixed; bottom:20px; right:20px; z-index:999; background:#f1c40f; color:#183040; border:none; border-radius:50%; width:50px; height:50px; font-size:1.5rem; cursor:pointer;';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeToggle.innerHTML = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
});