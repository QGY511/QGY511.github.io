document.addEventListener('DOMContentLoaded', () => {
  // Function to remove 'active' class from all tabs
  function deactivateAllTabs() {
    document.querySelectorAll('.topTab .tablinks').forEach(tab => {
      tab.classList.remove('active');
    });
  }

  // Function to activate a tab based on a condition
  function activateTab(tab) {
    deactivateAllTabs(); // First, make sure all tabs are deactivated
    tab.classList.add('active'); // Then, activate the relevant tab
  }

  // Event listener for tab clicks
  document.querySelectorAll('.topTab .tablinks').forEach(tab => {
    tab.addEventListener('click', function() {
      activateTab(this); // Activate clicked tab
    });
  });

  // Automatically activate tab based on the current URL
  const currentPage = window.location.pathname.split('/').pop(); // Gets the last part of the URL
  document.querySelectorAll('.topTab .tablinks').forEach(tab => {
    if (tab.getAttribute('href').includes(currentPage)) {
      activateTab(tab);
    }
  });
});
