const baseURL = 'https://camillerubia.github.io/wdd230/';
const linksURL = 'https://camillerubia.github.io/wdd230/data/links.json';
const wrapper = document.querySelector('.card-list-wrapper');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data);
}

const displayLinks = (weeks) => {
    let activityList = document.createElement('ul');
    

    weeks.forEach((week) => {
        console.log(weeks);
        let list = document.createElement('li');
        let weekNum = document.createElement('span');

        weekNum.textContent = `${week.week}`;
        list.appendChild(weekNum);
                
        weeks.links.forEach((link) => {
            let activityLink = document.createElement('a');
            activityLink.textContent = `${links.title}`;
            activityLink.setAttribute('href', `${links.url}`);
            list.appendChild(activityLink);
        });

        activityList.appendChild(list);
    });

    wrapper.appendChild(activityList);
}

getLinks();