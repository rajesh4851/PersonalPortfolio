document.addEventListener('DOMContentLoaded', function() {
  // Debug and fix logo image
  const logoImage = document.querySelector('.logo-image');
  if (logoImage) {
    console.log('Logo image found:', logoImage);
    
    // Force logo styling for better visibility
    logoImage.style.height = '50px';
    logoImage.style.width = 'auto';
    logoImage.style.display = 'inline-block';
    logoImage.style.backgroundColor = 'white';
    logoImage.style.borderRadius = '50%';
    logoImage.style.padding = '5px';
    logoImage.style.boxShadow = '0 0 10px rgba(86, 156, 214, 0.5)';
    
    logoImage.addEventListener('load', function() {
      console.log('Logo image loaded successfully');
      // Make sure the logo is visible
      logoImage.style.opacity = '1';
    });
    
    logoImage.addEventListener('error', function() {
      console.error('Failed to load logo image:', logoImage.src);
      // Try to reload the image if it failed
      setTimeout(() => {
        logoImage.src = logoImage.src + '?t=' + new Date().getTime();
      }, 500);
    });
  } else {
    console.error('Logo image element not found');
  }
  
  // Header scroll effect
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      if (mobileNav && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // Basic validation
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showFormMessage('Please fill in all fields', 'error');
        return;
      }
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (response.ok) {
          showFormMessage(data.message, 'success');
          contactForm.reset();
        } else {
          showFormMessage(data.message || 'Something went wrong', 'error');
        }
      } catch (error) {
        showFormMessage('Could not submit form. Please try again.', 'error');
        console.error(error);
      }
    });
  }
  
  function showFormMessage(message, type) {
    const messageEl = document.getElementById('form-message');
    if (messageEl) {
      messageEl.textContent = message;
      messageEl.className = `form-message ${type}`;
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        messageEl.textContent = '';
        messageEl.className = 'form-message';
      }, 5000);
    }
  }
  
  // Project filtering
  const projectFilters = document.querySelectorAll('.project-filter');
  const projectItems = document.querySelectorAll('.project-card');
  
  if (projectFilters.length > 0 && projectItems.length > 0) {
    projectFilters.forEach(filter => {
      filter.addEventListener('click', function() {
        // Update active filter
        projectFilters.forEach(f => f.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        projectItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          
          if (category === 'All' || category === itemCategory) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = 1;
              item.style.transform = 'translateY(0)';
            }, 50);
          } else {
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
});