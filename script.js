document.addEventListener('DOMContentLoaded', () => {
  // 1. Get references to the DOM elements
  const messageInput = document.getElementById('messageInput');
  const delayInput = document.getElementById('delayInput');
  const scheduleButton = document.getElementById('scheduleButton');
  const scheduledMessagesList = document.getElementById('scheduledMessagesList');
  const sentMessagesList = document.getElementById('sentMessagesList');

  // 2. Add an event listener to the scheduleButton
  scheduleButton.addEventListener('click', () => {
    // 3. Inside the event listener
    const messageText = messageInput.value.trim();
    const delaySeconds = parseInt(delayInput.value, 10);

    // Validate input
    if (!messageText) {
      alert('Please enter a message.');
      return;
    }
    if (isNaN(delaySeconds) || delaySeconds <= 0) {
      alert('Please enter a positive number for the delay.');
      return;
    }

    // Create a new message item element
    const messageItem = document.createElement('div');
    messageItem.classList.add('message-item');
    messageItem.textContent = `Message: ${messageText} - Sending in ${delaySeconds} seconds`;

    // Append to scheduledMessagesList
    scheduledMessagesList.appendChild(messageItem);

    // Clear input fields
    messageInput.value = '';
    delayInput.value = '';

    // Use setTimeout
    setTimeout(() => {
      // Remove from scheduledMessagesList
      // Check if the item is still in the list (it might have been removed by other means, though not in this simple app)
      if (messageItem.parentNode === scheduledMessagesList) {
        scheduledMessagesList.removeChild(messageItem);
      }

      // Update text content for sent status
      messageItem.textContent = `Sent: ${messageText}`;

      // Append to sentMessagesList
      sentMessagesList.appendChild(messageItem);
    }, delaySeconds * 1000); // Convert seconds to milliseconds
  });
});
