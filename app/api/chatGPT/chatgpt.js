import fetch from 'node-fetch';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const userInput = req.query.input; // Assuming input is passed as a query parameter
        const apiKey = process.env.CHATGPT_API_KEY; // Ensure this environment variable is set

        try {
            const apiResponse = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ input: userInput }),
            });

            const data = await apiResponse.json();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error fetching from ChatGPT API:', error);
            res.status(500).json({ error: 'Failed to fetch response' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
