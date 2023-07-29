
function setNavVisibility(){
   let nav = document.querySelector('#header-container nav');
   let navVisibility = nav.style.visibility;

   nav.style.visibility = navVisibility == "visible" ? 'hidden' : "visible";
}
