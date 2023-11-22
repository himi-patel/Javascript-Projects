let arr=["blue","green","red","pink","purple","brown","aqua"]
      let set;


document.querySelector("#start").addEventListener('click',function()
{
    let i=0;
    set= setInterval(function()
     {
    
         document.body.style.backgroundColor=arr[i];
         i++;
         if(i==7)
         {
            i=0;
         }
     },1000)
   
})
document.querySelector("#stop").addEventListener('click',function()
{
    clearInterval(set);
})

document.querySelector("#clear").addEventListener('click',function()
{
    document.body.style.backgroundColor="white"
})