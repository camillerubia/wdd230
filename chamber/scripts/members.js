const gridDisplay = document.querySelector('.grid-display');
const memberLink = 'https://camillerubia.github.io/wdd230/chamber/data/members.json';

async function getMemberData() {
    const response = await fetch(memberLink);
    const data = await response.json();
    displayMembers(data.members);
};

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let number = document.createElement('p');
        let website = document.createElement('a');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        number.textContent = `${member.phoneNumber}`;
        website.textContent = `${member.url}`;

        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `Company logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '250');
        logo.setAttribute('height', '250');

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(number);
        gridDisplay.appendChild(card);
    });
}

getMemberData();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
	// example using arrow function
	gridDisplay.classList.add("grid");
	gridDisplay.classList.remove("list");
});

listButton.addEventListener("click", showList); 

function showList() {
	gridDisplay.classList.add("list");
	gridDisplay.classList.remove("grid");
}