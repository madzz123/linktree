/* ============================================
   MADZZ LINKTREE — Main JavaScript
   ============================================ */

/* ============================================
   THEME MANAGEMENT
   ============================================ */
(function initTheme() {
  const saved = localStorage.getItem('madzz-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (saved === 'light') {
    // explicit light — do nothing
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

var themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('madzz-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('madzz-theme', 'dark');
    }
  });
}

/* ============================================
   SVG ICON MAP
   Using Tabler Icons paths
   ============================================ */
const ICONS = {
  github: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>',
  twitter: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>',
  youtube: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"/><path d="M10 9l5 3l-5 3z"/>',
  instagram: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M16.5 7.5v.01"/>',
  globe: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M3.6 9h16.8"/><path d="M3.6 15h16.8"/><path d="M11.5 3a17 17 0 0 0 0 18"/><path d="M12.5 3a17 17 0 0 1 0 18"/>',
  video: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"/><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/>',
  link: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 15l6 -6"/><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"/><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"/>',
  tiktok: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"/>',
  discord: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/><path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"/><path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"/>',
  telegram: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12l16-7l-7 16l-3-6l-6-3l-0 1z"/>',
  whatsapp: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.8-6.9a9 9 0 1 1 4.9 5.7l-1.7.5l-2 1.7l-2-1.5z"/><path d="M8.8 13.8a2.5 2.5 0 0 1 .3-1.2c.2-.3.6-.6 1-1c.4-.3.6-.4 1.1-.7.4-.2.7-.2 1.2-.1.5.1 1.1.3 1.5.6.4.3.8.7 1 1.1.2.4.2.8.1 1.2-.1.5-.3.9-.6 1.3-.3.4-.7.7-1.1.9l-.4.2c-.3.1-.5.1-.8.1-.7 0-1.5-.4-2.4-1.3-.9-.8-1.4-1.5-1.5-2.1z"/>',
  arrow: '<path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6"/>'
};

function createSVG(iconName, size) {
  size = size || 20;
  var paths = ICONS[iconName] || ICONS['link'];
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
}

/* ============================================
   ESCAPE HTML
   ============================================ */
function escapeHTML(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

/* ============================================
   APP RENDER
   ============================================ */
function renderApp(data) {
  var container = document.getElementById('appContent');
  var skeleton = document.getElementById('loadingSkeleton');
  var footer = document.getElementById('appFooter');

  // Build profile
  var profileHTML = '<div class="profile">';
  profileHTML += '<div class="avatar-ring"><img src="' + escapeHTML(data.avatar) + '" alt="' + escapeHTML(data.name) + ' avatar" width="98" height="98" loading="eager"></div>';
  profileHTML += '<h1 class="profile-name">' + escapeHTML(data.name) + '</h1>';
  profileHTML += '<p class="profile-bio">' + escapeHTML(data.bio) + '</p>';
  profileHTML += '<div class="profile-badge"><span class="badge-dot"></span>Available for work</div>';
  profileHTML += '</div>';

  // Build socials
  var socialsHTML = '<nav class="socials" aria-label="Social links">';
  data.socials.forEach(function (s) {
    socialsHTML += '<a class="social-link" href="' + escapeHTML(s.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + escapeHTML(s.name) + '">';
    socialsHTML += createSVG(s.icon);
    socialsHTML += '</a>';
  });
  socialsHTML += '</nav>';

  // Build link cards
  var linksHTML = '<ul class="links-list" role="list">';
  data.links.forEach(function (l, i) {
    linksHTML += '<li class="link-card" style="animation: fadeSlideUp 0.55s ' + (0.5 + i * 0.1) + 's var(--ease-out-expo) forwards;">';
    linksHTML += '<a href="' + escapeHTML(l.url) + '" target="_blank" rel="noopener noreferrer">';
    linksHTML += '<span class="link-icon">' + createSVG(l.icon) + '</span>';
    linksHTML += '<span class="link-title">' + escapeHTML(l.title) + '</span>';
    linksHTML += '<span class="link-arrow">' + createSVG('arrow', 16) + '</span>';
    linksHTML += '</a></li>';
  });
  linksHTML += '</ul>';

  container.innerHTML = profileHTML + socialsHTML + linksHTML;

  // Swap skeleton for content
  skeleton.style.display = 'none';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  footer.style.display = 'block';
}

function renderError(message) {
  var container = document.getElementById('appContent');
  var skeleton = document.getElementById('loadingSkeleton');
  skeleton.style.display = 'none';
  container.style.display = 'flex';
  container.innerHTML = '<div class="error-state"><p>' + escapeHTML(message) + '</p></div>';
}

/* ============================================
   PARTICLE CANVAS
   ============================================ */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;
  const PARTICLE_COUNT = 35;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1
    };
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const color = isDark ? '147, 197, 253' : '37, 99, 235';

    particles.forEach(function (p) {
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap around
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + color + ', ' + p.opacity + ')';
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(' + color + ', ' + (0.06 * (1 - dist / 120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationId = requestAnimationFrame(animate);
  }

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  init();
  animate();

  window.addEventListener('resize', function () {
    resize();
  });
}

/* ============================================
   FETCH DATA & BOOT
   ============================================ */
function loadLinkData() {
  return fetch('links.json', { cache: 'no-store' })
    .then(function (res) {
      if (!res.ok) throw new Error('Could not load links.json');
      return res.json();
    });
}

loadLinkData()
  .then(function (data) {
    renderApp(data);
    initParticles();
  })
  .catch(function (err) {
    renderError('Failed to load data. Make sure links.json is in the same directory.');
    console.error(err);
  });
