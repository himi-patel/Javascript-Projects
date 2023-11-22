// const set=setInterval(function(){
//     console.log("himi",Date())
// },1000)

let set;


document.querySelector("#start").addEventListener("click",function(){

     set=setInterval(function(){
        console.log("himi",Date())
    },1000)
    
    
})
document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(set);
})


// clearInterval(set)