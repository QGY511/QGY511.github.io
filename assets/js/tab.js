document.addEventListener('DOMContentLoaded', () => {
  const links = Array.from(document.querySelectorAll('.topTab .tablinks'));
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const linkFor = (id) =>
    links.find(link => link.getAttribute('href') === `#${id}`);

  const activate = (id) => {
    links.forEach(link => link.classList.remove('active'));
    const link = linkFor(id);
    if (link) link.classList.add('active');
  };

  // Hamburger menu (mobile): toggle the dropdown and close it after a tap.
  const topTab = document.querySelector('.topTab');
  const navToggle = document.getElementById('navToggle');
  if (topTab && navToggle) {
    navToggle.addEventListener('click', () => {
      const open = topTab.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    links.forEach(link =>
      link.addEventListener('click', () => {
        topTab.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activate(entry.target.id);
      });
    },
    {
      // Trigger when a section crosses the vertical middle of the viewport
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }
  );

  sections.forEach(section => observer.observe(section));
});
