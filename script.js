const btnMobile = document.querySelector("#btn-mobile");
const nav = document.querySelector("#nav");
const closeMenuArea = document.querySelector("#close-menu-area");

const toggleMenu = (event) => {
	if (event.type === "touchstart") {
		event.preventDefault();
	}
	nav.classList.toggle("active");

	// Acessibility
	const active = nav.classList.contains("active");
	event.currentTarget.setAttribute("aria-expanded", active);
	if (active) {
		event.currentTarget.setAttribute("aria-label", "Close Menu");
	} else {
		event.currentTarget.setAttribute("aria-label", "Open Menu");
	}
};

btnMobile.addEventListener("touchstart", toggleMenu);
btnMobile.addEventListener("click", toggleMenu);

// close menu clicking outside
document.addEventListener("click", (event) => {
	console.log(event.target.id);
	if (event.target.id !== "nav" && event.target.id !== "hamburger") {
		nav.classList.remove("active");
	}
});

// function scrollToID(event) {
//   event.preventDefault();
//   const ID = event.currentTarget.getAttribute('href');
//   const target = document.querySelector(ID);
//   target.scrollIntoView({ behavior: "smooth" });
//   // fecha o menu
//   btnMobile.click();
// }

// // Seleciona links internos
// const intLinks = document.querySelectorAll('[href^="#"]');
// intLinks.forEach(link => {
//   link.addEventListener('click', scrollToID);
// });

// Precisa desse função extra assumindo que os links a href="#sobre" linka ao um elemento com <h1 id="sobre"></h1> note que eu fecho ele simplesmente com um btnMobile.click()
