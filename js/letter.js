// Letter content
const letterText = `"তুমি আসবে বলেই আকাশ মেঘলা বৃষ্টি এখনো হয়নি তুমি আসবে বলেই কৃষ্ণচূড়ার ফুলগুলো ঝরে যায়নি"  

I am grateful for every silly joke, every late-night talk, and every smile we’ve shared.  
I promise to cherish you, support you, and love you endlessly.  
You are my forever. 💖`;

const signatureText = `With all my love,  
— Saimanti 💕`;

let i = 0;
const speed = 40; // typing speed (ms)
const letterElement = document.getElementById("letter-text");
const signatureElement = document.getElementById("signature");
const galleryBtn = document.getElementById("gallery-btn");

// Typewriter function
function typeWriter() {
  if (i < letterText.length) {
    letterElement.textContent += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Add signature after delay
    setTimeout(() => {
      signatureElement.innerHTML = signatureText.replace(/\n/g, "<br>");
      
      // Fade in gallery button
      galleryBtn.style.display = "inline-block";
      galleryBtn.style.opacity = 0;
      let fade = 0;
      const fadeIn = setInterval(() => {
        if (fade < 1) {
          fade += 0.05;
          galleryBtn.style.opacity = fade;
        } else {
          clearInterval(fadeIn);
        }
      }, 50);

    }, 800);
  }
}

// Start animation when page loads
window.onload = typeWriter;
