const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach(item => item.addEventListener('click', toggleAccordion));

document.addEventListener('DOMContentLoaded', () => {
    // Handle dropdown menu toggle
    const userMenuButton = document.getElementById('user-menu-button');
    const userDropdown = document.getElementById('user-dropdown');

    userMenuButton.addEventListener('click', () => {
        if (userDropdown.classList.contains('hidden')) {
            userDropdown.classList.remove('hidden');
        } else {
            userDropdown.classList.add('hidden');
        }
    });

    // Handle mobile menu toggle
    const navbarToggleButton = document.querySelector('[data-collapse-toggle="navbar-user"]');
    const navbarMenu = document.getElementById('navbar-user');

    navbarToggleButton.addEventListener('click', () => {
        if (navbarMenu.classList.contains('hidden')) {
            navbarMenu.classList.remove('hidden');
        } else {
            navbarMenu.classList.add('hidden');
        }
    });

    // Close dropdown menu if clicked outside
    document.addEventListener('click', (event) => {
        if (!userDropdown.contains(event.target) && !userMenuButton.contains(event.target)) {
            userDropdown.classList.add('hidden');
        }
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (event) => {
        if (!navbarMenu.contains(event.target) && !navbarToggleButton.contains(event.target)) {
            navbarMenu.classList.add('hidden');
        }
    });
});
