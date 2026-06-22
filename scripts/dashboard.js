// dashboard.js - stub for future components (circular progress, chart helpers)
// Currently kept minimal to avoid changing existing behavior.

document.addEventListener('DOMContentLoaded', () => {
  window.renderRing = function(elId, percent, opts = {}) {
    const el = document.getElementById(elId);
    if (!el) return;
    if (!el.querySelector('svg')) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.setAttribute('viewBox','0 0 36 36');
      svg.style.width = '84px';
      svg.style.height = '84px';
      svg.innerHTML = `
        <path class="ring-bg" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none" stroke="#F3F1FF" stroke-width="3"/>
        <path class="ring" d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-dasharray="0 100" />
        <text x="18" y="20.5" text-anchor="middle" class="ring-text">0%</text>
      `;
      el.appendChild(svg);
    }
    const svg = el.querySelector('svg');
    const ring = svg.querySelector('.ring');
    const txt = svg.querySelector('.ring-text');
    const dash = Math.max(0, Math.min(100, percent));
    ring.setAttribute('stroke-dasharray', `${dash} 100`);
    txt.textContent = `${Math.round(dash)}%`;
  };
});

window.updatePensionRing = function(percent) {
  window.renderRing('pensionRing', percent);
  const label = document.getElementById('pensionRatio');
  if (label) {
    label.textContent = `${Math.round(percent)}%`;
  }
};

