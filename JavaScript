// js/script.js
class CircularCarousel {
    constructor() {
        this.carousel = document.querySelector('.carrossel');
        this.items = document.querySelectorAll('.carrossel-item');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.angle = 0;
        this.totalItems = this.items.length;
        
        this.init();
    }
    
    init() {
        this.prevBtn.addEventListener('click', () => this.rotate(-120));
        this.nextBtn.addEventListener('click', () => this.rotate(120));
        
        // دوران تلقائي كل 5 ثواني
        setInterval(() => this.rotate(120), 5000);
    }
    
    rotate(angle) {
        this.angle += angle;
        this.carousel.style.transform = `rotateY(${this.angle}deg)`;
    }
}

// تشغيل الكاروسيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    new CircularCarousel();
});
