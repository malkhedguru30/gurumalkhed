const messages = ["Its your special day","And you are very special for universe", "Do you wanna see what I made for you??"];
    let currentMsg = 0;
    const msgBox = document.getElementById('msgBox');
    const msgconst=document.getElementById('msgconst');
    const msg = document.getElementById('msg');
    const btns = document.getElementById('btns');
    const lightsBtn = document.getElementById('lightsBtn');
    const countdownBtn = document.getElementById('countdownBtn');
    const finalBtn = document.getElementById('finalBtn');
    const countDisplay = document.getElementById('countDisplay');
    const hearts = document.getElementById('hearts');
   

    function showNextMessage() {
      currentMsg++;
      if (currentMsg < messages.length) {
        msg.innerText = messages[currentMsg];
        msgBox.style.animation = 'fadeIn 0.8s ease';
        if (currentMsg === 2) {
          btns.style.display = 'block';
        }
      }
    }

    setTimeout(showNextMessage, 2000);
    setTimeout(showNextMessage, 5000);

    function respondYes() {
      msg.innerText = "have look at it,Ananya🎀";
      btns.style.display = 'none';
      msgBox.style.animation = 'fadeIn 0.8s ease';
    

      setTimeout(() => {
        msgBox.remove();
        clearInterval(heartInterval);
        hearts.innerHTML = '';
        document.body.style.backgroundColor = 'black';
        lightsBtn.style.display = 'block';
      }, 2500);
    }

    function respondNo() {
      msg.innerText = "okay, maybe later ❤️";
    }

    function turnOnLights() {
  document.body.style.backgroundColor = 'white';
  lightsBtn.remove();
  countdownBtn.style.display = 'block';


  startFireworks();
  document.getElementById('goldLightLeft').style.display = 'block';
  document.getElementById('goldLightRight').style.display = 'block'
  countdownBtn.style.display= 'block';

}


    const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8F00FF", "#FF1493", "#00CED1", "#DAA520"];
    const inverseColors = ["#00FFFF", "#0080FF", "#0000FF", "#FF00FF", "#FFFF00", "#B7FF7A", "#70FF00", "#00ECAC", "#FF321E", "#255ADF"];
    let countdown = 10;

    function startCountdown() {
      countdownBtn.remove();
      countDisplay.style.display = 'block';
      const interval = setInterval(() => {
        if (countdown === 0) {
          clearInterval(interval);
          countDisplay.innerText = "Done!";
          finalBtn.style.display = 'block';
        } else {
          document.body.style.backgroundColor = inverseColors[10 - countdown];
          countDisplay.innerText = countdown;
          countDisplay.style.color = colors[10 - countdown];
          countdown--;
        }
      }, 1000);
    }

    function goToFinal() {
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = "2.html";
      }, 1000);
    }

    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.top = Math.random() * 100 + 'vh';
      const direction = Math.random() < 0.5 ? 'up' : 'down';
      const horizontalShift = (Math.random() - 0.5) * 100;
      heart.style.setProperty('--horizontalShift', `${horizontalShift}px`);
      heart.style.animation = `float-${direction} ${5 + Math.random() * 5}s linear infinite`;
      hearts.appendChild(heart);
      setTimeout(() => heart.remove(), 10000);
    }

    const heartInterval = setInterval(createHeart, 200);
    const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let fireworks = [];

function Firework() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height;
  this.targetY = Math.random() * (canvas.height / 2);
  this.radius = 2 + Math.random() * 2;
  this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  this.speed = 2 + Math.random() * 3;
}
Firework.prototype.update = function () {
  if (this.y > this.targetY) {
    this.y -= this.speed;
  } else {
    this.radius -= 0.1;
  }
};
Firework.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
};

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((f, i) => {
    f.update();
    f.draw();
    if (f.radius <= 0) fireworks.splice(i, 1);
  });
  requestAnimationFrame(animateFireworks);
}

function startFireworks() {
  document.getElementById("fireworksCanvas").style.display = 'block';
  setInterval(() => fireworks.push(new Firework()), 200);
  animateFireworks();
}

function stopFireworks() {
  document.getElementById("fireworksCanvas").style.display = 'none';
  fireworks = [];
}