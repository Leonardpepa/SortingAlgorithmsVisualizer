
function bbsort(div,divSize){
    for(var i=0 ; i<divSize.length-1; i++){
        for(var j=0; j<divSize.length-1-i; j++){
  
            if(divSize[j] > divSize[j+1]){
                let temp = divSize[j];
                divSize[j] = divSize[j+1];
                divSize[j+1] = temp;
                div_update(div[j],divSize[j],"blue");
                div_update(div[j+1], divSize[j+1],"red");
  
            }
            div_update(div[j],divSize[j],"blue");
        }
        div_update(div[j],divSize[j+1],"green");
    }
    div_update(div[0],divSize[0],"green");
    return true;
  };