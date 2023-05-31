// Création du formulaire
const form = document.createElement('form');

// Ajouter un champ de saisie pour le nom
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');
nameInput.setAttribute('placeholder', 'Nom');
form.appendChild(nameInput);

// Ajouter un champ de saisie pour l'e-mail
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('placeholder', 'Email');
form.appendChild(emailInput);

// Ajouter un champ de saisie pour le message
const messageInput = document.createElement('textarea');
messageInput.setAttribute('name', 'message');
messageInput.setAttribute('placeholder', 'Message');
form.appendChild(messageInput);

// Ajouter un bouton de soumission
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.innerText = 'Envoyer';
form.appendChild(submitButton);

// Ajouter le formulaire à la page HTML
const formContainer = document.querySelector('.form-container');
formContainer.appendChild(form);

// Ajouter l'événement de soumission du formulaire
form.addEventListener('submit', submitForm);

// Fonction de soumission du formulaire
function submitForm(event) {
  event.preventDefault(); // Empêcher le rechargement de la page

  // Récupérer les valeurs des champs du formulaire
  var name = nameInput.value;
  var email = emailInput.value;
  var message = messageInput.value;

  // Validation du formulaire
  if (!validateForm(name, email, message)) {
    return; // Arrêter la soumission si le formulaire n'est pas valide
  }

  // Envoi des données via AJAX ou fetch()
  // Ici, vous pouvez utiliser du code AJAX ou fetch() pour envoyer les données du formulaire au serveur

  alert("Formulaire envoyé !");
  // Réinitialiser les champs du formulaire
  form.reset();
}

// Fonction de validation du formulaire
function validateForm(name, email, message) {
  // Vérifier si les champs sont vides
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert("Veuillez remplir tous les champs du formulaire.");
    return false;
  }
  // Vérifier le format de l'adresse e-mail
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Veuillez entrer une adresse e-mail valide.");
    return false;
  }

  return true; // Le formulaire est valide
}