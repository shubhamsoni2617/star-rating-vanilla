// The Challenge: Build a reusable Star Rating Widget for a web form.

// Key Requirements:

// Selection & Submission: Users should be able to click stars to select a rating, which must be correctly submitted via a standard HTML form.

// Visual Feedback: Implement hover states where stars up to the cursor's position highlight (e.g., turn gold) and reset when the mouse leaves.

// Reusability: The widget should be designed so it can be used multiple times on the same page with different configurations.

// Implementation: Use Vanilla JavaScript, HTML, and CSS to handle DOM manipulation and event listeners for click, mouseenter, and mouseleave.

import "./styles.css";

let starHtml = Array(5)
  .fill("")
  .map((el, idx) => {
    return `<div class="star" id="${idx + 1}"></div>`;
  })
  .join("");

document.getElementById("app").innerHTML = starHtml;

let allStars = document.querySelectorAll(".star");
// let hoveredStarId = null;

let handleHighlightStars = (hoveredStarId, isAddClass) => {
  allStars.forEach((star, idx) => {
    star.classList.remove("gold-star");
    if (isAddClass && idx < hoveredStarId) {
      star.classList.add("gold-star");
    }
  });
};

allStars.forEach((star) => {
  star.addEventListener("mouseover", (event) => {
    handleHighlightStars(event.target.id, true);
  });

  star.addEventListener("mouseleave", (event) => {
    console.log(event);
    handleHighlightStars(event.target.id, false);
  });
});
