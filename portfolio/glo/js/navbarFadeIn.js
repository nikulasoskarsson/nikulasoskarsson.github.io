window.onscroll = function() {
  if (window.pageYOffset > 55) {
    // if a user has scrolled this much
    nav.classList.remove("bg-transperant"); // Remove the default trasnperant background on the navbar
    nav.classList.add("bg-white"); // Add the white background on the navbar
  } else {
    // If a user has not scrolled this much
    nav.classList.remove("bg-white"); // Remove the White background
    nav.classList.add("bg-transperant"); // Add the transperant navbar
  }
};
