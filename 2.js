
  const balloonColors = ['#ff4d4d', '#ffcc00', '#66ccff', '#cc66ff', '#66ff99', '#ff66b3'];
  const container = document.getElementById('balloons-container');

  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.backgroundColor = color;

    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = 5 + Math.random() * 5 + 's';
    balloon.style.animationDelay = Math.random() * 3 + 's';

    container.appendChild(balloon);

    setTimeout(() => {
      container.removeChild(balloon);
    }, 10000); // Remove balloon after float
  }

  setInterval(createBalloon, 500);

  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('twinkle');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.opacity = Math.random();
    star.style.zIndex = 0;
    document.body.appendChild(star);
  }
 
    const sound = document.getElementById("burstSound");
    function launchRedConfetti() {
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }
      confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0, y: 0.6 }, colors: ['#ff0000'] });
      confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors: ['#ff0000'] });
    }
    setInterval(launchRedConfetti, 5000);
