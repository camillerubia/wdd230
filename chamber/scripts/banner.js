function closeBanner(target) {
    document.querySelector(target).style.display = 'none';
}

const currentDay = new Date().getDay();

const banner = document.querySelector(".banner");

if (currentDay >= 1 && currentDay <= 3) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}