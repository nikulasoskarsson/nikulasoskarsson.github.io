
const nav = document.querySelector('nav'); 


function myFunction(x) {
  x.classList.toggle("change"); // Change the hamburger icon into a x icon by toggleing a css class
  navCollapse(); // Call navCollapse function after myFunction is done running
};
const navContainer = document.querySelector('.nav-container');
const navLinks = document.querySelectorAll('.nav-links');


// Nav collapse function that is called when the hamburger icon clicks, has a media query inside it that hides the nav links when the screen is smaller then 992px or the bootstrap md breakpoint
var navCollapse = function(){
	if(navContainer.classList.contains('nav-collapse')){
		navContainer.classList.remove('nav-collapse');
		if (matchMedia('only screen and (max-width: 992px)').matches) {
			navLinks[0].style.visibility = 'hidden'; // Navlinks has two lists inside it, this is the first one
			navLinks[1].style.visibility = 'hidden'; // The second list
	}
}
		
	else{
		navContainer.classList.add('nav-collapse');
		navLinks[0].style.visibility = 'visible';
		navLinks[1].style.visibility = 'visible';
	}
}
