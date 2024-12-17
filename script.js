console.log('Hello!');
// Question 1- Choose a season and display typical weather
const season = document.getElementById('season');
const displayWeatherBtn = document.getElementById('displayWeatherBtn');
const showWeather = document.getElementById('showWeather');
displayWeatherBtn.addEventListener('click', () => {
  const seasonValue = season.value;
  const typical = {
    Spring: 'It is good',
    Summer: 'It is not that bad',
    Winter: 'It is bad',
    Rainy: 'It is so so',
  };
  showWeather.textContent = `Typical weather: ${typical[seasonValue]}`;
});

// Question 2- Choose a Planet and display fact
const Planet = document.getElementById('Planet');
const displayPlanetFactBtn = document.getElementById('displayPlanetFactBtn');
const showPlanetFact = document.getElementById('showPlanetFact');
displayPlanetFactBtn.addEventListener('click', () => {
  const PlanetValue = Planet.value;
  const FunFact = {
    Earth: 'It has only life',
    Mars: 'It has red color',
    Jupiter: 'It is too big',
  };
  showPlanetFact.textContent = `Planet Fact: ${FunFact[PlanetValue]}`;
});
