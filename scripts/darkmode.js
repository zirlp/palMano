const btnSwitch = document.querySelector('#switch');

let darkMode = localStorage.getItem("darkMode");

if (darkMode === "true") {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	document.querySelector('#nav').classList.toggle('dark');
}

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	document.querySelector('#nav').classList.toggle('dark');

	if (darkMode === "true") {
		localStorage.setItem("darkMode", "false");
	} else localStorage.setItem("darkMode", "true");s

});s