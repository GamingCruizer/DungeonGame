const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/ask', async (req, res) => {
    const { question } = req.body;

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer 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`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: question,
            max_tokens: 150
        })
    });

    const data = await response.json();
    res.json({ answer: data.choices[0].text.trim() });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
