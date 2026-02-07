const rules = [
  {
    name: "Rule 1: Opacity and Time",
    links: [
      { file: "link1.html", title: "Rise and Shine" },
      { file: "link2.html", title: "Play Time" },
      { file: "link3.html", title: "Slow Disco" },
      { file: "link4.html", title: "Blade Runner" }
    ]
  },
  {
    name: "Rule 2: Perspective and Transformation",
    links: [
      { file: "link5.html", title: "Book Stack" },
      { file: "link6.html", title: "Tornado" },
      { file: "link7.html", title: "Stairs" },
      { file: "link8.html", title: "The Shining" }
    ]
  },
  {
    name: "Rule 3: Weight and Size",
    links: [
      { file: "link9.html", title: "Pay Attention" },
      { file: "link10.html", title: "Loosing Attention" },
      { file: "link11.html", title: "Loud and Clear" },
      { file: "link12.html", title: "X-Men" }
    ]
  },
  {
    name: "Rule 4: Movement",
    links: [
      { file: "link13.html", title: "Morning News" },
      { file: "link14.html", title: "Daydream" },
      { file: "link15.html", title: "Wiggle Room" },
      { file: "link16.html", title: "Star Wars" }
    ]
  },
  {
    name: "Rule 5: Alignment and Spacing",
    links: [
      { file: "link17.html", title: "Cutting Corners" },
      { file: "link18.html", title: "Brat-y" },
      { file: "link19.html", title: "Vertigo" },
      { file: "link20.html", title: "The Matrix" }
    ]
  }
];


let currentRule = 0;
let currentLink = 0;

const ruleLabel = document.getElementById("ruleLabel");
const linkLabel = document.getElementById("linkLabel");
const frame = document.getElementById("contentFrame");

function updateView() {
  const current = rules[currentRule].links[currentLink];

  ruleLabel.textContent = rules[currentRule].name;
  linkLabel.textContent = current.title;
  frame.src = current.file;
}

document.getElementById("nextRule").onclick = () => {
  currentRule = (currentRule + 1) % rules.length;
  currentLink = 0;
  updateView();
};

document.getElementById("prevRule").onclick = () => {
  currentRule = (currentRule - 1 + rules.length) % rules.length;
  currentLink = 0;
  updateView();
};

document.getElementById("nextLink").onclick = () => {
  currentLink = (currentLink + 1) % rules[currentRule].links.length;
  updateView();
};

document.getElementById("prevLink").onclick = () => {
  currentLink =
    (currentLink - 1 + rules[currentRule].links.length) %
    rules[currentRule].links.length;
  updateView();
};

updateView();

const modal = document.getElementById("modal");
const aboutBtn = document.getElementById("aboutBtn");
const closeModal = document.getElementById("closeModal");

aboutBtn.onclick = () => {
  modal.style.display = "flex";
};

closeModal.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
