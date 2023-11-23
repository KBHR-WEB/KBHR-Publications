const chatIcon = document.querySelector('.chat-icon');
const chatBox = document.querySelector('.chat-box');
const userInput = document.getElementById('userInput');
const chatContent = document.getElementById('chatContent');

chatIcon.addEventListener('click', () => {
  chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
});

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const userMessage = userInput.value;
    appendMessage('sent', userMessage);
    processUserInput(userMessage);
    userInput.value = '';
  }
});

function appendMessage(type, message) {
  const newMessage = document.createElement('div');
  newMessage.classList.add('message', type);
  newMessage.innerText = message;
  chatContent.appendChild(newMessage);
}

function processUserInput(message) {
  const keywords = ['bonjour', 'aide', 'information', 'probleme'];

  const lowerCaseMessage = message.toLowerCase();
  if (lowerCaseMessage.includes('bonjour')) {
    respondToUser('Bienvenue sur notre messagerie! Comment puis-je vous aider?');
  } else if (lowerCaseMessage.includes('aide')) {
    respondToUser('Bien sûr! Je vais vous aidez! Voulez vous savoir comment avoir accès à nos produits? Voulez vous en acheter? Ou rencontrez vous un problème avec un de nos produits?');
  } else if (lowerCaseMessage.includes('information')) {
    respondToUser('Pour toute information, je vous redirige vers un numéro! Composez le : +225 07-67-541-784');
  } else if (lowerCaseMessage.includes('probleme')) {
    respondToUser('Oh non! Je suis navrée! Je vous met immédiatement en contact avec le service client!');
  } else {
    respondToUser('Rencontrez vous un problème? Nous pouvons le résoudre ensemble décrivez-le moi!');
  }

function respondToUser(response) {
  setTimeout(() => {
    appendMessage('received', response);
  }, 500);
}

const sendMessageBtn = document.getElementById('sendMessageBtn');

sendMessageBtn.addEventListener('click', () => {
  const userMessage = userInput.value;
  if (userMessage.trim() !== '') {
    appendMessage('sent', userMessage);
    processUserInput(userMessage);
    userInput.value = '';
  }
})};
