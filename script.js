const TOTAL_DAYS = 365;
const START_DATE = new Date("2026-01-01");

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

function randomPosition() {
  return {
    x: 40 + Math.random() * 120,
    y: 70 + Math.random() * 180
  };
}

function createSvgButton(x, y, color) {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );

  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", 6);
  circle.setAttribute("fill", color);

  return circle;
}

function renderJar(groupId, count, color) {
  const group = document.getElementById(groupId);
  group.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const { x, y } = randomPosition();
    group.appendChild(createSvgButton(x, y, color));
  }
}

function render() {
  const passed = daysPassed();

  renderJar("fullJarButtons", TOTAL_DAYS - passed, "#444");
  renderJar("emptyJarButtons", passed, "#aaa");

  counter.textContent = `${passed} days passed • ${TOTAL_DAYS - passed} days remaining`;
}

render();
