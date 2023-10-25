const currentTemp = document.querySelector('#current-temp');
const weatherHolder = document.querySelector('#weather-icon');
const weatherIcon = document.createElement('img');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=15.29&lon=120.03&appid=ce849aac9e4ca7eb729446e0c2683116&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C - `;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherHolder.appendChild(weatherIcon);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Current weather in Botolan, Zambales');
    weatherIcon.setAttribute('width', '50');
    weatherIcon.setAttribute('height', '50');
    captionDesc.textContent = `${desc}`;
}