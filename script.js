
    const heartsContainer = document.getElementById("hearts");
    const messageEl = document.getElementById("message");
    const buttonsEl = document.getElementById("buttons");
    const finalEl = document.getElementById("final");
    const messageBox = document.getElementById("messageBox");
    const topBtn = document.getElementById("topButton");
    const birthdayText = document.getElementById("birthdayText");
    const countdownEl = document.getElementById("countdownDisplay");
    const fireworksCanvas = document.getElementById("fireworksCanvas");

    let step = 0;
    let phase = 0;
    const messages = [
      "It's your spl day",
      "u are very spl",
      "do u wanna see what i made??"
    ];

    function createHeart() {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 5 + Math.random() * 5 + "s";
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 10000);
    }

    let heartInterval = setInterval(createHeart, 200);

    function showNextMessage() {
      if (step < messages.length) {
        messageEl.innerText = messages[step];
        step++;
        if (step === messages.length) {
          buttonsEl.style.display = 'block';
        } else {
          setTimeout(showNextMessage, 2500);
        }
      }
    }

    setTimeout(showNextMessage, 2500);

    function showFinalMessage() {
      finalEl.textContent = "have look at it, madam jii 💝";
      setTimeout(() => {
        messageBox.remove();
        heartsContainer.remove();
        clearInterval(heartInterval);
        document.body.style.backgroundColor = "#000";
        topBtn.innerText = "💡 Lights On";
        topBtn.style.display = "block";
        phase = 1;
      }, 2000);
    }

    function handleTopButton() {
      if (phase === 1) {
        document.body.style.backgroundColor = "#ffffff";
        topBtn.innerText = "⏳ Start Countdown";
        phase = 2;
      } else if (phase === 2) {
        topBtn.style.display = "none";
        startCountdown();
      } else if (phase === 3) {
        topBtn.remove();
        setInterval(flyBalloon, 400);
      }
    }

    function startCountdown() {
      let count = 10;
      const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "cyan", "gold"];
      const backgroundColor=["white","purple","grey","brown","white","beige","yellow","black","silver","green"]
      const countdownInterval = setInterval(() => {
        countdownEl.style.color = colors[10 - count];
        countdownEl.style.backgroundColor=colors[10 - count];
        countdownEl.innerText = count;
        count--;
        if (count < 0) {
          clearInterval(countdownInterval);
          countdownEl.innerText = "";
          triggerFireworks();
          birthdayText.style.display = "block";
          topBtn.innerText = "🎈 Fly the Balloons";
          topBtn.style.display = "block";
          phase = 3;
        }
      }, 1000);
    }

   
    
  