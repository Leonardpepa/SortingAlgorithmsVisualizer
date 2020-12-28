const column = document.querySelector(".columnContainer");
const generate = document.getElementById("generate");
const bblsortButton = document.getElementById("bblsort");
const qsortbtn = document.getElementById("quicksort");
const selectionsortbtn = document.getElementById("selectionsort");
const insertion = document.getElementById("insertion");
const enableBtn = document.querySelector(".enable-btn");

let sorting = false;

let array = [];
let div = [];
let divSize = [];

for (let i = 0; i < 100; i++) {
  div[i] = document.createElement("div");
  div[i].setAttribute("class", "columns");
  column.appendChild(div[i]);
}
for (let i = 0; i < 100; i++) {
  divSize[i] = Math.floor(Math.random() * 500) + 5;
  div[i].style.height = `${divSize[i]}px`;
  div[i].style.backgroundColor = "blue";
}

generate.addEventListener("click", () => {
  for (let i = 0; i < 100; i++) {
    divSize[i] = Math.floor(Math.random() * 500) + 5;
    div[i].style.height = `${divSize[i]}px`;
    div[i].style.backgroundColor = "blue";
    sorting = false;
    div[i].style.transition = "all 1s linear";
  }
  setTimeout(() => {
    for (let i = 0; i < 100; i++) {
      div[i].style.transition = "none";
    }
  }, 1000);
});

bblsortButton.addEventListener("click", () => {
  delayCount = 0;
  sorting = bbsort(div, divSize);
  disableButtons();
});

qsortbtn.addEventListener("click", () => {
  delayCount = 0;
  sorting = quicksort(div, divSize, 0, divSize.length - 1);
  disableButtons();
});

selectionsortbtn.addEventListener("click", () => {
  delayCount = 0;
  sorting = selectionsort(div, divSize);
  disableButtons();
});

insertion.addEventListener("click", () => {
  delayCount = 0;
  sorting = Insertionsort();
  disableButtons();
});

enableBtn.addEventListener("click", () => {
  enableButtons();
});

const disableButtons = () => {
  bblsortButton.disabled = true;
  bblsortButton.className = "disabled";

  generate.disabled = true;
  generate.className = "disabled";

  qsortbtn.disabled = true;
  qsortbtn.className = "disabled";

  selectionsortbtn.disabled = true;
  selectionsortbtn.className = "disabled";

  insertion.disabled = true;
  insertion.className = "disabled";
};

function enableButtons() {
  bblsortButton.disabled = false;
  generate.disabled = false;
  qsortbtn.disabled = false;
  selectionsortbtn.disabled = false;
  insertion.disabled = false;

  bblsortButton.className = "btn";
  generate.className = "btn";
  qsortbtn.className = "btn";
  selectionsortbtn.className = "btn";
  insertion.className = "btn";
}
