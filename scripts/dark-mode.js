const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("✩")) {
        main.style.background = "#081C15";
        main.style.color = "#081C15";
        modeButton.textContent = "☀";
    } else {
        main.style.background = "#D8F3DC";
        main.style.color = "#000";
        modeButton.textContent = "✩";
    }
});