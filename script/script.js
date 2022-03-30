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

  } catch(err) {
   console.log(err)
  }
};