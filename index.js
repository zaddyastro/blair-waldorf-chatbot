const meetBlairBtn = document.getElementById('meetBlairBtn');
const introAudio = document.getElementById('introAudio');
const loadingScreen = document.getElementById('loadingScreen');

meetBlairBtn.addEventListener('click', () => {
  // Show loading screen and disable button
  loadingScreen.classList.remove('hidden');
  meetBlairBtn.disabled = true;

  // Play audio and after it ends, redirect
  introAudio.play().then(() => {
    introAudio.addEventListener('ended', () => {
      window.location.href = 'askqueenb.html';
    }, { once: true });
  }).catch((error) => {
    console.log('Audio play error:', error);
    // If audio fails to play, redirect immediately as fallback
    window.location.href = 'askqueenb.html';
  });
});
