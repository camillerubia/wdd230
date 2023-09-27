const modeButton = document.querySelector("#mode");
const card = document.querySelector(".card");
const h3 = document.querySelector("h3");
const hero = document.querySelector(".hero");
const title = document.querySelector('.page-title');
const link = card.querySelectorAll("a");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("✩")) {
        h3.style.color = "#081C15";
        modeButton.textContent = "☀";

        card.style.background = "#081C15";
        card.style.color = "#B7E4C7";
        
        link.forEach(link => {
            link.style.color = "#B7E4C7";
        });
        
        
    } else {
        modeButton.textContent = "✩";

        card.style.background = "#fff";
        card.style.color = "#000";

        link.forEach(link => {
            link.style.color = "#081C15";
        });
    }
});