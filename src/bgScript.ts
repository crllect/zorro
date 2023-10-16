// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

// Constants for customization
const DOT_COUNT = 250; // pretty obvious. If you cant figure this shit out, stop skidding and go home.
let DOTS_TO_SPAWN_ON_CLICK = 3; // Number of dots to spawn on click
let INITIAL_DOT_SPEED = 0.05; // Initial speed of spawned dots

let MAX_DISTANCE = 150; // Maximum distance for drawing lines
let LINE_COLOR = '#E70056'; // Line colorts
let LINE_THICKNESS = 3.25; // Line thickness

let DOT_COLOR = '#FFFFFF'; // Dot color
let DOT_SIZE = 1.0; // Dot size
let DOT_SIZE_VARIATION = 2.0; // Dot size variation
let DOT_SIZE_ANIMATION_SPEED = 0.01; // Animation speed for dot size variation

let DOT_SPEED = 0.05; // Dot speed in pixels per frame
let DOT_SPEED_VARIATION = 0.01; // Variation in dot speed

let GLOW_INNER_COLOR = '#E70056'; // Inner color of the radial gradient
let GLOW_OUTER_COLOR = 'transparent'; // Outer color of the radial gradient
let GLOW_RADIUS = 35; // Radial gradient glow radius

// Initialize variables
const dots: Dot[] = [];

// Set canvas dimensions to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Dot class representing a moving point on the canvas
class Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  initialSpeed: number;
  lifeTime: number;
  actualDotSize: number;

  constructor(x: number, y: number, initialSpeed: number) {
    this.x = x;
    this.y = y;
    const angle = Math.random() * Math.PI * 2; // Random angle in radians
    const speed =
      (Math.random() * 2 - 1) * DOT_SPEED_VARIATION + initialSpeed; // Random speed with variation

    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
    this.initialSpeed = initialSpeed;
    this.lifeTime = 3 * 1000; // 3 seconds in milliseconds
    this.actualDotSize = DOT_SIZE + Math.random() * DOT_SIZE_VARIATION; // Random dot size within variation
  }

  // Update the dot's position and handle boundary conditions
  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off the canvas borders
    if (this.x < 0 || this.x > canvas.width) {
      this.vx *= -1;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.vy *= -1;
    }

    // Gradually reduce speed over time
    if (this.lifeTime > 0) {
      this.vx *= 0.99; // Reduce X velocity
      this.vy *= 0.99; // Reduce Y velocity
      this.lifeTime -= 16; // 16 milliseconds per frame
    }
  }

  // Draw the dot as a small circle on the canvas with size variation
  draw() {
    // Update the dot size with variation based on animation speed
    const targetDotSize = DOT_SIZE + Math.random() * DOT_SIZE_VARIATION;
    const animationStep = DOT_SIZE_ANIMATION_SPEED * (targetDotSize - this.actualDotSize);
    this.actualDotSize += animationStep;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.actualDotSize, 0, Math.PI * 2);
    ctx.fillStyle = DOT_COLOR;
    ctx.fill();
  }

  // Draw a line from the dot to the cursor if it's within range
  drawLineToCursor(mouseX: number, mouseY: number) {
    const dx = this.x - mouseX;
    const dy = this.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= MAX_DISTANCE) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(mouseX, mouseY);

      // Calculate the alpha value based on distance
      const alpha = 1 - distance / MAX_DISTANCE;

      // Set line color with alpha value
      ctx.strokeStyle = `rgba(231, 0, 86, ${alpha})`;
      ctx.lineWidth = LINE_THICKNESS; // Set line thickness
      ctx.stroke();
    }
  }
}

// Create an initial set of dots with random positions
function createDots() {
  // Clear the existing dots
  dots.length = 0;

  for (let i = 0; i < DOT_COUNT; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    dots.push(new Dot(x, y, DOT_SPEED));
  }
}


// Function to handle canvas update
function handleCanvasUpdate(event: MouseEvent) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Create a radial gradient around the cursor for the glow effect
  const gradient = ctx.createRadialGradient(
    mouseX,
    mouseY,
    0,
    mouseX,
    mouseY,
    GLOW_RADIUS
  );
  gradient.addColorStop(0, GLOW_INNER_COLOR);
  gradient.addColorStop(1, GLOW_OUTER_COLOR);
  ctx.fillStyle = gradient;

  // Draw a filled circle at the cursor position with the glow effect
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, GLOW_RADIUS, 0, Math.PI * 2);
  ctx.fill();

  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];
    dot.update();
    dot.draw();
    dot.drawLineToCursor(mouseX, mouseY);
  }

  requestAnimationFrame(() => handleCanvasUpdate(event));
}

// Event listener for mouse movement
document.addEventListener('mousemove', (event) => {
  handleCanvasUpdate(event);
});

// Event listener for mouse clicks to spawn dots
document.addEventListener('click', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Spawn multiple dots on click
  for (let i = 0; i < DOTS_TO_SPAWN_ON_CLICK; i++) {
    const x = mouseX + (Math.random() - 0.5) * 20; // Add some randomness to X position
    const y = mouseY + (Math.random() - 0.5) * 20; // Add some randomness to Y position
    dots.push(new Dot(x, y, INITIAL_DOT_SPEED)); // Pass initial speed
  }
});

// Initialize the dots and start the animation loop
createDots();
handleCanvasUpdate(new MouseEvent('mousemove')); // Initial call

// Event listener for window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Recreate the entire set of dots when the window is resized
  createDots();
  handleCanvasUpdate(new MouseEvent('mousemove'));
});
