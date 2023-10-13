const gridDisplay = document.querySelector('.grid-display');

async function getMemberData() {
    const response = await fetch(members.json);
    const data = await response.json();
    console.table(data.members);
}

getMembersData();