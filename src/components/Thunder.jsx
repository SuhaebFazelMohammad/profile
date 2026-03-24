import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Thunder() {
  const canvasRef = useRef(null);
  const location = useLocation();
  const effectModeByPath = {
    "/": "thunder-rain",
    "/experience": "snow",
    "/projects": "thunder-cloudy",
    "/skills": "rain",
    "/contact": "thunder",
  };
  const effectMode = effectModeByPath[location.pathname] || "thunder-rain";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    document.body.setAttribute("data-weather", effectMode);
    let animId;
    let bolts = [];
    let particles = [];
    let clouds = [];
    let flashAlpha = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles(effectMode);
      createClouds(effectMode);
    };

    class LightningBolt {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.segments = [];
        this.alpha = 1;
        this.lineWidth = 1.5 + Math.random() * 2;
        this.branches = [];
        this.generate();
      }

      generate() {
        let x = this.x;
        let y = this.y;
        const endY = canvas.height * (0.4 + Math.random() * 0.5);
        while (y < endY) {
          const newX = x + (Math.random() - 0.5) * 90;
          const newY = y + 10 + Math.random() * 25;
          this.segments.push({ x1: x, y1: y, x2: newX, y2: newY });

          if (Math.random() < 0.18 && this.branches.length < 3) {
            const branch = [];
            let bx = newX;
            let by = newY;
            const branchLen = 2 + Math.floor(Math.random() * 5);
            for (let i = 0; i < branchLen; i++) {
              const nbx = bx + (Math.random() - 0.5) * 70;
              const nby = by + 8 + Math.random() * 18;
              branch.push({ x1: bx, y1: by, x2: nbx, y2: nby });
              bx = nbx;
              by = nby;
            }
            this.branches.push(branch);
          }
          x = newX;
          y = newY;
        }
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.shadowColor = "#7df9ff";
        ctx.shadowBlur = 25;
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        for (const s of this.segments) {
          ctx.moveTo(s.x1, s.y1);
          ctx.lineTo(s.x2, s.y2);
        }
        ctx.stroke();

        ctx.strokeStyle = "rgba(125,249,255,0.6)";
        ctx.lineWidth = this.lineWidth * 0.6;
        for (const branch of this.branches) {
          ctx.beginPath();
          for (const s of branch) {
            ctx.moveTo(s.x1, s.y1);
            ctx.lineTo(s.x2, s.y2);
          }
          ctx.stroke();
        }
        ctx.restore();
      }

      update() {
        this.alpha -= 0.025;
        return this.alpha > 0;
      }
    }

    class Particle {
      constructor(mode) {
        this.mode = mode;
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * canvas.width;
        this.y = initial ? Math.random() * canvas.height : -20;

        if (this.mode === "rain") {
          this.vx = -1 + Math.random() * 0.6;
          this.vy = 8 + Math.random() * 6;
          this.size = 8 + Math.random() * 11;
          this.alpha = 0.15 + Math.random() * 0.2;
        } else if (this.mode === "snow") {
          this.vx = -0.4 + Math.random() * 0.8;
          this.vy = 0.7 + Math.random() * 1.5;
          this.size = 1 + Math.random() * 2.8;
          this.alpha = 0.4 + Math.random() * 0.4;
        } else {
          this.vx = -0.2 + Math.random() * 0.4;
          this.vy = 0.2 + Math.random() * 0.8;
          this.size = 0.6 + Math.random() * 2.2;
          this.alpha = 0.25 + Math.random() * 0.6;
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.y > canvas.height + 30 || this.x < -40 || this.x > canvas.width + 40) {
          this.reset();
          this.x = Math.random() * canvas.width;
        }
      }

      draw(context) {
        if (this.mode === "rain") {
          context.strokeStyle = `rgba(125, 249, 255, ${this.alpha})`;
          context.lineWidth = 1.1;
          context.beginPath();
          context.moveTo(this.x, this.y);
          context.lineTo(this.x + this.vx * 1.8, this.y + this.size);
          context.stroke();
          return;
        }

        context.fillStyle =
          this.mode === "snow"
            ? `rgba(245, 252, 255, ${this.alpha})`
            : `rgba(125, 249, 255, ${this.alpha})`;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
      }
    }

    class Cloud {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.w = 110 + Math.random() * 180;
        this.h = this.w * (0.3 + Math.random() * 0.12);
        this.x = initial ? Math.random() * (canvas.width + this.w) - this.w : -this.w - Math.random() * 180;
        this.y = Math.random() * (canvas.height * 0.45);
        this.vx = 0.15 + Math.random() * 0.45;
        this.alpha = 0.08 + Math.random() * 0.12;
        this.layer = Math.random() < 0.6 ? "far" : "near";
      }

      update() {
        this.x += this.vx;
        if (this.x > canvas.width + this.w + 200) {
          this.reset();
          this.y = Math.random() * (canvas.height * 0.45);
        }
      }

      draw(context) {
        context.save();
        const cloudAlpha = this.layer === "near" ? this.alpha + 0.03 : this.alpha;
        context.fillStyle = `rgba(197, 214, 236, ${cloudAlpha})`;
        context.beginPath();
        context.ellipse(this.x, this.y, this.w * 0.33, this.h * 0.5, 0, 0, Math.PI * 2);
        context.ellipse(this.x + this.w * 0.18, this.y - this.h * 0.28, this.w * 0.24, this.h * 0.45, 0, 0, Math.PI * 2);
        context.ellipse(this.x - this.w * 0.2, this.y - this.h * 0.14, this.w * 0.2, this.h * 0.4, 0, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    const drawStormTint = () => {
      if (effectMode !== "thunder-cloudy") return;
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, "rgba(13, 18, 39, 0.34)");
      grad.addColorStop(0.55, "rgba(14, 19, 43, 0.2)");
      grad.addColorStop(1, "rgba(8, 12, 30, 0.08)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawFogBands = (ts) => {
      if (effectMode !== "thunder-cloudy") return;
      ctx.save();
      const baseY = canvas.height * 0.58;
      for (let i = 0; i < 3; i += 1) {
        const xShift = Math.sin(ts * 0.00015 + i) * (50 + i * 20);
        const y = baseY + i * 42;
        const width = canvas.width * (0.9 + i * 0.12);
        const height = 120 + i * 35;
        const grad = ctx.createRadialGradient(
          canvas.width * 0.5 + xShift,
          y,
          20,
          canvas.width * 0.5 + xShift,
          y,
          width * 0.45
        );
        grad.addColorStop(0, `rgba(182, 198, 221, ${0.08 - i * 0.015})`);
        grad.addColorStop(1, "rgba(182, 198, 221, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(-80, y - height * 0.5, width + 160, height);
      }
      ctx.restore();
    };

    const createParticles = (mode) => {
      const particleMode = mode === "thunder-rain" ? "rain" : mode === "thunder-snow" ? "snow" : mode;
      const count = particleMode === "rain" ? 220 : particleMode === "snow" ? 150 : 0;
      particles = Array.from({ length: count }, () => new Particle(particleMode));
    };

    const createClouds = (mode) => {
      const count = mode === "thunder-cloudy" ? 22 : mode === "cloudy" ? 16 : 0;
      clouds = Array.from({ length: count }, () => new Cloud());
    };

    const spawnBolt = () => bolts.push(new LightningBolt());

    let timer = 0;
    let nextFlash = 1200 + Math.random() * 3300;

    const loop = (ts) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const hasThunder =
        effectMode === "thunder" || effectMode === "thunder-rain" || effectMode === "thunder-snow" || effectMode === "thunder-cloudy";

      for (const c of clouds) {
        c.update();
        c.draw(ctx);
      }

      drawStormTint();
      drawFogBands(ts);

      if (hasThunder) {
        if (ts - timer > nextFlash) {
          spawnBolt();
          flashAlpha = 0.1 + Math.random() * 0.2;
          if (Math.random() < 0.35) {
            setTimeout(() => bolts.push(new LightningBolt()), 60 + Math.random() * 100);
          }
          timer = ts;
          nextFlash = 1800 + Math.random() * 3600;
        }

        bolts = bolts.filter((b) => {
          b.draw(ctx);
          return b.update();
        });
      }

      if (effectMode !== "thunder") {
        for (const p of particles) {
          p.update();
          p.draw(ctx);
        }
      }

      if (flashAlpha > 0.01) {
        ctx.fillStyle = `rgba(167, 222, 255, ${flashAlpha})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        flashAlpha *= 0.84;
      }

      animId = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    createParticles(effectMode);
    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.body.removeAttribute("data-weather");
    };
  }, [effectMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    />
  );
}
