const settingsButton = document.querySelector(".settingsButton");
const settingsButtonIMG = document.querySelector(".settingsButtonIMG");
const settings = document.querySelector(".settings");

const gameSection = document.querySelector(".boxes");

const bgcolor = document.querySelector(".bgcolor");

const colInput = document.querySelector(".cols");
const colText = document.querySelector(".colsn");
const rowInput = document.querySelector(".rows");
const rowText = document.querySelector(".rowsn");

let col_input = colInput.value;
let row_input = rowInput.value;

const openSettings = () => {
	if (settings.style.left == "-300px") {
		settings.style.left = "0px";
		settingsButtonIMG.classList.add("settingsButtonActiveIMG");
	} else {
		settings.style.left = "-300px";
		settingsButtonIMG.classList.remove("settingsButtonActiveIMG");
	}
};

colText.innerHTML = colInput.value;
rowText.innerHTML = rowInput.value;

colInput.addEventListener("input", (el) => {
	colText.innerHTML = el.target.value;
	col_input = colInput.value;
	generateNew();
});

rowInput.addEventListener("input", (el) => {
	rowText.innerHTML = el.target.value;
	row_input = rowInput.value;
	generateNew();
});

const generateNew = () => {
	if (col_input != 1 || row_input != 1) {
		const boxes = document.querySelectorAll(".box-button");
		boxes.forEach((el) => {
			el.remove();
		});
		gameSection.style.setProperty("grid-template-columns", `repeat(${col_input},1fr)`);
		for (let i = 0; i < col_input * row_input; i++) {
			const newButton = document.createElement("button");
			newButton.classList.add("box-button");
			gameSection.appendChild(newButton);
		}
	}
};

const changeBgInput = () => {
	if (bgcolor.value != "changebg") {
		body.style.backgroundColor = bgcolor.value;
	}
};

settingsButton.addEventListener("click", openSettings);
bgcolor.addEventListener("change", changeBgInput);

changeBgInput();
