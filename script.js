Js

function openMenu(){
  document.getElementById("side.menu").style.width="75%";
}

function closedMenu(){
  document.getElementById("side.menu").style.width="0";
}
  document.addEventlistener('click', function(event){
    const menu = document.getElementById("side-menu");
     const icon = document.querySelector("menu-icon");
    if(!menu.contains(event.target) && !
       icon.contains(event. target)) {
      closeMenu();
    }
    ));
  

    


    

    
    

    



