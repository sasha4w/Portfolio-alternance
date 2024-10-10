// Gestion son hover projet
// Sélection de tous les éléments avec la classe 'project-card-content'
const skillCardElements = document.querySelectorAll('.project-card');
const paperSound = document.getElementById('paperSound');

// Parcourir chaque élément et ajouter un événement 'mouseover' pour jouer le son
skillCardElements.forEach(function(skillCardElement) {
    skillCardElement.addEventListener('mouseover', function() {
        paperSound.play();
    });
});


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
    // EmailJs
  emailjs.init("1Av85qSubE8y8cWra");  
  
  // Formulaire EmailJs
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formStatus = document.getElementById('formStatus');

    // Paramètres de l'email
    const templateParams = {
      email: email,
      message: message
    };

    emailjs.send('service_sasha4w', 'template_sasha4w', templateParams)
      .then(function(response) {
        formStatus.innerText = 'Message envoyé avec succès!';
        formStatus.style.color = '#20fc8f';
        successSound.play();

         // Optionnel: délai avant de réinitialiser le formulaire pour que l'utilisateur voit le message
         setTimeout(() => {
           document.getElementById('contactForm').reset();
           formStatus.innerText = '';
         }, 3000); // Réinitialiser après 3 secondes
      }, function(error) {
         formStatus.innerText = "Échec de l'envoi. Veuillez réessayer.";
         formStatus.style.color = 'red';
         errorSound.play();
      });
  });


    
  });