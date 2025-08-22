// Environment Configuration - Shared across all pages
const ENV_CONFIG = {
  development: {
    baseUrl: 'http://localhost:8000',
    apiUrl: 'http://localhost:8000/api'
  },
  staging: {
    baseUrl: 'https://staging.jayesh-sukhadiya.github.io',
    apiUrl: 'https://staging-api.jayesh-sukhadiya.github.io'
  },
  production: {
    baseUrl: '',
    apiUrl: 'https://api.jayesh-sukhadiya.github.io'
  }
};

// Detect environment (you can modify this logic)
const currentEnv = window.location.hostname === 'localhost' ? 'development' : 
                  window.location.hostname.includes('staging') ? 'staging' : 'production';
const config = ENV_CONFIG[currentEnv];

// Function to get full URL
function getUrl(path) {
  return `${config.baseUrl}/${path}`.replace(/\/+/g, '/');
}

// Navigation links mapping
const navLinks = {
  'home': 'index.html',
  'about': 'about-us.html',
  'laravel': 'technologies/laravel.html',
  'nodejs': 'technologies/nodejs.html',
  'angular': 'technologies/angular.html',
  'nextjs': 'technologies/nextjs.html',
  'reactjs': 'technologies/reactjs.html',
  'tailwind': 'technologies/tailwind.html',
  'bootstrap': 'technologies/bootstrap.html',
  'python': 'technologies/python.html',
  'wordpress': 'technologies/wordpress.html',
  'portfolio': 'portfolio/portfolio.html',
  'blog': 'blogs/blog.html',
  'events': 'events/events.html',
  'contact': 'contact.html'
};

// Update navigation links on page load
document.addEventListener('DOMContentLoaded', function() {
  // Update all navigation links
  Object.keys(navLinks).forEach(key => {
    const links = document.querySelectorAll(`[data-nav="${key}"]`);
    links.forEach(link => {
      link.href = getUrl(navLinks[key]);
    });
  });
});

// Export for use in other scripts if needed
window.ENV_CONFIG = ENV_CONFIG;
window.getUrl = getUrl;
window.navLinks = navLinks;
