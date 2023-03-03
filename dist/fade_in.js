document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  body.classList.remove("opacity-0");
  body.classList.add("opacity-100");
  const photos = document.querySelectorAll("img");
  let delay = 0;
  photos.forEach((photo) => {
    setTimeout(() => {
      photo.classList.remove("opacity-0");
      photo.classList.add("opacity-100");
    }, delay);
    delay += 100;
  });
});
