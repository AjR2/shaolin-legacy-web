
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add forceHideBadge parameter to hide the Lovable badge
const urlParams = new URLSearchParams(window.location.search);
if (!urlParams.has('forceHideBadge')) {
  const url = new URL(window.location.href);
  url.searchParams.append('forceHideBadge', 'true');
  window.history.replaceState({}, document.title, url.toString());
}

// Additional method to hide Lovable badge by directly targeting its element
window.addEventListener('DOMContentLoaded', () => {
  // Use a small delay to ensure the badge has time to render
  setTimeout(() => {
    const badgeElement = document.querySelector('.lovable-badge');
    if (badgeElement) {
      // Cast the element to HTMLElement to access style property
      (badgeElement as HTMLElement).style.display = 'none';
    }
  }, 500);
});

createRoot(document.getElementById("root")!).render(<App />);
