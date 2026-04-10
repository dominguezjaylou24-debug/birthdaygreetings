// Function to create infinite confetti loop
function createInfiniteConfetti() {
  const confettiEmojis = ["🎊", "🎉", "🎈", "🎁", "✨", "⭐"];
  const container = document.body;

  // Create new confetti elements continuously
  setInterval(() => {
    const confetti = document.createElement("div");
    confetti.classList.add("infinite-confetti");
    confetti.textContent =
      confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];

    // Random starting position
    const startX = Math.random() * window.innerWidth;
    const randomDelay = Math.random() * 2;
    const randomDuration = 3 + Math.random() * 3;
    const randomSize = 20 + Math.random() * 30;
    const randomEmoji =
      confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];

    confetti.textContent = randomEmoji;
    confetti.style.left = startX + "px";
    confetti.style.top = "-50px";
    confetti.style.fontSize = randomSize + "px";
    confetti.style.position = "absolute";
    confetti.style.zIndex = "1000";
    confetti.style.animation = `infiniteFall ${randomDuration}s linear ${randomDelay}s infinite`;
    confetti.style.pointerEvents = "none";

    container.appendChild(confetti);

    // Remove confetti after animation to prevent memory leak
    setTimeout(
      () => {
        confetti.remove();
      },
      (randomDuration + randomDelay) * 1000,
    );
  }, 200); // Create new confetti every 200ms
}

// Add infinite confetti animation keyframes
const style = document.createElement("style");
style.textContent = `
  @keyframes infiniteFall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Start the infinite confetti when page loads
window.onload = createInfiniteConfetti;
