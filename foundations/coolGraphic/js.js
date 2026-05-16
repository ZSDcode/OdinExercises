document.body.classList.add("container");
const main = document.createElement("div");
main.classList.add("container");
main.classList.add("content");

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("container");
    for (let j = 0; j < 4; j++) {
        const outerBox = document.createElement("div");
        const box = document.createElement("div");
        outerBox.classList.add("wrapper");
        box.classList.add("box");
        outerBox.appendChild(box);
        row.appendChild(outerBox);
    }
    main.appendChild(row);
}

document.body.appendChild(main);

const allBoxes = document.querySelectorAll(".box");

const on = (box) => {
    clearInterval(box.interval);
    clearInterval(box.fadeInterval);
    box.style["opacity"] = 1;
    box.interval = setInterval(() => {
        let r = Math.random() * 255;
        let b = Math.random() * 255;
        let g = Math.random() * 255;
        box.style["background-color"] = `rgb(${r}, ${b}, ${g})`;
    }, 50);
}

const off = (box) => {
    clearInterval(box.interval);
    let op = 1;
    box.fadeInterval = setInterval(() => {
        box.style["opacity"]=op;
        op -= 0.1;
        if (op <= 0) clearInterval(fadeInterval);
    }, 50);
}

allBoxes.forEach(box => box.addEventListener("mouseenter", (e) => on(box)));
allBoxes.forEach(box => box.addEventListener("mouseleave", (e) => off(box)));

