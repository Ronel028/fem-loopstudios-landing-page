

// ---> Function for hamburger menu <--- //
const menuButton = document.querySelector('.burger-menu');

function displayMenu(){
    const menuList = document.querySelector('ul');
    const lines = document.querySelectorAll('div.line');
    menuList.classList.toggle('displayMenu');
    lines.forEach(line => {
        line.classList.toggle('active');
    });
}

menuButton.addEventListener('click', displayMenu);