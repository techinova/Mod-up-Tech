// Função para exibir o pop-up
const showPopup = () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block'; // Exibe a sobreposição e o pop-up

    // Evento para fechar o pop-up
    document.getElementById('closePopup').addEventListener('click', () => {
        overlay.style.display = 'none'; // Oculta a sobreposição e o pop-up
    });

    // Evento para redirecionar para a página de login
    document.getElementById('loginButton').addEventListener('click', () => {
        window.location.href = '/html/login.html'; // Substitua '/login' pelo link da página de login
    });
};

// Exibe o pop-up ao carregar a página
window.onload = function () {
    showPopup(); // Exibe o pop-up ao carregar a página

    // Exibe o pop-up a cada 2:30 minutos (150000 ms)
    setInterval(showPopup, 150000);
};
// Selecionando os elementos
const images = document.querySelectorAll('.card-image');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeBtn');

// Função para abrir o modal com a imagem clicada
images.forEach(image => {
image.addEventListener('click', () => {
modal.style.display = 'block'; // Exibe o modal
overlay.style.display = 'block'; // Exibe o overlay (fundo escurecido)
modalImage.src = image.src; // Define a imagem do modal como a da imagem clicada
});
});

// Função para fechar o modal
closeBtn.addEventListener('click', () => {
modal.style.display = 'none'; // Oculta o modal
overlay.style.display = 'none'; // Oculta o overlay
});

// Fecha o modal se o overlay for clicado
overlay.addEventListener('click', () => {
modal.style.display = 'none'; // Oculta o modal
overlay.style.display = 'none'; // Oculta o overlay
});

