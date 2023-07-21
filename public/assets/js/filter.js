// Add event listener for 'Plats principaux' option
var platsPrincipauxOption = document.querySelector('.filter-plats-principaux');
platsPrincipauxOption.addEventListener('click', showPlatsPrincipauxOptions);

function showPlatsPrincipauxOptions() {
  var platsPrincipauxOptionsContainer = document.getElementById('plats-principaux-options');
  platsPrincipauxOptionsContainer.style.display = 'block';
}

// Add event listeners for the plats principaux options
var burgerOption = document.querySelector('.filter-burger');
burgerOption.addEventListener('click', filterMenuItems);

var pizzaOption = document.querySelector('.filter-pizza');
pizzaOption.addEventListener('click', filterMenuItems);

var steakOption = document.querySelector('.filter-steak');
steakOption.addEventListener('click', filterMenuItems);

var patesOption = document.querySelector('.filter-pates');
patesOption.addEventListener('click', filterMenuItems);

var poissonOption = document.querySelector('.filter-poisson');
poissonOption.addEventListener('click', filterMenuItems);

// Function to filter menu items based on selected option
function filterMenuItems(event) {
  var selectedOption = event.target.dataset.filter;
  var menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(function (menuItem) {
    if (menuItem.classList.contains(selectedOption)) {
      menuItem.style.display = 'block';
    } else {
      menuItem.style.display = 'none';
    }
  });
}
