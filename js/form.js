

<script>
  function sendForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Envoie des données via AJAX ou fetch() ici
    
    alert("Formulaire envoyé !");
  }
  
  
</script>

document.createElement('form');

// Ajouter un champ de saisie pour le nom
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');
nameInput.setAttribute('placeholder', 'Nom');
nameInput.addEventListener('input', validateName);
form.appendChild(nameInput);

// Ajouter un champ de saisie pour l'e-mail
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('placeholder', 'email');
emailInput.addEventListener('input', validateEmail);
form.appendChild(emailInput);

// Ajouter un champ de saisie pour le message
const messageInput = document.createElement('textarea');
messageInput.setAttribute('name', 'message');
messageInput.setAttribute('placeholder', 'Message');
messageInput.addEventListener('input', validateMessage);
form.appendChild(messageInput);


// Ajouter un bouton de soumission
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.innerText = 'Envoyer';
submitButton.addEventListener('click', submitForm);
form.appendChild(submitButton);

// Ajouter le formulaire à la page HTML
const formContainer = document.querySelector('form');
formContainer.appendChild(form);