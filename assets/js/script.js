/* =========================================
   PORTFOLIO SCRIPTS - ADVANCED
   ========================================= */


function initGeometricMesh() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, nodes = [];
    const mouse = { x: -1000, y: -1000 };

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
        const nodeCount = Math.floor((W * H) / 15000);
        nodes = Array.from({ length: nodeCount }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15
        }));
    }
    
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    resize();

    function draw() {
        ctx.clearRect(0, 0, W, H);
        ctx.strokeStyle = 'rgba(5, 100, 48, 0.31)';
        ctx.lineWidth = 1;

        nodes.forEach(node => {
            node.x += node.vx; node.y += node.vy;
            if (node.x < 0 || node.x > W) node.vx *= -1;
            if (node.y < 0 || node.y > H) node.vy *= -1;

            // Repel from mouse slightly (Graph avoidance)
            const dx = mouse.x - node.x;
            const dy = mouse.y - node.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 150) {
                node.x -= (dx / dist) * 0.5;
                node.y -= (dy / dist) * 0.5;
            }
        });

        // Draw geometric connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
}

/* 3. MAGNETIC UI ELEMENTS */
function initMagneticLinks() {
    const magneticElements = document.querySelectorAll('nav a, .social-links a');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Move the element slightly towards the cursor
            el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        el.addEventListener('mouseleave', () => {
            // Snap back to original position
            el.style.transform = 'translate(0px, 0px)';
        });
    });
}

/*  BLUR REVEAL ON SCROLL */
function initBlurReveals() {
    const elements = document.querySelectorAll('h1, h2, h3, p, hr, .profile-img, .project-card');
    elements.forEach(el => el.classList.add('blur-reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -20px 0px' });

    elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    initGeometricMesh();
    initMagneticLinks();
    initBlurReveals();
});