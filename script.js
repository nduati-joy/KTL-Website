<script>
    function toggleMenu(){
        const menu = document.getElementById("sideMenu");
        const overlay = document.getElementById("overlay");


        if (menu.style.width ==="75%") {
            menu.style.width = "0";
            overlay.style.width = "0";
        }
        else{
            menu.style.width = "75%";
            overlay.style.width = "100%";
        }
    }
    

    
</script>


