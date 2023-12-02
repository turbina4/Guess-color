const title = document.querySelectorAll(".title");

function changeTitle() {
	title.forEach((el) => {
		const random_rgb_title = `rgb(${Math.floor(
			Math.random() * 255
		)},${Math.floor(Math.random() * 255)},${Math.floor(
			Math.random() * 255
		)})`;
		el.style.color = random_rgb_title;
	});
}

setInterval(changeTitle, 1000);
