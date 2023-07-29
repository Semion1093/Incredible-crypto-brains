
function toggleNavVisibility(){
   var nav = document.querySelector('.header-container nav');
   var navVisibility = nav.style.visibility;

   nav.style.visibility = navVisibility == "visible" ? 'hidden' : "visible";
}