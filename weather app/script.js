const url =
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=`+city.value;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f57328bccmshf73f326fb340977p134390jsn0dcbf53f9a14",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function weather(city) {

	
	Cityname.innerHTML=city

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);



	
    temp.innerHTML = result.temp;
	temp_1.innerHTML=result.temp;
    cloud_pct.innerHTML = result.cloud_pct;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity_1.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed_1.innerHTML = result.wind_speed;
   
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
  } catch (error) {
    console.error(error);
  }
}





submit.addEventListener('click',(e)=>
{
e.preventDefault()
weather(city.value)

	
})




