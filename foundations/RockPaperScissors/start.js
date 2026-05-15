const images = ["https://cdn-icons-png.flaticon.com/512/10163/10163231.png", "https://cdn-icons-png.flaticon.com/512/2541/2541988.png", "https://cdn-icons-png.flaticon.com/512/10363/10363577.png"];
const img = document.getElementsByClassName("cycler");

function cycler() {
    setInterval(() => {
        let stopInterval = 0;
        const innerInterval = setInterval(() => {
            img[0].src = images[Math.floor(Math.random()*3)];
            img[1].src = images[Math.floor(Math.random()*3)];
            stopInterval++;
            if (stopInterval >= 8) clearInterval(innerInterval);
        }, 50)
    }, 800)
}

cycler();
