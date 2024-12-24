document.addEventListener('DOMContentLoaded', function () {
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    const formContainer = document.getElementById('formContainer');

    // Alterna entre o formulário de login e cadastro
    showRegisterLink.addEventListener('click', function (e) {
        e.preventDefault();
        formContainer.classList.add('flip'); // Adiciona a classe que vai girar o card
        document.getElementById('loginCard').style.display = 'none';
        document.getElementById('registerCard').style.display = 'block';
    });

    showLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        formContainer.classList.remove('flip'); // Remove a classe de rotação
        document.getElementById('loginCard').style.display = 'block';
        document.getElementById('registerCard').style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    const formContainer = document.getElementById('formContainer');

    // Alterna entre o formulário de login e cadastro
    showRegisterLink.addEventListener('click', function (e) {
        e.preventDefault();
        formContainer.classList.add('flip'); // Adiciona a classe que vai girar o card
    });

    showLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        formContainer.classList.remove('flip'); // Remove a classe de rotação
    });
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRJ-q_-t6Q7rppCdWebhYQRiWTs_YSCqU",
  authDomain: "mod--up-tecnologia.firebaseapp.com",
  projectId: "mod--up-tecnologia",
  storageBucket: "mod--up-tecnologia.firebasestorage.app",
  messagingSenderId: "364866578067",
  appId: "1:364866578067:web:42c4ea6c30a216da2f4f66",
  measurementId: "G-RCC0YNDPNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);