const form = document.querySelector('.needs-validation');
form.addEventListener('submit', e => {
  updateWeather();
	e.preventDefault();
	e.stopPropagation();
})

const updateWeather = () => {
  const city = document.querySelector('input').value;
  const key = 'de1f30a058144676a7f0900af40ebf1b';

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)  
  .then(resp => resp.json()) // Convert data to json
  .then(function(data) {
      drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}
function drawWeather(data) {
  const weatherIcon = data.weather[0].icon;
  let icon = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
  //const description = data.weather[0].description;
  const celcius = Math.round(parseFloat(data.main.temp)-273.15);

  const body = document.querySelector('body');

  if (weatherIcon.indexOf('d') === 2) {
    body.classList.remove('bg-dark');
    body.classList.add('bg-primary');
  } else {
    body.classList.remove('bg-primary');
    body.classList.add('bg-dark');
  }

  document.querySelector('#weatherIcon').setAttribute('src', icon);
  document.querySelector('#weatherDescription').innerHTML = `&deg; ${celcius}`;
  //document.querySelector('#weatherDegree').innerHTML = description;

}

updateWeather();