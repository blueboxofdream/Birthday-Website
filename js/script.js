// Simple confetti animation using a canvas library
// You can replace this with a confetti library like canvas-confetti for better effects
window.onload = function () {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];

  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 100 + 10,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      tilt: Math.random() * 10 - 5,
      tiltAngle: 0,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((conf) => {
      ctx.beginPath();
      ctx.lineWidth = conf.r;
      ctx.strokeStyle = conf.color;
      ctx.moveTo(conf.x + conf.tilt, conf.y);
      ctx.lineTo(conf.x, conf.y + conf.tilt + conf.r);
      ctx.stroke();
    });
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    confetti.forEach((conf) => {
      conf.y += Math.cos(conf.d / 10) + 2;
      conf.x += Math.sin(conf.d / 10);
      conf.tiltAngle += 0.1;
      conf.tilt = Math.sin(conf.tiltAngle) * 15;

      if (conf.y > canvas.height) {
        conf.y = -10;
        conf.x = Math.random() * canvas.width;
      }
    });
  }

  const bgMusic = document.getElementById("bgMusic");

// iPhone initially requires audio to start muted
function enableAudio() {
  bgMusic.muted = false;
  bgMusic.play().catch(() => {});
  document.removeEventListener("touchstart", enableAudio);
  document.removeEventListener("click", enableAudio);
}

document.addEventListener("touchstart", enableAudio, { once: true });
document.addEventListener("click", enableAudio, { once: true });

  draw();
};
