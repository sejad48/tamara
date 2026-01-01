const TOTAL_DAYS = 365;
const START_DATE = new Date("2026-01-01");

const fullJar = document.getElementById("fullJar");
const emptyJar = document.getElementById("emptyJar");
const counter = document.getElementById("counter");

// Calculate how many days have passed
function daysPassed() {
  const today = new Date();
  if (today < START_DATE) return 0;

  const diff = today - START_DATE;
  return Math.min(
    Math.floor(diff / (1000 * 60 * 60 * 24)) + 1,
    TOTAL_DAYS
  );
}

// Render jars
function render() {
  const passed = daysPassed();

  fullJar.innerHTML = "";
  emptyJar.innerHTML = "";

  for (let i = 0; i < TOTAL_DAYS - passed; i++) {
    fullJar.appendChild(createButton());
  }

  for (let i = 0; i < passed; i++) {
    emptyJar.appendChild(createButton());
  }

  counter.textContent = `${passed} days passed • ${TOTAL_DAYS - passed} days remaining`;
}

function createButton() {
  const div = document.createElement("div");
  div.className = "button-day";
  return div;
}

render();
