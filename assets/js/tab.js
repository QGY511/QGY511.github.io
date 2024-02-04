document.addEventListener('DOMContentLoaded', () => {
  const deactivateAllTabs = () => {
    document.querySelectorAll('.topTab .tablinks').forEach(tab => tab.classList.remove('active'));
  };

  const activateTab = (tab) => {
    deactivateAllTabs();
    tab.classList.add('active');
  };

  // Enhance path comparison to handle different homepage scenarios
  const isHomePage = (path) => {
    const normalizedPath = path.endsWith('/') ? path : `${path}/`;
    return ['/index.html/', '/'].includes(normalizedPath.toLowerCase());
  };

  // Determine the current page's path for comparison
  const currentPagePath = `${window.location.pathname}/`.toLowerCase();

  // Attempt to activate the tab corresponding to the current page or default to Home
  let homeTab;
  let activeTabSet = false;
  document.querySelectorAll('.topTab .tablinks').forEach(tab => {
    const tabPath = `${new URL(tab.href).pathname}/`.toLowerCase();
    if (tabPath === currentPagePath || (isHomePage(currentPagePath) && tabPath.includes('index.html/'))) {
      activateTab(tab);
      activeTabSet = true;
    }
    if (tab.href.includes('index.html')) {
      homeTab = tab; // Identify the Home tab for potential fallback activation
    }
  });

  // Fallback to activating the Home tab if no specific tab was activated
  if (!activeTabSet && homeTab) {
    activateTab(homeTab);
  }
});
