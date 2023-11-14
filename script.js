"use strict"

const menuButton = document.getElementById('burger__btn');
const menuNavigation = document.getElementById('menu__mobile');

menuButton.onclick = function () {
    menuNavigation.classList.remove('error'); 
}

document.addEventListener('click', function(event) {
    if (!menuNavigation.contains(event.target) && !menuButton.contains(event.target)) {
        menuNavigation.classList.add('error');
    }
});

window.addEventListener('load', windowLoad);

function windowLoad() {
    document.addEventListener('click', documentActions);
}

function documentActions(e) {
     const targetElement = e.target;

    //  Scroll to...

    if (targetElement.hasAttribute('data-goto')) {
          const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
          const headerHeight = document.querySelector(`.header`).offsetHeight;

          if (gotoElement) {
            window.scrollTo({
                top: gotoElement.offsetTop - headerHeight,
                behavior: "smooth"
            })
          }

          e.preventDefault();
    } }


    function handleResize() {
      const isWide = window.innerWidth >= 992;

      if (isWide) {
        menuNavigation.classList.add('error');
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the initial state