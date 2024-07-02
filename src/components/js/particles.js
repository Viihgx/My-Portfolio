class Particle {
    constructor(x, y, radius, color, velocity) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.velocity = velocity;
    }
  
    draw(context) {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fillStyle = this.color;
      context.fill();
      context.closePath();
    }
  
    update(context, width, height) {
      if (this.x - this.radius < 0 || this.x + this.radius > width) {
        this.velocity.x = -this.velocity.x;
      }
  
      if (this.y - this.radius < 0 || this.y + this.radius > height) {
        this.velocity.y = -this.velocity.y;
      }
  
      this.x += this.velocity.x;
      this.y += this.velocity.y;
  
      this.draw(context);
    }
  }
  
  function connectParticles(particles, context) {
    let opacityValue = 1;
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        let distance = Math.sqrt(
          (particles[a].x - particles[b].x) ** 2 + (particles[a].y - particles[b].y) ** 2
        );
  
        if (distance < 100) {
          opacityValue = 1 - distance / 100;
          context.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(particles[a].x, particles[a].y);
          context.lineTo(particles[b].x, particles[b].y);
          context.stroke();
          context.closePath();
        }
      }
    }
  }
  
  export default function initParticles(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
  
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  
    const particles = [];
    const colors = ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.8)'];
  
    for (let i = 0; i < 100; i++) {
      const radius = Math.random() * 3 + 1;
      const x = Math.random() * (canvas.width - radius * 2) + radius;
      const y = Math.random() * (canvas.height - radius * 2) + radius;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const velocity = {
        x: (Math.random() - 0.5) * 1,
        y: (Math.random() - 0.5) * 1,
      };
  
      particles.push(new Particle(x, y, radius, color, velocity));
    }
  
    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
  
      particles.forEach(particle => {
        particle.update(context, canvas.width, canvas.height);
      });
  
      connectParticles(particles, context);
  
      requestAnimationFrame(animate);
    }
  
    animate();
  }
  