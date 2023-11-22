let interval;
const randomColor=function()
{
const hex="0123456789ABCDEF"
let color="#"


for(i=0;i<6;i++)
{

    color+=hex[Math.floor(Math.random()*16)];

} 
return color;
}

const startchangingcolor=function()
{
    if(!interval)
    {
    interval=setInterval(set,1000);
    }
    function set()
    {
    document.body.style.backgroundColor=randomColor();
    }

}

const stopchangingcolor=function(){
    
    {
        clearInterval(interval)
        interval=null;
    }
}


document.querySelector("#start").addEventListener('click',startchangingcolor)

document.querySelector("#stop").addEventListener('click',stopchangingcolor)