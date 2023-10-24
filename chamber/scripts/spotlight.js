const spotlightInfo = 'https://camillerubia.github.io/wdd230/chamber/data/spotlight.json';

async function getMemberData() {
    const response = await fetch(spotlightInfo);
    const data = await response.json();
    console.log(data);
    // displayRandomAds(data.elite-members);
}

function displayRandomAds(members) {
    
}

getMemberData();