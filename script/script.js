let chatboxVisible = false;

function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    chatboxVisible = !chatboxVisible;
    chatbox.style.display = chatboxVisible ? 'block' : 'none';
    if (chatboxVisible) {
        startChat();
    }
}

function startChat() {
    const chatboxBody = document.getElementById('chatbox-body');
    chatboxBody.innerHTML = '<div class="chat-message bot-message"><p>...</p></div>';

    setTimeout(() => {
        chatboxBody.innerHTML = '<div class="chat-message bot-message"><p>Olá, qual seu nome?</p></div>';
    }, 2000); // Simula a digitação por 2 segundos
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message === '') return;

    const chatboxBody = document.getElementById('chatbox-body');
    chatboxBody.innerHTML += `<div class="chat-message user-message"><p>${message}</p></div>`;
    userInput.value = '';

    setTimeout(() => {
        chatboxBody.innerHTML += '<div class="chat-message bot-message"><p>...</p></div>';

        setTimeout(() => {
            chatboxBody.innerHTML += `
                <div class="chat-message bot-message">
                    <p>Prazer, ${message}! Como posso te ajudar?</p>
                    <ul class="chat-options">
                        <li><button onclick="showOptions(1)">Entrar em contato</button></li>
                        <li><button onclick="showOptions(2)">Site sob medida</button></li>
                        <li><button onclick="showOptions(3)">Modificar um site existente</button></li>
                        <li><button onclick="showOptions(4)">Trabalhar com a gente</button></li>
                    </ul>
                </div>`;
        }, 2000);
    }, 1000); 
}

function showOptions(option) {
    const chatboxBody = document.getElementById('chatbox-body');
    let response = '';

    switch (option) {
        case 1:
            response = `
                <p>Ótimo! Você pode entrar em contato conosco através dos seguintes links:</p>
                <ul>
                    <li>techinova73@gmail.com</li>
                    <li><a href="https://www.instagram.com/modup_tech/" target="_blank">Instagram</a></li>
                </ul>`;
            break;
        case 2:
            response = `<p>Para sites sob medida, entre em contato pelo WhatsApp: <a href="https://wa.me/+5551983172705" target="_blank">WhatsApp</a></p>`;
            break;
        case 3:
            response = `<p>Precisando de ajustes no seu site? Fale conosco pelo WhatsApp ou Instagram:</p>
                        <ul>
                            <li><a href="https://wa.me/+5551983172705" target="_blank">WhatsApp</a></li>
                            <li><a href="https://www.instagram.com/modup_tech/" target="_blank">Instagram</a></li>
                        </ul>`;
            break;
        case 4:
            response = `<p>Interessado em trabalhar conosco? Mande seu currículo pelo Email ou WhatsApp:</p>
                        <ul>
                            <li><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">Email</a></li>
                            <li><a href="https://wa.me/+5551983172705" target="_blank">WhatsApp</a></li>
                        </ul>`;
            break;
    }

    chatboxBody.innerHTML += `<div class="chat-message bot-message">${response}</div>`;
}

/* Cookie Consent */
document.addEventListener("DOMContentLoaded", () => {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");
    const rejectButton = document.getElementById("reject-cookies");
  
    // Verifica se o consentimento já foi dado
    if (getCookie("cookie_consent") !== null) {
      cookiePopup.style.display = "none"; // Esconde o pop-up se já houver consentimento
    }
  
    // Aceitar cookies
    acceptButton.addEventListener("click", () => {
      setCookie("cookie_consent", "accepted", 1); 
      cookiePopup.style.display = "none"; // Esconde o pop-up
    });
  
    // Rejeitar cookies
    rejectButton.addEventListener("click", () => {
      setCookie("cookie_consent", "rejected", 365); // Define rejeição por 1 ano
      cookiePopup.style.display = "none"; // Esconde o pop-up
    });
  
    // Função para definir um cookie
    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    }
  
    // Função para obter um cookie
    function getCookie(name) {
      const cookies = document.cookie.split("; ");
      for (let i = 0; i < cookies.length; i++) {
        const [key, value] = cookies[i].split("=");
        if (key === name) {
          return value;
        }
      }
      return null;
    }
  });

//navbar burguer
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
