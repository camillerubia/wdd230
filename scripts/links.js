const baseURL = 'https://camillerubia.github.io/wdd230/';
const linksURL = 'https://camillerubia.github.io/wdd230/data/links.json';
const wrapper = document.querySelector('.card-list-wrapper');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    let activityList = document.createElement('ul');

    weeks.forEach((week) => {
        let list = document.createElement('li');
        let weekNum = document.createElement('span');
        weekNum.textContent = `${week.week}: `;
        list.appendChild(weekNum);

        week.links.forEach((link,index) => {
            let activityLink = document.createElement('a');
            
            if (index !== week.links.length - 1) {
                activityLink.textContent = ` ${link.title} |`;
            } else {
                activityLink.textContent = ` ${link.title}`;
            }

            activityLink.setAttribute('href', `${link.url}`);
            list.appendChild(activityLink);
        });

        activityList.appendChild(list);
    });

    wrapper.appendChild(activityList);
}

getLinks();