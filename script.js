document.addEventListener('DOMContentLoaded', () => {
    const specialButton = document.getElementById('special-button');
    const menu = document.getElementById('menu');
    const closeButton = document.getElementById('close-button');
    const messageForm = document.getElementById('message-form');

    // Open the menu when the special button is clicked
    specialButton.addEventListener('click', () => {
        menu.classList.add('show');
    });

    // Close the menu when the close button is clicked
    closeButton.addEventListener('click', () => {
        menu.classList.remove('show');
    });

    // Handle form submission
    messageForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Get the values from the form fields
        const username = document.getElementById('username').value;
        const message = document.getElementById('message').value;

        // Define the webhook URL
        const webhookUrl = 'https://discord.com/api/webhooks/1237074055786528818/5QdnsvzrYFiw_E5XqBObTBqa_bHATgYIcUM3oz5UXA4Hipkgcbn4ej6g5HO2fr-DFFwt'; // Replace with your Discord webhook URL

        // Format the message
        const formattedMessage = `<@500665249377026063>\nNew message from ${username}!\n\n[quote]${message}[/quote]`;

        // Prepare the payload
        const payload = {
            content: formattedMessage
        };

        try {
            // Send the message to the Discord webhook
            await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            alert('Message sent!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message.');
        }

        // Optionally clear the form fields after submission
        messageForm.reset();
        menu.classList.remove('show');
    });
});
