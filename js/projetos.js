document.getElementById('new-project-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const projectTitle = this.querySelector('input').value;
    const projectDescription = this.querySelector('textarea').value;
  
    if (projectTitle && projectDescription) {
      const projectGrid = document.querySelector('.project-grid');
      const newProjectCard = document.createElement('div');
      newProjectCard.classList.add('project-card');
  
      newProjectCard.innerHTML = `
        <h3>${projectTitle}</h3>
        <p>${projectDescription}</p>
        <button class="cta-button small">Ver Mais</button>
      `;
  
      projectGrid.appendChild(newProjectCard);
  
      this.reset();
    }
  });
  