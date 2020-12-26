function quicksort(div,divSize,start,end){
    if(start < end){
      let index = partiton(div,divSize,start,end);
      quicksort(div,divSize,start,index-1);
      quicksort(div,divSize,index+1,end); 
    }
    return true;
  }
  
  function partiton(div,divSize,start,pivot){
    let indexpiv=start;
              for(let i=start; i<pivot; i++) {
                  
                  if(divSize[i] < divSize[pivot]) {
            let temp = divSize[i];
            divSize[i] = divSize[indexpiv];
            divSize[indexpiv] = temp;
            div_update(div[i],divSize[i],"red");
            div_update(div[indexpiv],divSize[indexpiv],"green");
                      indexpiv++;
          }
              }
        let temp = divSize[pivot];
        divSize[pivot] = divSize[indexpiv];
        divSize[indexpiv] = temp;
        div_update(div[pivot],divSize[pivot],"green");
        div_update(div[indexpiv],divSize[indexpiv],"green");
              return indexpiv;
  }