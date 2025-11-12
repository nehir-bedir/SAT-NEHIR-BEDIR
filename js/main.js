// Ana script dosyası

// Header ve footer yükleme
document.addEventListener("DOMContentLoaded", () => {
  loadPartials();
  loadFeaturedInstruments();
  initInstrumentSearch(); // Yeni eklendi 🎯
});

// HTML parçalarını dinamik olarak yükleme
function loadPartials() {
  fetch("partials/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("site-header").innerHTML = data;
      initMenuToggle();
    });

  fetch("partials/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("site-footer").innerHTML = data;
    });
}

// Öne çıkan müzik aletleri
function loadFeaturedInstruments() {
  const instruments = [
    {
      name: "Gitar",
      img: "assets/images/instruments/gitar.jpg",
      desc: "Telli çalgıların en popüleridir. Akustik ve elektrik türleri vardır."
    },
    {
      name: "Piyano",
      img: "assets/images/instruments/piyano.jpg",
      desc: "Tüm müzik türlerinde kullanılan tuşlu bir çalgıdır."
    },
    {
      name: "Keman",
      img: "assets/images/instruments/keman.jpg",
      desc: "Yaylı çalgılar arasında yer alır ve klasik müzikte önemli bir yere sahiptir."
    }
  ];

  const container = document.getElementById("featured-instruments");
  if (!container) return;

  instruments.forEach(inst => {
    const card = document.createElement("div");
    card.classList.add("instrument-card");
    card.setAttribute("data-name", inst.name.toLowerCase());
    card.innerHTML = `
      <img src="${inst.img}" alt="${inst.name}">
      <div class="info">
        <h3>${inst.name}</h3>
        <p>${inst.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// === 🎵 MÜZİK ALETLERİ SAYFASI: Arama & Filtreleme ===
function initInstrumentSearch() {
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".instrument-card");

  // Eğer sayfa "instruments.html" değilse, çık.
  if (!searchInput || cards.length === 0) return;

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(value) ? "block" : "none";
    });
  });
}
