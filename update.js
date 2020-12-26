var delay=10000/(Math.floor(200/10)*100);
var delayCount=0;


function div_update(div,height,color)
{
    window.setTimeout(function(){
        div.style.height = `${height}px`;
        div.style.backgroundColor = color;
    },delayCount+=delay);
}

