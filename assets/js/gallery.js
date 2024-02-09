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
      img.src = url;
      img.className = "scrollingImage"; // Apply the CSS class for styling
      imageContainer.appendChild(img);
    });
  }

  function startAutoScroll() {
    let lastFrameTime = 0;
    const pixelsPerSecond = 100; // Adjust for desired speed, lower = slower

    function scroll(timestamp) {
      if (!lastFrameTime) lastFrameTime = timestamp;
      const deltaTime = timestamp - lastFrameTime;

      // Calculate how much to scroll based on the elapsed time since the last frame
      const scrollAmount = (pixelsPerSecond * deltaTime) / 1000;
      if (
        imageContainer.scrollTop <
        imageContainer.scrollHeight - imageContainer.clientHeight
      ) {
        imageContainer.scrollTop += scrollAmount;
      } else {
        imageContainer.scrollTop = 0; // Reset to top when reaching the bottom
      }

      lastFrameTime = timestamp;
      requestAnimationFrame(scroll);
    }

    requestAnimationFrame(scroll);
  }

  addImagesToContainer(imageUrls);
  startAutoScroll();
});
