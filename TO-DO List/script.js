const input=document.getElementById("input")
const list_container=document.getElementById("list-container")
btn.addEventListener('click',()=>{
    if(input.value==""){
        alert("Please write something")
    }
    else{
       const li=document.createElement("li")
       li.innerHTML=input.value
       list_container.appendChild(li)

       const span=document.createElement("span")
       span.innerHTML="\u00d7"
      
       li.appendChild(span)

      
     

    }
    input.value=""
    save()

    list_container.addEventListener("click",function(e)
    {
      
  
        if(e.target.tagName==="LI")
        {
           
            e.target.classList.toggle("checked")
            save()
        }
        else if(e.target.tagName==="SPAN")
        {
            e.target.parentElement.remove()
            save()
        }
    },false)
   
})

function save()

{
    localStorage.setItem("data",list_container.innerHTML)
}

function show()
{
    list_container.innerHTML=localStorage.getItem("data")
}
show()
