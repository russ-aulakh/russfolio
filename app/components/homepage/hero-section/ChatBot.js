"use client"; // Add this line to mark the file as a client component

import { useState } from 'react';

export default function ChatBot() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState(null);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const fetchChatGPTResponse = async () => {
        const res = await fetch(`https://api.openai.com/v1/engines/davinci-codex/completions?input=${encodeURIComponent(input)}`);
        const data = await res.json();
        setResponse(data);
    };

    return (
        <div className="chat-bot">
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me anything..."
                className="input-box"
            />
            <button onClick={fetchChatGPTResponse} className="send-button">Send</button>
            {response && (
                <div className="response-box">
                    <strong>Response:</strong>
                    <p>{response}</p> {/* Adjust according to your API response structure */}
                </div>
            )}
        </div>
    );
}
