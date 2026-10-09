const eventDate = new Date('2026-12-06T16:00:00-06:00');

const els = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
};

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const diff = Math.max(0, eventDate - now);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  els.days.textContent = days;
  els.hours.textContent = pad(hours);
  els.minutes.textContent = pad(minutes);
  els.seconds.textContent = pad(seconds);
}

function createFallingStrawberries() {
  const layer = document.querySelector('.falling-strawberries');
  if (!layer) return;

  const berries = [
    { x: 5, size: 24, duration: 12, delay: -1, drift: 26 },
    { x: 13, size: 18, duration: 16, delay: -9, drift: -18 },
    { x: 22, size: 28, duration: 14, delay: -5, drift: 22 },
    { x: 31, size: 20, duration: 18, delay: -12, drift: -24 },
    { x: 41, size: 25, duration: 13, delay: -7, drift: 18 },
    { x: 51, size: 17, duration: 17, delay: -3, drift: -20 },
    { x: 60, size: 27, duration: 15, delay: -10, drift: 24 },
    { x: 69, size: 19, duration: 19, delay: -4, drift: -18 },
    { x: 77, size: 23, duration: 13.5, delay: -8, drift: 20 },
    { x: 84, size: 18, duration: 18.5, delay: -14, drift: -22 },
    { x: 91, size: 26, duration: 16.5, delay: -6, drift: 16 },
    { x: 97, size: 20, duration: 20, delay: -15, drift: -26 },
  ];

  layer.innerHTML = '';
  berries.forEach((berry) => {
    const span = document.createElement('span');
    span.className = 'falling-strawberry';
    span.textContent = '🍓';
    span.style.left = `${berry.x}%`;
    span.style.fontSize = `${berry.size}px`;
    span.style.setProperty('--fall-duration', `${berry.duration}s`);
    span.style.setProperty('--fall-delay', `${berry.delay}s`);
    span.style.setProperty('--drift', `${berry.drift}px`);
    layer.appendChild(span);
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);
createFallingStrawberries();
