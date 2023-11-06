


var clock=document.querySelector(".clock")


setInterval(function(){
    var time=new Date().toLocaleTimeString()
    clock.innerHTML=time
},1000)