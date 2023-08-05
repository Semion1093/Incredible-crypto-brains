
function setNavVisibility() {
   let nav = document.querySelector('#header-container nav');
   let navVisibility = nav.style.visibility;

   nav.style.visibility = navVisibility == "visible" ? 'hidden' : "visible";
}

function expandElement(id) {
   let button = document.getElementById(id);
   let question = button.parentElement.parentElement.childNodes[3];

   let rotation = button.style.transform;
   button.style.transform = rotation != "rotate(-45deg)" ? "rotate(-45deg)" : "rotate(0deg)";

   let display = question.style.display;
   question.style.display = display == "block" ? "none" : "block";
}

function doSlide(id) {
   let paginationButtons = document.querySelectorAll('#reviews .pagination-item');

   for (const item of paginationButtons) {
      item.className = item.id == id ? 'pagination-item white' : 'pagination-item grey';
   }
}

