document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach((link) => {
    link.addEventListener('focus', () => {
      link.style.opacity = '1';
    });

    link.addEventListener('blur', () => {
      link.style.opacity = '';
    });
  });

  const selectorButtons = document.querySelectorAll('.selector-button');
  const selectorPanels = document.querySelectorAll('.selector-panel');

  selectorButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.panel;

      selectorButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-selected', String(isActive));
      });

      selectorPanels.forEach((panel) => {
        const isActive = panel.id === target;
        panel.classList.toggle('is-active', isActive);
      });
    });
  });

  window.setTimeout(() => {
    document.body.classList.add('loaded');
  }, 3000);
});
