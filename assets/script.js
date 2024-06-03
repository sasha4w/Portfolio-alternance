// BOUTON CV



// AGGRANDISSEMENT Image

const thumbnails = document.querySelectorAll('.thumbnail');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');

    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
      });
    });

    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });



    
    
    // Skill actif ou non  
    
    document.addEventListener("DOMContentLoaded", function() {
      const skillTypes = document.querySelectorAll(".skill-type");
      
      skillTypes.forEach(skillType => {
        skillType.addEventListener("click", function() {
          // Enlève la classe active de tous les skillTypes
        skillTypes.forEach(element => {
          element.classList.remove("active");
        });
        
        // Ajoute la classe active au skillType cliqué
        this.classList.add("active");
        
        // Cache tous les skill-sides
        const skillSides = document.querySelectorAll(".skill-side");
        skillSides.forEach(skillSide => {
          skillSide.classList.remove("active");
        });
        
        // Affiche le skill-side correspondant à la compétence sélectionnée
        const index = Array.from(skillTypes).indexOf(this);
        skillSides[index].classList.add("active");
      });
    });
    

    
  });