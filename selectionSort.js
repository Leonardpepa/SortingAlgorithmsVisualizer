function selectionsort(div,divSize){
    for(let i=0; i<divSize.length-1; i++){
      let minIndex = i;
      div_update(div[i+1],divSize[i+1],"red")
      for(let  j=i+1; j<divSize.length; j++) {
        if(divSize[j] < divSize[minIndex]) {
          minIndex = j;
          div_update(div[j],divSize[j],"red")
          div_update(div[i+1],divSize[i+1],"red")
        }
      }
      let temp = divSize[i];
              divSize[i] = divSize[minIndex];
        divSize[minIndex] = temp;
        div_update(div[i],divSize[i],"green");
    }
    div_update(div[div.length - 1],divSize[divSize.length - 1],"green");
  }