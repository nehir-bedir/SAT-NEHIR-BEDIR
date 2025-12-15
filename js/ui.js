

document.addEventListener("DOMContentLoaded", () => {
    
    function loadPartial(selector, path) {
        const element = document.getElementById(selector);
        if (element && element.innerHTML.trim() === "") {
            fetch(`partials/${path}`)
                .then(res => {
                    if (!res.ok) throw new Error(`HTTP Hata! Durum: ${res.status} - ${path}`);
                    return res.text();
                })
                .then(data => {
                    element.innerHTML = data;
                })
                .catch(err => console.error(`Partial yüklenemedi (${path}):`, err));
        }
    }

   
    loadPartial("site-header", "header.html");
    loadPartial("site-footer", "footer.html");


    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        });
    });

  
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.classList.add('theme-toggle');  
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeToggle.innerHTML = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
    });
});

const themeStyle = document.createElement('style');
themeStyle.innerHTML = `
    .theme-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
        background: #f1c40f;
        color: #183040;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transition: all 0.3s;
    }
    .theme-toggle:hover {
        transform: scale(1.1);
    }
`;
document.head.appendChild(themeStyle);