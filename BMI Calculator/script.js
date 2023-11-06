const form=document.querySelector("form")

form.addEventListener('submit',function(e)
{
    e.preventDefault()
const height=parseInt(document.querySelector("#height").value)
const weight=parseInt(document.querySelector("#weight").value)
const results=document.querySelector("#results")

if(height==="" || height<0||isNaN(height))
{
    results.innerHTML=`invalid height ${height}`
}
else if(weight=="" || weight<0||isNaN(weight))
{
    results.innerHTML=`invalid weight ${weight}`
}
else 
{
const bmi=(weight/(height*height/1000)).toFixed(2)

if(bmi<18.6)
{
    var guide="under weight";
}
else if(bmi>18.6 && bmi<24.9)
{
    var guide="normal weight";
}
else
{
    var guide="over weight"
}
results.innerHTML=`<span>${bmi}  ${guide} </span>`


}
})