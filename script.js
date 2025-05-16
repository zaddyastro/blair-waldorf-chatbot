const askBtn = document.getElementById('askBtn');
const userQuestion = document.getElementById('userQuestion');
const blairResponse = document.getElementById('blairResponse');

const responses = [
  "I'm Blair Waldorf. I always know best.",
  "You really think you can challenge me?",
  "Peasants like you should listen more.",
  "That's so fetch!",
  "Gossip Girl never sleeps... and neither do I.",
  "Power is knowing what you want and going after it.",
  "Don't make me use my Blair stare.",
  "Queen B always wins.",
];
const blastButton = document.getElementById('askBtn');
const clickSound = document.getElementById('clickSound');

blastButton.addEventListener('click', () => {
  clickSound.currentTime = 0;  // reset sound to start
  clickSound.play();

});

askBtn.addEventListener('click', () => {
  let question = userQuestion.value.trim();
  if (!question) {
    blairResponse.textContent = "Speak up, peasant!";
    return;
  }

  blairResponse.textContent = "💬 Thinking...";
  askBtn.disabled = true;

  // Simulate thinking delay
  setTimeout(() => {
    // Random response
    let reply = responses[Math.floor(Math.random() * responses.length)];
    blairResponse.textContent = reply;
    askBtn.disabled = false;
  }, 1500);
});
