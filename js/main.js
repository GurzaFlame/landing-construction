/* ========================================
   ЛЕЙДИНГ СТРОЙ — Main JS
   Counter animation, Scroll reveal, FAQ, Nav
   ======================================== */

(function () {
  'use strict';

  // --- NAVIGATION ---
  const nav = document.getElementById('nav');
  const burger = document.getElementById('navBurger');
  const navLinks = document.getElementById('navLinks');

  // Scroll effect on nav
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // Mobile menu toggle
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
      });
    });
  }

  // --- COUNTER ANIMATION ---
  function animateCounters() {
    const counters = document.querySelectorAll('.hero__stat-number[data-target]');
    counters.forEach(counter => {
      if (counter.dataset.animated) return;

      const target = parseInt(counter.dataset.target, 10);
      const duration = 2000;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);

        counter.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      counter.dataset.animated = 'true';
      requestAnimationFrame(update);
    });
  }

  // Trigger counters when hero stats are in view
  const heroStats = document.querySelector('.hero__stats');
  if (heroStats) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    observer.observe(heroStats);
  }

  // --- SCROLL REVEAL ---
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay for siblings
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, delay);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    // Add stagger delays for groups
    const groups = {
      '.bento__item': 80,
      '.step': 100,
      '.portfolio__card': 80,
      '.pricing__card': 80,
      '.review': 80,
      '.faq__item': 60
    };

    revealElements.forEach(el => {
      for (const [selector, delayMs] of Object.entries(groups)) {
        if (el.matches(selector)) {
          const siblings = Array.from(el.parentElement.querySelectorAll(selector));
          const idx = siblings.indexOf(el);
          el.dataset.delay = idx * delayMs;
          break;
        }
      }
      revealObserver.observe(el);
    });
  }

  // --- FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --- CONTACT FORM ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const phone = formData.get('phone');

      // Simple validation
      if (!name.trim() || !phone.trim()) {
        alert('Пожалуйста, заполните имя и телефон.');
        return;
      }

      // Simulate submission
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Отправка...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'Извините, заявки временно не принимаются';
        btn.style.background = '#22c55e';
        btn.style.borderColor = '#22c55e';
        contactForm.reset();

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.borderColor = '';
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }

  // --- SMOOTH SCROLL for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();

