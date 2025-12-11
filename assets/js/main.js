document.addEventListener('DOMContentLoaded', function() {
    // 1. Navbar Rengi Değiştirme (Scroll Effect)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            // Kaydırma başladığında navbar'ın görünümünü değiştir (örneğin daha az şeffaf yap)
            navbar.style.backgroundColor = 'rgba(10, 17, 40, 0.9)';
        } else {
            // En üstteyken orijinal glassmorphism görünümüne dön
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }
    });

    // 2. Reveal Animasyonu (Karta kaydıkça görünür olma)
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animasyon tek seferlik olsun
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        el.classList.add('hidden'); // Başlangıçta gizle
        observer.observe(el);
    });
});
