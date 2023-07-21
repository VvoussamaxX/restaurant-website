// Sample automatic responses
// Sample automatic responses
const automaticResponses = {
  "hello": "Hi, how can I assist you today?",
  "hours": "Our business hours are from 9 AM to 6 PM, Monday to Friday.",
  "location": "We are located at 123 Main Street, City, Country.",
  // Add more predefined questions and answers as needed
};

// Function to handle user input and generate automatic response
function handleUserInput() {
  const userInput = document.getElementById("user-input").value.trim();
  const chatMessages = document.getElementById("chat-messages");

  if (userInput !== "") {
    const userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.textContent = "You: " + userInput;
    chatMessages.appendChild(userMessage);

    const automaticResponse = document.createElement("div");
    automaticResponse.classList.add("message");
    automaticResponse.textContent =
      "Chatbot: " + getAutomaticResponse(userInput);
    chatMessages.appendChild(automaticResponse);

    // Clear user input
    document.getElementById("user-input").value = "";
    // Scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Function to get automatic response based on user input
function getAutomaticResponse(userInput) {
  userInput = userInput.toLowerCase();
  for (const question in automaticResponses) {
    if (userInput.includes(question)) {
      return automaticResponses[question];
    }
  }
  return "I'm sorry, I don't have the answer to that question.";
}

// Event listener for send button click
document.getElementById("send-button").addEventListener("click", handleUserInput);

// Event listener for pressing Enter key
document.getElementById("user-input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleUserInput();
  }
});

