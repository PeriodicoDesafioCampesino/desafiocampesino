(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


		
document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    let instancia_sidenav = M.Sidenav.init(sidenav,{});    
    let dropdowns = document.querySelectorAll('.dropdown-trigger');
    let instancia_dropwdown = M.Dropdown.init(dropdowns, {
    hover:false});
  });