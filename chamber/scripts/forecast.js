// const currentTemp = document.querySelector('#current-temp');
// const weatherHolder = document.querySelector('#weather-icon');
// const weatherIcon = document.createElement('img');
// const captionDesc = document.querySelector('figcaption');

const source = 'https://api.openweathermap.org/data/2.5/forecast?lat=15.29&lon=120.03&appid=ce849aac9e4ca7eb729446e0c2683116&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(source);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

// function displayResults(data) {
//     currentTemp.innerHTML = `${(data.main.temp - 273.15).toFixed(2)}&deg;C - `;
//     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     let desc = data.weather[0].description;
//     weatherHolder.appendChild(weatherIcon);
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', 'Current weather in Botolan, Zambales');
//     captionDesc.textContent = `${desc}`;
// }