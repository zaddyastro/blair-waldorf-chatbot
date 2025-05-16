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
  "You’re nobody until you’re talked about.",
  "Destiny is for losers. It’s just a stupid excuse to wait for things to happen instead of making them happen.",
  "Whoever said money doesn’t buy happiness didn’t know where to shop.",
  "You can't make people love you, but you can make them fear you.",
  "The worst thing you can do is think that you’re not good enough.",
  "You need to stop thinking about what everyone wants from you and start thinking about what you want from yourself.",
  "You never really know who your friends are until things get really serious.",
  "I’m not a stop along the way. I’m a destination.",
  "Revenge is sweet and not fattening.",
  "You know I love a good plan, but sometimes you just have to throw caution to the wind.",
  "I’m not a backup plan, and definitely not your second choice.",
  "Being bold is better than being boring.",
  "If you really want something, you don’t stop for anyone or anything until you get it."
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
