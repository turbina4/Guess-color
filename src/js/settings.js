const openSettingsBtn = document.querySelector(".openSettingsBtn");
const closeSettingsBtn = document.querySelector(".closeSettingsBtn");
const settings = document.querySelector(".settings");

const colInput = document.querySelector(".cols");
const colText = document.querySelector(".colsn");
const rowInput = document.querySelector(".rows");
const rowText = document.querySelector(".rowsn");
const submit = document.querySelector(".submit");
const section2 = document.querySelector(".section2");

const bgcolor = document.querySelector(".bgcolor");

let col_input = colInput.value;
let row_input = rowInput.value;

const boxes = document.querySelectorAll(".box");

const setSize = () => {
	boxes.forEach((element) => {
		element.style.height = `${(window.innerHeight * 0.65 - 10 * row_input) / row_input}px`;
	});
};
setSize();
window.addEventListener("resize", () => {setSize()});

const openSettings = () => {
	openSettingsBtn.style.left = "-300px";
	settings.style.left = "0px";
	settings.style.height = `${document.documentElement.scrollHeight}px`;
};
const closeSettings = () => {
	openSettingsBtn.style.left = "0px";
	settings.style.left = "-300px";
};

colText.innerHTML = colInput.value;
rowText.innerHTML = rowInput.value;
colInput.addEventListener("input", (el) => {
	colText.innerHTML = el.target.value;
});
rowInput.addEventListener("input", (el) => {
	rowText.innerHTML = el.target.value;
});

const submitFunction = () => {
	row_input = rowInput.value;
	col_input = colInput.value;
	if (col_input != 1 || row_input != 1) {
		const boxe = document.querySelectorAll(".box");
		boxe.forEach((el) => {
			el.remove();
		});
		section2.style.setProperty("grid-template-columns", `repeat(${col_input},1fr)`);
		for (let i = 1; i < col_input * row_input + 1; i++) {
			const newBox = document.createElement("div");
			newBox.classList.add("box");
			section2.appendChild(newBox);
			newBox.style.height = (window.innerHeight * 0.65 - 10 * row_input) / row_input + "px";
		}
	}
};

const changeBgInput = () => {
	if (bgcolor.value != "changebg") {
		body.style.backgroundColor = bgcolor.value;
	}
};

openSettingsBtn.addEventListener("click", openSettings);
closeSettingsBtn.addEventListener("click", closeSettings);
submit.addEventListener("click", submitFunction);
changeBgInput();
bgcolor.addEventListener("change", changeBgInput);
