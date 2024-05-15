import React, { useState } from 'react';
import axios from 'axios';
interface Message {
  message: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [token] = useState(process.env.ACCESS_TOKEN);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessages([...messages, { message: userInput, sender: 'user' }]);
    try {
      const response = await generateResponse(userInput);
      setMessages([...messages, { message: response, sender: 'bot' }]);
      setUserInput('');
    } catch (error) {
      console.error(error);
      setMessages([...messages, { message: 'Sorry, I couldn\'t generate a response right now. Please try again later.', sender: 'bot' }]);
    }
  };

  const generateResponse = async (prompt: string): Promise<string> => {
    const url = 'https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B'; 
    const data = { inputs: prompt };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    };
    try {
      const res = await axios.post(url, data, { headers });
      return res.data[0]['generated_text'];
    } catch (error) {
      console.error(error);
      throw new Error('Failed to generate response');
    }
  };
  console.log(messages);

  return (
    <div className="chatbot-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          placeholder="Type your message here..."
          className="w-full px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
<div className="flex justify-center mt-4">
  <button type="submit" className="w-32 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
    Send
  </button>
</div>
      </form>
    </div>
  );
};

export default Chatbot;