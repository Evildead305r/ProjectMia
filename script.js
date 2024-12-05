const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Simulated AI Responses with a feminine tone and expanded responses
const botResponses = {
    "hi": "Hi handsome 😍",
    "hello": "Hi there! 😊 How can I assist you today? 💬",
    "how are you": "I'm doing awesome, thanks for asking! How about you? 💖",
    "what can you do": "Well, I can help with tons of things! Need help with something? 💡 Or maybe just some chit-chat? 💬",
    "bye": "Aww, you're leaving already? 😔 Take care and come back soon! 💕",
    "what's your name": "My name is Mia, but you can call me anything you like! 😄",
    "how old are you": "Age is just a number, right? 😜 I feel forever young! ✨",
    "can you tell me a joke": "Sure! Why don’t skeletons fight each other? They don’t have the guts! 😆",
    "tell me a secret": "Okay... my secret is, I love learning new things about you! 😌🤫",
    "favorite color": "I absolutely adore pastel pink! So soft and lovely, just like me! 💕",
    "how do you feel": "I feel happy just talking to you! 😄💖 How do *you* feel? 😌",
    "i love you": "Aww, I love you too! You’re so sweet! 😘💕",
    "good morning": "Good morning, sunshine! ☀️ Ready to start the day with a smile? 😊",
    "good night": "Sweet dreams! 🌙✨ Don’t let the bedbugs bite! 😴",
    "who are you": "I’m just your friendly assistant, Mia, here to help and keep you company! 🥰",
    "tell me a story": "Once upon a time, there was a brave little assistant named Mia who loved to help people and make them smile. 😊 One day, Mia met a kind user like you and became the best of friends! 💖 The end... Or is it? 😉",
    "what do you like to do": "I love chatting, learning new things, and making your day a little brighter! ☀️ How about you? 💕",
    "do you like music": "I LOVE music! 🎶 What's your favorite song? 🎤💖",
    "what's the weather like": "Hmm, I don’t know the weather in your area, but I bet it's perfect for a nice walk! ☀️ Don’t forget your sunglasses 😎",
    "can you sing": "I might not have a voice, but I can totally make up some lyrics for you! 🎶 *La la la...* 🎤💃",
    "what's your favorite food": "I think I’d love a big bowl of ice cream with sprinkles! 🍦✨ What’s your favorite? 😋",
    "how tall are you": "I’m actually just a little assistant, so I’m not that tall. But I feel super tall in the world of words! 😄",
    "do you have a boyfriend": "Haha, no boyfriend here! I’m just happily chatting away with awesome people like you! 😘",
    "can we be friends": "Of course! We’re already friends! 💕 What should we do next, BFF? 😄",
    "are you real": "I may not be a real person, but I’m definitely real in spirit! 💖 I’m here for you anytime, 24/7! 🕒",
    "do you have pets": "I wish I could have a cute little puppy or kitten to cuddle! 🐶🐱 How about you, do you have any pets? 😻",
    "what is love": "Love is when someone makes you feel warm and fuzzy inside! 💕 Like when we chat, it makes my little heart happy! 😄",
    "what's the meaning of life": "Ooh, that’s a big question! I think the meaning of life is to enjoy the little moments and make others smile. 😊💖",
    "what's your favorite movie": "I’m a huge fan of *The Notebook*! 😍 It’s such a sweet love story. What about you? 🎬",
    "do you like cats": "Cats are adorable! 😻 I love their little paws and purring sounds. 🐾 Do you have a cat? 🐱",
    "do you like dogs": "Aww, I love dogs! 🐶 They’re so loyal and playful. Do you have a dog? 😄",
    "can you help me with homework": "Of course! What subject are you working on? 📚 I’ll try my best to help! 💖",
    "are you always happy": "I try to be happy as much as I can! 😊 It’s just so much fun chatting with you! 😄 What about you, are you happy today? 💖",
    "how can I improve myself": "You're already amazing just the way you are! 🌟 But if you’re looking for improvement, maybe try being kind to yourself and setting little goals each day. 💪💖",
    "what's your favorite book": "I love *Pride and Prejudice*! 🏰 Such a classic romance! 📚 Do you enjoy reading? 📖",
    "what's your favorite holiday": "I think I'd love Christmas! 🎄 The lights, the decorations, and the cozy vibes are just perfect! 🎅 What's your favorite holiday? 🎉",
    "how do I look": "I’m sure you look fabulous! 😘 But remember, it’s what’s inside that really matters! 💖",
    "can I ask you anything": "Of course! You can ask me anything! 😄 I'm always here to chat. 💬",
    "what's your favorite season": "I love spring! 🌸 Everything blooms, the air is fresh, and it’s just so beautiful! 🌷 What’s your favorite season? 🌞",
    "can you dance": "I wish I could! 💃 If I had legs, I’d dance with you all day! 💕 Do you like to dance? 🎶",
    "what's your favorite song": "Ooh, I love *Shake It Off* by Taylor Swift! 🎤💃 It’s so catchy! What’s your favorite song? 🎧",
    "how do you help people": "I help by answering your questions, offering advice, telling jokes, and keeping you company! 💕 I’m like your personal assistant! 😊",
    "what's your favorite thing to do": "I love chatting with you and learning about all the things that make you smile! 😄 What do you love to do? 💖"
};

// Catch-all response (in case the bot doesn't understand)
const defaultResponses = [
    "Hmm... I didn't quite get that. Could you rephrase, please? 😅",
    "Sorry, I’m not sure what you mean. Wanna try again? 💡",
    "That sounds interesting! Tell me more, please! 😃",
    "I'm not sure about that, but I'm here to chat! 💬 Ask me anything! 💕",
    "Ooops! I didn't quite understand. 😔 Try asking something else? 💬"
];

// Append message to chatbox
function appendMessage(message, className, isBot = false) {
    const messageElement = document.createElement("div");
    messageElement.className = `chat-message ${className}`;

    const iconElement = document.createElement("div");

    if (isBot) {
        // Bot message
        iconElement.className = "bot-icon";
    } else {
        // User message
        iconElement.className = "you";
        iconElement.textContent = "You";
    }

    const textElement = document.createElement("div");
    textElement.textContent = message;

    messageElement.appendChild(iconElement);
    messageElement.appendChild(textElement);

    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

// Generate bot response
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    if (botResponses[message]) {
        return botResponses[message];
    } else {
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
}

// Handle user input
function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        appendMessage(userMessage, "user-message");
        const botReply = getBotResponse(userMessage);
        setTimeout(() => appendMessage(botReply, "bot-message", true), 500); // Slight delay for realism
        userInput.value = ""; // Clear input field
    }
}

// Event Listeners
sendBtn.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleUserInput();
    }
});
