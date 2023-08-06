function setNavVisibility() {
  let nav = document.querySelector("#header-container nav");
  let navVisibility = nav.style.visibility;

  nav.style.visibility = navVisibility == "visible" ? "hidden" : "visible";
}

const gap = 30;

function doReviewSlide(id) {
  const newFirstCard = document.querySelector("#reviews .card-item:first-child");
  let paginationButtons = document.querySelectorAll("#reviews .pagination-item");
  let marginValue = newFirstCard.clientWidth;

  doSlide(newFirstCard, id, marginValue, paginationButtons);
}

function doReasonSlide(id) {
  const newFirstCard = document.querySelector("#buy-reasons .reasons-card .card-item:first-child");
  let paginationButtons = document.querySelectorAll("#buy-reasons .reasons-card .pagination-item");
  let marginValue = newFirstCard.clientWidth;

  doSlide(newFirstCard, id, marginValue, paginationButtons);
}

function doSlide(newFirstCard, id, marginValue, paginationButtons) {
  newFirstCard.style.marginLeft = (-marginValue - gap) * id + "px";

  for (const item of paginationButtons) {
    item.className =
      item.id == id ? "pagination-item white" : "pagination-item grey";
  }
}

function expandElement(id) {
  let button = document.getElementById(id);
  let question = button.parentElement.parentElement.childNodes[3];

  let rotation = button.style.transform;
  button.style.transform =
    rotation != "rotate(-45deg)" ? "rotate(-45deg)" : "rotate(0deg)";

  let display = question.style.display;
  question.style.display = display == "block" ? "none" : "block";
}
