window.addEventListener("scroll", () => {
	let topIcon = document.querySelector(".top-icon");
	if (topIcon) {
		const windowScrolled = window.scrollY > 350;
		topIcon.classList.toggle("scrolling-active", windowScrolled);
		if (windowScrolled) {
			let logo = document.querySelector(".top-icon .home");
			logo.classList.toggle("d-home", window.scrollY > 400);
		}
	}
});

const navLinks = $("#navLinks");
const filterLinks = $("#filterLinks");

$(".closed").click(function () {
	if (this.parentElement.className == "logo" || this.parentElement.id == "navLinks") {
		navLinks.toggleClass("open");
	} else {
		filterLinks.toggleClass("open-filter");
	}
});

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove("active");
		});

		tabs.forEach((tab) => {
			tab.classList.remove("active");
		});

		tab.classList.add("active");
		target.classList.add("active");
	});
});

