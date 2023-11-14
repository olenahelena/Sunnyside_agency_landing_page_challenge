# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
 - [Screenshot](#screenshot)


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: (https://github.com/olenahelena/Sunnyside_agency_landing_page_challenge)
- Live Site URL: (https://zingy-cuchufli-193ba0.netlify.app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
During this project, I deepened my knowledge of using display flex and grid. Once again, I gained a lot of practice with managing image dimensions. Additionally, I created a JavaScript function that opens and closes the navigation menu on mobile and tablet versions. I also implemented a function that scrolls the page to the selected section.

```js
function documentActions(e) {
     const targetElement = e.target;

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
```

### Useful resources

- (https://www.youtube.com/watch?v=b_JsMfpefGI&t=605s) - This helped me for practice with header and there are many useful tips for your projects.


### Screenshot

![](screenshot-desktop.png)