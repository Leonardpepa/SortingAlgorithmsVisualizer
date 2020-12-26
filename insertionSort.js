function Insertionsort()
{
    for(var j=0;j<divSize.length;j++)
    {
        var key= divSize[j];
        var i=j-1;
        while(i>=0 && divSize[i]>key)
        {
            divSize[i+1]=divSize[i];
            div_update(div[i],divSize[i],"red");
            div_update(div[i+1],divSize[i+1],"green");
            i-=1;
        }
        divSize[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(div[t],divSize[t],"green");
        }
    }
    div_update(div[j-1],divSize[j-1],"green");
}
