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
      const pixelsPerSecond = 100; // Base speed
      const minimumScrollAmount = 2; // Ensure at least 1px is scrolled per frame
      const bottomThreshold = 10; // Increased threshold for when to reset scroll
  
      function scroll(timestamp) {
        if (!lastFrameTime) lastFrameTime = timestamp;
        const deltaTime = timestamp - lastFrameTime;
        // Ensure we scroll at least the minimumScrollAmount, or based on deltaTime
        const scrollAmount = Math.max((pixelsPerSecond * deltaTime) / 1000, minimumScrollAmount);
  
        // Check if near the bottom, considering an increased threshold
        if (imageContainer.scrollTop + bottomThreshold < imageContainer.scrollHeight - imageContainer.clientHeight) {
          imageContainer.scrollTop += scrollAmount;
        } else {
          imageContainer.scrollTop = 0; // Reset to top if within threshold of the bottom
        }
  
        lastFrameTime = timestamp;
        requestAnimationFrame(scroll);
      }
  
      requestAnimationFrame(scroll);
    }
  
    addImagesToContainer(imageUrls);
    startAutoScroll();
  });
  