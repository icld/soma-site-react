handleTextChange("social", "Instagram←", "Social");

handleTextChange("contact", "Msg me here ←", "Contact");

handleTextChange("gear", "Gear ←", "Gear");
handleTextChange("discography", "Discography ←", "Discography");
handleTextChange("about", "About ←", "About");

function handleTextChange(element, msg1, msg2) {
  const elmt = document.querySelector(`.${element}`);
  elmt.addEventListener("mouseover", (e) => (elmt.textContent = msg1));
  elmt.addEventListener("mouseleave", (e) => (elmt.textContent = msg2));
}

const h1 = document.querySelector("h1");
// animateLetterOver(h1)

function animateLetterOver(wordToAnimate) {
  wordToAnimate.innerHTML = wordToAnimate.innerText
    .split("")
    .map((letter, idx) => `<span class='spanJump'>${letter}</span>`)
    .join("");

  const spans = document.querySelectorAll(".spanJump");

  spans.forEach((span) => {
    span.addEventListener("mouseover", (e) => {
      span.classList.add("span-fx");
    });
    span.addEventListener("mouseleave", (e) => {
      setTimeout(() => span.classList.remove("span-fx"), 100);
    });
    span.addEventListener("click", (e) => {
      spans.forEach((span) => {});
    });
  });
}
