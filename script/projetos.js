document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    // Verificação para debug
    console.log('Burger:', burger);
    console.log('Nav Links:', navLinks);

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
        });
    } else {
        console.error('Elementos não encontrados!');
    }
});
