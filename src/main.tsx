
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

createRoot(document.getElementById("root")!).render(<App />);
