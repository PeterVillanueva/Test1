// Get all the bubble elements
const bubbles = document.querySelectorAll('.bubble');

// Set the initial position and velocity for each bubble
const positions = [];
const velocities = [];
for (let i = 0; i < bubbles.length; i++) {
  positions[i] = {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight
  };
  velocities[i] = {
    x: (Math.random() - 0.5) * 10,
    y: (Math.random() - 0.5) * 10
  };
}

// Update the position of each bubble every frame
function update() {
  for (let i = 0; i < bubbles.length; i++) {
    // Update the position of the bubble based on its velocity
    positions[i].x += velocities[i].x;
    positions[i].y += velocities[i].y;

    // If the bubble hits the edge of the screen, reverse its velocity
    if (positions[i].x < 0) {
      positions[i].x = 0;
      velocities[i].x *= -1;
    } else if (positions[i].x > window.innerWidth - bubbles[i].offsetWidth) {
      positions[i].x = window.innerWidth - bubbles[i].offsetWidth;
      velocities[i].x *= -1;
    }
    if (positions[i].y < 0) {
      positions[i].y = 0;
      velocities[i].y *= -1;
    } else if (positions[i].y > window.innerHeight - bubbles[i].offsetHeight) {
      positions[i].y = window.innerHeight - bubbles[i].offsetHeight;
      velocities[i].y *= -1;
    }

    // Update the position of the bubble on the page
    bubbles[i].style.left = positions[i].x + 'px';
    bubbles[i].style.top = positions[i].y + 'px';
  }
  
  // Call this function again on the next frame
  requestAnimationFrame(update);
}

// Start the animation loop
requestAnimationFrame(update);
