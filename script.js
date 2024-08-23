document.getElementById('ask-button').addEventListener('click', async () => {
    const question = document.getElementById('question').value;
    const responseElement = document.getElementById('response');

    const response = await fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
    });

    const result = await response.json();
    responseElement.textContent = result.answer;
});
