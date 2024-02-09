document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.querySelector(".bento-block.longR");

  const imageUrls = [
    "assets/img/ucla.png",
    "assets/img/ucdavis.png",
    "assets/img/ucdavis.png",
    "assets/img/ucdavis.png",
    "assets/img/ucla.png",
  ];

  function addImagesToContainer(urls) {
    urls.forEach((url) => {
      const img = document.createElement("img");
      img.onload = () => {
        // Check if all images are loaded
        if (imageContainer.querySelectorAll("img").length === urls.length) {
          startAutoScroll(); // Start scrolling once all images are loaded
        }
      };
      img.src = url;
      img.className = "scrollingImage";
      imageContainer.appendChild(img);
    });
  }

  function startAutoScroll() {
    let delay = 0; // Introduce a delay counter
    const scrollSpeed = 3; // Increase for slower speed, controls delay frames

    function scroll() {
      delay++;
      if (delay >= scrollSpeed) {
        if (
          imageContainer.scrollTop <
          imageContainer.scrollHeight - imageContainer.clientHeight
        ) {
          imageContainer.scrollTop += 1;
        } else {
          imageContainer.scrollTop = 0; // Reset to top when reaching the bottom
        }
        delay = 0; // Reset delay
      }
      requestAnimationFrame(scroll);
    }

    scroll();
  }

  addImagesToContainer(imageUrls);
});
