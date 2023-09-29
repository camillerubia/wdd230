const visitsDisplay = document.querySelector(".visits");
const theDateToday = new Date();
const msToDays = 84600000;
let pageVisits = Number(window.localStorage.getItem("pageVisits-ls")) || 0;

localStorage.setItem("visitDate", theDateToday.toISOString());
let storedVisitDate = new Date(localStorage.getItem("visitDate"));

if (theDateToday.getTime() == storedVisitDate.getTime() && pageVisits !== 0) {
	visitsDisplay.textContent = `Back so soon! Awesome! 🎉`;
} else if (pageVisits == 0) {
    visitsDisplay.textContent = `Welcome! 🥳 Let us know if you have any questions`;
} else {
	let daysleft = (storedVisitDate.getTime() - Date.now()) / msToDays;
    let days = daysleft.toFixed(0);

    if (days > 1) {
        visitsDisplay.textContent = `You visited ${days} days ago 👋`;
    } else {
        visitsDisplay.textContent = `You visited ${days} day ago 👋`;
    }
    
}

pageVisits++;

localStorage.setItem("pageVisits-ls", pageVisits);
console.log(pageVisits);