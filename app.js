

const column = document.querySelector(".columnContainer");
const generate = document.getElementById("generate");
const bblsortButton  = document.getElementById("bblsort");
const qsortbtn = document.getElementById("quicksort");
const selectionsortbtn = document.getElementById("selectionsort");
const insertion = document.getElementById("insertion");

let sorted = false;

let array = [];
let div = [];
let divSize = [];






for(let i=0; i<100; i++){
  div[i] = document.createElement("div");
  div[i].setAttribute("class", "columns");
  column.appendChild(div[i]);  
}
for(let i=0; i<100; i++){
  divSize[i] = Math.floor(Math.random() * 500) + 5;
   div[i].style.height = `${divSize[i]}px`; 
   div[i].style.backgroundColor = "blue"; 
  }

generate.addEventListener("click", () => {
  for(let i=0; i<100; i++){
    divSize[i] = Math.floor(Math.random() * 500) + 5;
     div[i].style.height = `${divSize[i]}px`; 
     div[i].style.backgroundColor = "blue"; 
  } 
});
 

    bblsortButton.addEventListener("click", ()=> {  
      delayCount = 0;
      bbsort(div,divSize);
    });

    qsortbtn.addEventListener("click", ()=> {
      delayCount = 0;
      quicksort(div,divSize,0,divSize.length-1);
    });

    selectionsortbtn.addEventListener("click", () => {
      delayCount = 0;
      selectionsort(div,divSize);
    });

    insertion.addEventListener("click", () => {
      delayCount = 0;
      Insertionsort();
    });
    
    
    
    
    
    // const disableButtons = ()=> {
    //   bblsortButton.disabled = true;
    //   generate.disabled = true;
    //   qsortbtn.disabled = true;
    //   selectionsortbtn.disabled = true;
    //   insertion.disabled = true;
    // };
    
    // function enableButtons(){
    //   bblsortButton.disabled = false;
    //   generate.disabled = false;
    //   qsortbtn.disabled = false;
    //   selectionsortbtn.disabled = false;
    //   insertion.disabled = false;
    // }