// Component loader for navbar and footer
(function() {
  // Function to load HTML component
  function loadComponent(elementId, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(html => {
        document.getElementById(elementId).innerHTML = html;
        
        // After loading navbar, adjust paths based on current page location
        if (elementId === 'navbar-container') {
          adjustNavbarPaths();
          
          // Initialize mobile menu state - ensure it's closed on load
          setTimeout(function() {
            const menu = document.getElementById('menu');
            const ulMenu = document.getElementById('ulMenu');
            
            // Ensure mobile menu is closed on page load
            if (menu && ulMenu) {
              if (window.innerWidth < 768) {
                // Mobile: close menu
                menu.style.height = '0px';
                menu.style.overflow = 'hidden';
                ulMenu.style.opacity = '0';
              } else {
                // Desktop: ensure menu is visible
                menu.style.height = '';
                menu.style.overflow = '';
                ulMenu.style.opacity = '1';
              }
            }
            
            // Also call initMobileMenu if available (from menu.js)
            if (typeof initMobileMenu === 'function') {
              initMobileMenu();
            }
          }, 50);
          
          // Initialize dropdown after navbar is loaded
          setTimeout(function() {
            const button = document.getElementById('nav-portfolio-button');
            const chevron = document.getElementById('portfolio-chevron');
            
            // Ensure chevron is visible
            if (chevron) {
              chevron.style.display = 'inline-block';
              chevron.style.visibility = 'visible';
            }
            
            // Ensure onclick handler is set
            if (button && window.togglePortfolioDropdown) {
              button.onclick = function(e) {
                window.togglePortfolioDropdown(e);
              };
            }
            
            // Re-initialize dropdown functionality by calling initDropdown if available
            // This will be called by dropdown.js after a delay, but we can also trigger it here
            if (window.initDropdown) {
              setTimeout(window.initDropdown, 100);
            }
          }, 200);
        }
      })
      .catch(error => {
        console.error('Error loading component:', error);
      });
  }

  // Function to adjust navbar paths based on current page location
  function adjustNavbarPaths() {
    const currentPath = window.location.pathname;
    const currentPage = window.location.pathname.split('/').pop() || window.location.pathname.split('\\').pop() || 'index.html';
    const isInDist = currentPath.includes('/dist/') || currentPath.includes('\\dist\\') || currentPage === 'about_me.html' || currentPage === 'contact.html';
    const isInPortfolio = currentPath.includes('/portfolio/') || currentPath.includes('\\portfolio\\') || currentPage === 'nature.html' || currentPage === 'portraits.html';
    
    const homeLink = document.getElementById('nav-home-link');
    const aboutLink = document.getElementById('nav-about-link');
    const contactLink = document.getElementById('nav-contact-link');
    
    // Dropdown links
    const portfolioNatureLink = document.getElementById('nav-portfolio-nature-link');
    const portfolioNatureLinkMobile = document.getElementById('nav-portfolio-nature-link-mobile');
    const portfolioPortraitsLink = document.getElementById('nav-portfolio-portraits-link');
    const portfolioPortraitsLinkMobile = document.getElementById('nav-portfolio-portraits-link-mobile');
    
    if (isInPortfolio) {
      // If we're in the portfolio subfolder, adjust paths
      if (homeLink) homeLink.href = '../../index.html';
      if (aboutLink) aboutLink.href = '../about_me.html';
      if (contactLink) contactLink.href = '../contact.html';
      
      // Portfolio dropdown links
      if (portfolioNatureLink) portfolioNatureLink.href = 'nature.html';
      if (portfolioNatureLinkMobile) portfolioNatureLinkMobile.href = 'nature.html';
      if (portfolioPortraitsLink) portfolioPortraitsLink.href = 'portraits.html';
      if (portfolioPortraitsLinkMobile) portfolioPortraitsLinkMobile.href = 'portraits.html';
      
      // Update active page indicator
      updateActivePage(currentPage, true);
    } else if (isInDist) {
      // If we're in the dist folder, adjust paths
      if (homeLink) homeLink.href = '../index.html';
      if (aboutLink) aboutLink.href = 'about_me.html';
      if (contactLink) contactLink.href = 'contact.html';
      
      // Portfolio dropdown links
      if (portfolioNatureLink) portfolioNatureLink.href = 'portfolio/nature.html';
      if (portfolioNatureLinkMobile) portfolioNatureLinkMobile.href = 'portfolio/nature.html';
      if (portfolioPortraitsLink) portfolioPortraitsLink.href = 'portfolio/portraits.html';
      if (portfolioPortraitsLinkMobile) portfolioPortraitsLinkMobile.href = 'portfolio/portraits.html';
      
      // Update active page indicator
      updateActivePage(currentPage, false);
    } else {
      // If we're in the root, use original paths
      if (homeLink) homeLink.href = 'index.html';
      if (aboutLink) aboutLink.href = 'dist/about_me.html';
      if (contactLink) contactLink.href = 'dist/contact.html';
      
      // Portfolio dropdown links
      if (portfolioNatureLink) portfolioNatureLink.href = 'dist/portfolio/nature.html';
      if (portfolioNatureLinkMobile) portfolioNatureLinkMobile.href = 'dist/portfolio/nature.html';
      if (portfolioPortraitsLink) portfolioPortraitsLink.href = 'dist/portfolio/portraits.html';
      if (portfolioPortraitsLinkMobile) portfolioPortraitsLinkMobile.href = 'dist/portfolio/portraits.html';
      
      // Update active page indicator
      updateActivePage(currentPage === '' || currentPage === '/' || currentPage === 'index.html' ? 'index.html' : currentPage, false);
    }
  }

  // Function to update active page indicator
  function updateActivePage(currentPage, isInPortfolio) {
    // Reset all underlines
    const portfolioUnderline = document.getElementById('nav-portfolio-underline');
    const aboutUnderline = document.getElementById('nav-about-underline');
    const contactUnderline = document.getElementById('nav-contact-underline');
    
    if (portfolioUnderline) {
      portfolioUnderline.className = 'hidden md:block h-0.5 bg-black dark:bg-white';
    }
    if (aboutUnderline) {
      aboutUnderline.className = 'hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white';
    }
    if (contactUnderline) {
      contactUnderline.className = 'hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black dark:bg-white';
    }
    
    // Set active page underline
    if (isInPortfolio) {
      if (portfolioUnderline) {
        portfolioUnderline.className = 'hidden md:block h-0.5 bg-black dark:bg-white';
      }
    } else if (currentPage === 'about_me.html' || currentPage.includes('about')) {
      if (aboutUnderline) {
        aboutUnderline.className = 'hidden md:block h-0.5 bg-black dark:bg-white';
      }
    } else if (currentPage === 'contact.html' || currentPage.includes('contact')) {
      if (contactUnderline) {
        contactUnderline.className = 'hidden md:block h-0.5 bg-black dark:bg-white';
      }
    }
  }

  // Load components when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      const navbarContainer = document.getElementById('navbar-container');
      const footerContainer = document.getElementById('footer-container');
      
      if (navbarContainer) {
        const navbarPath = navbarContainer.getAttribute('data-path') || 'components/navbar.html';
        loadComponent('navbar-container', navbarPath);
      }
      
      if (footerContainer) {
        const footerPath = footerContainer.getAttribute('data-path') || 'components/footer.html';
        loadComponent('footer-container', footerPath);
      }
    });
  } else {
    // DOM is already loaded
    const navbarContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');
    
    if (navbarContainer) {
      const navbarPath = navbarContainer.getAttribute('data-path') || 'components/navbar.html';
      loadComponent('navbar-container', navbarPath);
    }
    
    if (footerContainer) {
      const footerPath = footerContainer.getAttribute('data-path') || 'components/footer.html';
      loadComponent('footer-container', footerPath);
    }
  }
})();

