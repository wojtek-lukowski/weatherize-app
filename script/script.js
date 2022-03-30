const key = config.API_KEY;

navigator.geolocation.getCurrentPosition(success);

function success (pos) {
  const crd = pos.coords;
  console.log('current position: ', crd.latitude, crd.longitude);
  getWeather(crd.latitude, crd.longitude);
};

async function getWeather(lat, lng) {
  try {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`;
    const data = await (await fetch(api)).json();
    console.log(data);
    console.log(data.name);
    console.log(data.sys.country);
    console.log(data.main.temp - 273.15);

    const tempData = (data.main.temp - 273.15).toFixed(1);

    const location = document.getElementById('location');
    const temp = document.getElementById('temperature');
    const sky = document.getElementById('sky');
    location.innerHTML = `${data.name}, ${data.sys.country}`;
    temp.innerHTML = `${tempData} C°`;
    sky.innerHTML = data.weather[0].main;

  } catch(err) {
   console.log(err)
  }
};