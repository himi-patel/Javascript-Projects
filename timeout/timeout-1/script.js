// setTimeout(function(){
// console.log("himi")
// },2000)//after 2sec it will work.

const changetxt=function change()
{
    document.querySelector("h1").innerHTML="HEY THERE!!"
}
const stop=setTimeout(changetxt,2000)

document.querySelector("#stop").addEventListener('click',function()
{
clearTimeout(stop)
})