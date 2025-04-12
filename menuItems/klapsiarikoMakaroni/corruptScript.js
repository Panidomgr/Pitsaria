setInterval(() => {
    const el = document.querySelector('.glitchShake');
    const tx = (Math.random() - 0.5) * 4;   // gentle jitter
    const ty = (Math.random() - 0.5) * 4;
    const rot = (Math.random() - 0.5) * 3;
    const scale = 1 + (Math.random() - 0.5) * 0.02; // very subtle scaling
    const skewX = (Math.random() - 0.5) * 3;
    const skewY = (Math.random() - 0.5) * 3;
  
    el.style.transform = `
      translate(${tx}px, ${ty}px)
      rotate(${rot}deg)
      scale(${scale})
      skew(${skewX}deg, ${skewY}deg)
    `;
  
    el.style.filter = `blur(${Math.random() * 0.5}px) hue-rotate(${Math.random() * 30}deg)`;
}, 120);
  
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const glitchChars = ['@', '#', '%', '&', '¢', '¥', '§', '¤'];

function corruptText(el) {
  let original = el.dataset.original || el.textContent;
  el.dataset.original = original;
  el.textContent = original.split('').map(char => {
    return Math.random() < 0.1 ? glitchChars[Math.floor(Math.random()*glitchChars.length)] : char;
  }).join('');
}

setInterval(() => {
  document.querySelectorAll('.glitchText').forEach(el => corruptText(el));
}, 500);
