# Frontend Mentor – Advice Generator App Solution

This is my solution to the [Advice Generator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). This project helped me practice working with APIs, handling asynchronous JavaScript, and building responsive layouts.


## Table of Contents

* [Overview](#overview)
  * [The Challenge](#the-challenge)
  * [Screenshot](#screenshot)
  * [Links](#links)
* [My Process](#my-process)
  * [Built With](#built-with)
  * [What I Learned](#what-i-learned)
  * [Continued Development](#continued-development)
  * [Useful Resources](#useful-resources)
* [Author](#author)


## Overview

### The Challenge

Users should be able to:

* View the optimal layout for the app depending on their device’s screen size
* See hover states for all interactive elements
* Generate a new piece of advice by clicking the dice icon

---

### Screenshot

![Advice Generator App Screenshot] (./screenshot.png)

---

### Links

* **Solution URL:** [https://www.frontendmentor.io/solutions/advice-generator-app-using-html-css-and-js](https://www.frontendmentor.io/solutions/advice-generator-app-using-html-css-and-js)
* **Live Site URL:** [https://your-username.github.io/advice-generator/](https://Divine25-dev.github.io/advice-generator/)

---

## My Process

### Built With

* Semantic HTML5
* CSS custom properties
* Flexbox
* Mobile-first workflow
* Vanilla JavaScript
* Advice Slip API

---

### What I Learned

While working on this project, I learned how to:

* Fetch data from an external API using `fetch` and `async/await`
* Handle API caching issues using `cache: "no-cache"`
* Dynamically update the DOM using JavaScript
* Improve UI interaction using hover effects and positioning

Example of the API fetch logic used:

```js
async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache"
  });
  const data = await response.json();
  adviceText.textContent = `"${data.slip.advice}"`;
}
```

---

### Continued Development

In future projects, I would like to:

* Improve error handling and loading states
* Explore animations for better user experience
* Build similar projects using frameworks like React
* Practice accessibility improvements

---

### Useful Resources

* [Advice Slip API Documentation](https://api.adviceslip.com/) – Used to generate random advice
* [Frontend Mentor](https://www.frontendmentor.io/) – Great platform for real-world frontend practice
* [MDN Web Docs](https://developer.mozilla.org/) – Helpful reference for JavaScript and CSS concepts

---

## Author

* **Name:** Divine Okorie
* **Frontend Mentor:** [https://www.frontendmentor.io/profile/yourusername](https://www.frontendmentor.io/profile/dee__baby_)
* **GitHub:** [https://github.com/your-username](https://github.com/Divine25-dev)

---
