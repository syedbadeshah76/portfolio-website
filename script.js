
let typed = new Typed(".auto-type", {
    strings: ["PROGRAMMER", "DESIGNER", "CODER"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});


document.addEventListener('DOMContentLoaded', function () {
    const cursor = document.getElementById('customCursor');

    // Function to update cursor position
    function updateCursorPosition(e) {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
        cursor.style.display = 'block'; // Show cursor
    }

    // Function to hide cursor
    function hideCursor() {
        cursor.style.display = 'none'; // Hide cursor
    }

    // Show cursor on mouse move
    document.addEventListener('mousemove', updateCursorPosition);

    // Hide cursor when mouse leaves window
    document.addEventListener('mouseleave', hideCursor);

    // Show cursor when mouse enters window
    document.addEventListener('mouseenter', updateCursorPosition);
});

// sercive container//

document.addEventListener('DOMContentLoaded', function () {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const moonIcon = document.getElementById('moon');
    const sunIcon = document.getElementById('sun');
    
    moonIcon.addEventListener('click', function () {
        document.body.classList.add('dark-mode');
    });

    sunIcon.addEventListener('click', function () {
        document.body.classList.remove('dark-mode');
    });
});


//select toggle button
let toggle = document.getElementById("mode");
toggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');  
});

document.getElementById('menu-icon').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('visible');
});
