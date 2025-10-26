Js

function toggleMenu() {
    const menu = document.getElementById("side-menu");
    const overlay = document.getElementById("ovet lay");

    MenuBtn.addEventListener("click",()=> {
        menu.classlist.toggle("open");
        overlay.classlist.toggle("show");
    });

    overlay..addEventListener("click", ()=> {
        menu.classlist.remove("open");
        overlay.classlist.remove("show");
    });


    

    
    

    



