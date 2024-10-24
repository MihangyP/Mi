const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

console.log(nav.style.display);
hamburger.addEventListener("click", () => {
	if (hamburger.getAttribute("src") == "assets/open_hamburger.png")
	{
		hamburger.setAttribute("src", "assets/close_hamburger.png");
		nav.style.display = "block";
	}
	else
	{
		hamburger.setAttribute("src", "assets/open_hamburger.png");	
		nav.style.display = "none";
	}
})
