const spotlightInfo = 'https://camillerubia.github.io/wdd230/chamber/data/spotlight.json';

async function getMemberData() {
    const response = await fetch(spotlightInfo);
    const data = await response.json();
    displayRandomAds(data.eliteMembers);
}

let haveIt = [];

function displayRandomAds(members) {
    const adContainer = document.querySelector('.ad-wrapper');
    for(i = 0; i < 2; i++){
        randomIndex = generateUniqueRandom(members.length - 1);

        let adList = document.createElement('div');
        let companyName = document.createElement('h3');
        let companyAds = document.createElement('p');

        adList.setAttribute('class', 'adinfo');

        companyName.textContent = `${members[randomIndex].company}`;
        companyAds.textContent = `${members[randomIndex].advertisement}`;

        adList.appendChild(companyName);
        adList.appendChild(companyAds);

        adContainer.appendChild(adList);
    }

}

function generateUniqueRandom(maxNr) {
    let random = (Math.random() * maxNr).toFixed();

    random = Number(random);

    if (!haveIt.includes(random)) {
        haveIt.push(random);
        return random;
    } else {
        if(haveIt.length < maxNr) {
            return  generateUniqueRandom(maxNr);
        } else {
            return false;
        }
    }
}

getMemberData();