const title = document.querySelectorAll(".title");

function changeTitle() {
	title.forEach((el) => {
		let rgb = [];
		for (let i = 0; i < 3; i++) {
			const color = Math.floor(Math.random() * 255);

			rgb[i] = color;
		}
		let rgb_value =
			"rgb" + "(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
		el.style.color = rgb_value;
	});
}

setInterval(changeTitle, 1000);
