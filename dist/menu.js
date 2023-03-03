// Getting hamburguer menu in small screens
const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ulMenu");

function menuToggle() {
  menu.classList.toggle("h-32");
}

// Browser resize listener
window.addEventListener("resize", menuResize);

// Resize menu if user changing the width with responsive menu opened
function menuResize() {
  // First get the size from the window
  const window_size = window.innerWidth || document.body.clientWidth;
  if (window_size > 640) {
    menu.classList.remove("h-32");
  }
}
