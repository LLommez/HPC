// Função para aplicar efeito de fade-in aos membros da equipe
document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        member.style.opacity = '0'; // Inicialmente invisível
        member.style.transform = 'translateY(20px)'; // Move os cards para baixo
        setTimeout(() => {
            member.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // Define a transição
            member.style.opacity = '1'; // Torna visível
            member.style.transform = 'translateY(0)'; // Move para a posição original
        }, index * 200); // Delay entre cada card
    });
});
