// Function to check if page is scrolled and adjust the logo size
function checkScroll() {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  let scrollPosition = window.scrollY;

  // Add/remove 'scrolled' class based on scroll position
  if (scrollPosition > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Calculate new font size based on scroll position
  let newSize = 2.4 - scrollPosition * 0.02; // Decrease by 0.03 rem for every 1px scrolled

  // Clamping the font size between 1.5rem and 3rem
  newSize = Math.max(1.8, newSize);
  newSize = Math.min(2.4, newSize);

  logo.style.fontSize = newSize + "rem";
}

// Event listener for scroll event
window.addEventListener("scroll", checkScroll);

// Modal window functionality
const overlay = document.querySelector(".overlay");
const gallery = document.querySelector(".grid");

gallery.addEventListener("click", (e) => {
  if (!(e.target.tagName.toLowerCase() === "img")) return;
  if (!overlay.classList.contains("hidden")) return;
  overlay.classList.remove("hidden");
  overlay.innerHTML = "";

  const cloneImg = e.target.cloneNode(true);
  setTimeout(() => {
    cloneImg.classList.add("reveal");
  }, 10);
  overlay.appendChild(cloneImg);
});

overlay.addEventListener("click", () => {
  overlay.firstChild.classList.remove("reveal");
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 300);
});
