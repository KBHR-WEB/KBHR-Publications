let chatOpen = false;

function toggleChat() {
  const chatBox = document.getElementById('chatBox');
  chatOpen = !chatOpen;
  if (chatOpen) {
    chatBox.style.display = 'block';
  } else {
    chatBox.style.display = 'none';
  }
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const chatMessages = document.getElementById('chatMessages');
  const messageText = messageInput.value;

  if (messageText.trim() !== '') {
    const messageElement = document.createElement('div');
    messageElement.textContent = messageText;

    messageElement.classList.add('message', 'sent'); // Ajout de la classe 'sent' pour les messages envoyés

    chatMessages.appendChild(messageElement);
    messageInput.value = '';
  }
}



