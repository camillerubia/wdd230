const visitsDisplay = document.querySelector(".visits");
let pageVisits = Number(window.localStorage.getItem("pageVisits-ls")) || 0;

if (pageVisits !== 0) {
	visitsDisplay.textContent = pageVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

pageVisits++;

localStorage.setItem("pageVisits-ls", pageVisits);