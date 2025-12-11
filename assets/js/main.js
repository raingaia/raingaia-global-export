document.addEventListener('DOMContentLoaded', function() {
    
    // 1. GÖRÜNÜR OLMA ANİMASYONU (Reveal Animation)
    // Öğelerin sayfaya kaydırıldıkça yumuşak bir şekilde yukarı doğru çıkmasını sağlar.
    const revealElements = document.querySelectorAll('.reveal');

    // Intersection Observer ayarları
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Eğer element görünüyorsa 'is-visible' sınıfını ekle
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animasyon tek seferlik olsun
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        el.classList.add('hidden'); // CSS ile başlangıçta gizle
        observer.observe(el);
    });

    // 2. HEADER/NAVİGASYON GÖLGE EFEKTİ
    // Sayfa kaydırıldığında, navbar'a hafif bir gölge ekleyerek içeriği ayırır.
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            // Kaydırma başladığında, header'a 'scrolled' sınıfını ekle
            navbar.classList.add('scrolled');
        } else {
            // En üstteyken 'scrolled' sınıfını kaldır
            navbar.classList.remove('scrolled');
        }
    });
});
