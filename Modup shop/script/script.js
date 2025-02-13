let currentSlide = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    currentSlide = index;
    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % dots.length;
    showSlide(currentSlide);
}

// Troca automática a cada 15 segundos
setInterval(nextSlide, 15000);

function goToSlide(index) {
    showSlide(index);
}

// departamentos 
const openBtn = document.querySelector('.open-btn');
const categoryMenu = document.querySelector('.category-menu');
const sidebar = categoryMenu.querySelector('.sidebar');
const overlay = categoryMenu.querySelector('.overlay');
const closeBtn = sidebar.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
    categoryMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    categoryMenu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    categoryMenu.classList.remove('active');
});
//submenu
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento de clique nos links das categorias
    const categoryToggles = document.querySelectorAll('.category-toggle');
    
    categoryToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const target = document.querySelector(`.subcategory.${this.dataset.target}`);
            this.classList.toggle('active'); // Alterna a classe 'active'
            if (target.style.display === 'block') {
                target.style.display = 'none'; // Fecha o submenu
            } else {
                target.style.display = 'block'; // Abre o submenu
            }
        });
    });
});

