const cards = Array.from(document.querySelectorAll(".pr-card")).reverse();
const leftArrows = document.getElementById("left_arrows")
const rightArrows = document.getElementById("right_arrows")

const hasClass = (item, className) => {
  return item.className.includes(className)
}

const addClass = (item, className) => {
  return item.classList.add(className);
}

const removeClass = (item, className) => {
  return item.classList.remove(className);
}

const findSelected = ()=> {
  return cards.findIndex((item) => hasClass(item, "pr-selected"))
}

leftArrows.addEventListener("click", ()=>{
    let currentIndex = findSelected();
    if(currentIndex == 0) return;

    removeClass(rightArrows, "novision");

    const lastSelected = cards[currentIndex];
    removeClass(lastSelected, "pr-selected");

    currentIndex -= 1;
    if(currentIndex == 0) {
      addClass(leftArrows, "novision");
    }   

    const currentSelected = cards[currentIndex];
    addClass(currentSelected, "pr-selected");
})

rightArrows.addEventListener("click", ()=>{
    let currentIndex = findSelected();
    if(currentIndex == cards.length - 1) return;

    removeClass(leftArrows, "novision");

    const lastSelected = cards[currentIndex];
    removeClass(lastSelected, "pr-selected");

    currentIndex += 1;
    if(currentIndex == cards.length - 1) {
      addClass(rightArrows, "novision");
    }   

    const currentSelected = cards[currentIndex];
    addClass(currentSelected, "pr-selected");
})

