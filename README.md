# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dcoA1jbA). This project was built with a strong focus on DOM cleanliness, accessibility (a11y), and precise design execution.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.
- Toggle the share tooltip bar by clicking the Share button.

### Screenshot

![Desktop Preview](./images/desktop-preview.jpg)

### Links

- **Solution URL:** [GitHub Repository](https://github.com/your-username/article-preview-component)
- **Live Site URL:** [GitHub Pages](https://your-username.github.io/article-preview-component/)

---

## My process

### Built with

- Semantic **HTML5** markup
- **CSS3** (Custom Properties, Flexbox, Media Queries)
- **Vanilla JavaScript** (ES6+)
- **Mobile-first** workflow
- **Accessibility (a11y)**: Implementation of WAI-ARIA attributes (`aria-expanded`, `aria-controls`, `aria-label`)

---

### What I learned

#### 1. Clean DOM Structure & Accessibility (Single Button Approach)
Instead of duplicating the Share button (one for the author footer and one inside the active tooltip), this project uses **a single button** in the DOM. This prevents keyboard navigation confusion and provides a seamless screen reader experience.

State toggling and accessibility attributes are dynamically managed via JavaScript:

```javascript
const shareBtn = document.querySelector('.shareBtn');
const shareTooltip = document.querySelector('#share-tooltip');

shareBtn.addEventListener('click', () => {
  shareBtn.classList.toggle('is-active');
  shareTooltip.classList.toggle('is-active');

  // Dynamically update the WAI-ARIA attribute
  const isOpen = shareTooltip.classList.contains('is-active');
  shareBtn.setAttribute('aria-expanded', isOpen);
});
```
## Advanced Layout & Geometry in CSS

- Mobile State: The active tooltip expands over the parent padding of .description, spanning the full width and height of the footer using negative positioning offsets (top, bottom, left, right).

- Stacking Context: The trigger button is kept on top of the dark share bar using z-index: 2, allowing users to close the tooltip by clicking the same button again.

- Desktop Layout: The tooltip transforms into a popover speech bubble with a directional indicator created via an ::after pseudo-element with transform: rotate(45deg).

```css
/* Desktop Arrow Indicator */
#share-tooltip.is-active::after {
  content: "";
  display: block;
  background-color: var(--Very-Dark-Grayish-Blue);
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  position: absolute;
  bottom: -0.6rem;
  right: 7.3rem;
}```

Frontend Mentor - SinTim8