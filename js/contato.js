// Inicializa o mapa com Leaflet.js
var map = L.map('map').setView([-19.871299, -43.964809], 13); // Coordenadas de Belo Horizonte, MG

// Define a camada do mapa OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona um marcador no local do laboratório
var marker = L.marker([-19.871299, -43.964809]).addTo(map);
marker.bindPopup("<b>Laboratório H.P.C.</b><br>Av. Pres. Antônio Carlos, 6627 - Belo Horizonte, MG").openPopup();


// Animação suave para o formulário ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    form.style.opacity = '0';
    form.style.transform = 'translateY(30px)';
    setTimeout(function () {
        form.style.transition = 'opacity 1s ease, transform 1s ease';
        form.style.opacity = '1';
        form.style.transform = 'translateY(0)';
    }, 300);
});

// Efeito hover para o botão de envio do formulário
const button = document.querySelector('button');
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = '#0666cc';
});
button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '#0a8bf0';
});

// Inicializa o EmailJS
(function() {
    emailjs.init('fxj3izZZQEQEWvVGL'); // Substitua 'YOUR_USER_ID' pelo seu User ID do EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Coleta os dados do formulário
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    // Envia o email usando EmailJS
    emailjs.send('service_sx93b7j', 'template_0d347db', templateParams)
        .then(function(response) {
           alert('Email enviado com sucesso!', response.status, response.text);
        }, function(error) {
           alert('Ocorreu um erro no envio do email.', error);
        });
});
