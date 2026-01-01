const TOTAL_DAYS = 365;
const START_DATE = new Date("2026-01-01");

const fullJar = document.getElementById("fullJar");
const emptyJar = document.getElementById("emptyJar");
const counter = document.getElementById("counter");

function daysPassed() {
  const today = new Date();
  if (today < START_DATE) return 0;

  const diff = today - START_DATE;
  return Math.min(
    Math.floor(diff / (1000 * 60 * 60 * 24)) + 1,
    TOTAL_DAYS
  );
}

function randomButtonImage() {
  const n = Math.floor(Math.random() * 20) + 1;
  return `assets/buttons/button${n}.png`;
}

function randomPosition() {
  return {
    x: Math.random() * 190,
    y: Math.random() * 160
  };
}

function createButton() {
  const img = document.createElement("img");
  img.src = randomButtonImage();
  img.className = "button";

  const { x, y } = randomPosition();
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  const scale = 0.9 + Math.random() * 0.25;
  const rotate = Math.random() * 30 - 15;
  img.style.transform = `scale(${scale}) rotate(${rotate}deg)`;

  return img;
}

function renderJar(container, count) {
  container.innerHTML = "";
  for (let i = 0; i < count; i++) {
    container.appendChild(createButton());
  }
}

function render() {
  const passed = daysPassed();

  renderJar(fullJar, TOTAL_DAYS - passed);
  renderJar(emptyJar, passed);

  counter.textContent =
    `${passed} days passed • ${TOTAL_DAYS - passed} days remaining`;
}

render();
