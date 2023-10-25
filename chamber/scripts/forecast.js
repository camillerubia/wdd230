const source = 'https://api.openweathermap.org/data/2.5/forecast?lat=15.29&lon=120.03&appid=ce849aac9e4ca7eb729446e0c2683116&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(source);

        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayForecast(data){
    const date = new Date();
    let weatherContainer = document.querySelector('.weather-forecast');
    let currentDay= String(date.getDate()).padStart(2, '0');
    let tomDay= String(date.getDate()+1).padStart(2, '0');
    let dayAfterTom= String(date.getDate()+2).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
    let tomorrowDate = `${currentYear}-${currentMonth}-${tomDay}`;
    let dateAfterTom = `${currentYear}-${currentMonth}-${dayAfterTom}`;

    let dataList = data.list;
    let weatherData = [];

    for (i = 0; i < dataList.length; i++) {
        if(data.list[i].dt_txt.includes(currentDate)) {
            weatherData.push(data.list[i]);
            break;
        }
    }

    for (i = 0; i < dataList.length; i++) {
        if (data.list[i].dt_txt.includes(tomorrowDate)) {
            weatherData.push(data.list[i]);
            break;
        }
    }

    for (i = 0; i < dataList.length; i++) {
        if (data.list[i].dt_txt.includes(dateAfterTom)) {
            weatherData.push(data.list[i]);
            break;
        }
    }

    let weatherList = document.createElement('ul');

    for (j = 0; j < weatherData.length; j++) {
        let regex = /\s\d{2}:\d{2}:\d{2}$/;
        let dateForecast = weatherData[j].dt_txt;
        let convertDay = new Date(dateForecast);

        let options = { weekday: 'short', month: 'short', day: 'numeric' };

        let dayForecast = new Intl.DateTimeFormat('en-US', options).format(convertDay);

        let icon = `https://openweathermap.org/img/w/${weatherData[j].weather[0].icon}.png`;
        let temp = weatherData[j].main.temp;

        let weatherListData = document.createElement('li');
        let weatherIcon = document.createElement('img');
        let weatherDate = document.createElement('span');
        let weatherTemp = document.createElement('span');

        weatherIcon.setAttribute('src', icon);
        weatherIcon.setAttribute('alt', 'Weather in Botolan, Zambales');
       
        weatherDate.textContent = dayForecast;
        weatherTemp.innerHTML = `${Math.round(temp)}&deg;C`;

        weatherListData.appendChild(weatherDate);
        weatherListData.appendChild(weatherIcon);
        weatherListData.appendChild(weatherTemp);
        weatherList.append(weatherListData);
    }

    weatherContainer.appendChild(weatherList);
}