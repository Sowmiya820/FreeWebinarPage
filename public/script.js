document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const messageElement = document.getElementById('form-message');

    if (name && email && message) {
        fetch('/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    messageElement.textContent = 'Your message has been sent successfully!';
                    messageElement.style.color = 'green';
                } else {
                    messageElement.textContent = 'Failed to send your message. Please try again.';
                    messageElement.style.color = 'red';
                }
            })
            .catch(error => {
                messageElement.textContent = 'There was a problem with your submission.';
                messageElement.style.color = 'red';
            });
    } else {
        messageElement.textContent = 'Please fill out all fields.';
        messageElement.style.color = 'red';
    }
});