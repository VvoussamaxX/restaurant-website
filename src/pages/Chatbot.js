import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    if (input.includes('reservation')) {
      return 'Call us on +1 869 613 2212';
    } else if (input.includes('chefs')) {
      return 'Sarah Leps - Tomy Bet - Oumayma Kinani';
    } else if (input.includes('menu') || input.includes('specials')) {
      return 'Check our Services page';
    } else if (input.includes('hours')) {
      return 'Our business hours are Monday-Saturday: 11:00 AM - 23:00 PM.';
    } else if (input.includes('location')) {
      return 'Our restaurant is located at 370 Rue de Pointe-Gatineau, Gatineau, QC J8T 2C1, Canada';
    } else if (input.includes('contact')) {
      return 'You can contact us via email at SavourEats@gmail.com or call +1 869 613 2212.';
    } else {
      return "Sorry, I don't have that information.";
    }
  };

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      // Add the user's input to the messages array
      const userMessage = { text: inputValue, sender: 'user' };
      setMessages([...messages, userMessage]);

      const botResponse = getBotResponse(inputValue);
      setMessages([...messages, { text: botResponse, sender: 'bot' }]);

      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <section id="chat">
      <div className="chat-container">
        <div className="chat-header">
          <h3>Chat</h3>
          <div className="chatbot-keywords">
        <p>Chatbot can answer to the following keywords:</p>
        <ul>
          <li>Reservation</li>
          <li>Chefs</li>
          <li>Menu or Specials</li>
          <li>Hours</li>
          <li>Location</li>
          <li>Contact</li>
        </ul>
      </div>
        </div>
        <div className="chat-messages" id="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.sender === 'user' ? (
                <p><strong>You:</strong> {message.text}</p>
              ) : (
                <p><strong>Bot:</strong> {message.text}</p>
              )}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            id="user-input"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button id="send-button" onClick={handleMessageSend}>
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
