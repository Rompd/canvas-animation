class Particle {
  constructor({ x, y, radius = 1, color }) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5
    };
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }

  update(ctx) {
    this.draw(ctx);
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

class Canvas {
  constructor() {
    this.canvas = document.querySelector(".space");
    this.ctx = this.canvas.getContext("2d");
    this.mouse = { x: 0, y: 0 };
    this.particles = [];
    this.init();
  }

  init() {
    this.setCanvasSize();
    this.createParticles();
    this.addEventListeners();
    this.animate();
  }

  setCanvasSize() {
    this.canvas.width = 600;
    this.canvas.height = 400;
  }

  createParticles() {
    const colors = ["#FF5F5F", "#88D8FF", "#F8D86A"];
    const count = 150;
    
    for(let i = 0; i < count; i++) {
      this.particles.push(new Particle({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
    }
  }

  addEventListeners() {
    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    
    window.addEventListener("resize", () => {
      this.setCanvasSize();
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.particles.forEach(particle => {
      particle.update(this.ctx);
      
      // Mouse interaction
      const distance = Math.hypot(
        particle.x - this.mouse.x,
        particle.y - this.mouse.y
      );
      
      if(distance < 100) {
        particle.velocity.x += (particle.x - this.mouse.x) * 0.001;
        particle.velocity.y += (particle.y - this.mouse.y) * 0.001;
      }
      
      // Bounce off walls
      if(particle.x <= 0 || particle.x >= this.canvas.width) particle.velocity.x *= -1;
      if(particle.y <= 0 || particle.y >= this.canvas.height) particle.velocity.y *= -1;
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

new Canvas();
