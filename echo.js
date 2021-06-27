
// Resize the pages depending of the window size
const pages = document.getElementsByClassName("page");

function ResizePages() {
    for (let page of pages){
        page.style.height = window.innerHeight + "px";
        page.style.width = window.innerWidth  - 17 + "px";
    }
    // Resize fixed objects page
    document.getElementsByClassName("fixed_objects")[0].style.height = window.innerHeight - 40 + "px";
}

window.addEventListener("resize", ResizePages);


// Scroll to next/previous page when clicking on arrow
document.getElementById("down-arrow").addEventListener("click", function(){
    if (document.getElementsByTagName("html")[0].scrollTop < window.innerHeight){
        window.scrollTo(0, window.innerHeight);
    } else if (document.getElementsByTagName("html")[0].scrollTop <= 2 * window.innerHeight){
        window.scrollTo(0, 2 * window.innerHeight);
    }
});

document.getElementById("up-arrow").addEventListener("click", function(){
    if (document.getElementsByTagName("html")[0].scrollTop <= window.innerHeight){
        window.scrollTo(0, 0);
    } else if (document.getElementsByTagName("html")[0].scrollTop <= 2 * window.innerHeight){
        window.scrollTo(0, window.innerHeight);
    }
});


// Open/Close the menu whan clicking on the burger button
document.getElementById("burger_menu").addEventListener("click", function(){
    if (!open_menu){
        open_menu = true;
        document.getElementById("burger_menu").classList.add("open");
        document.getElementsByTagName("nav")[0].classList.add("open");
    } else {
        open_menu = false;
        document.getElementById("burger_menu").classList.remove("open")
        document.getElementsByTagName("nav")[0].classList.remove("open")
    }
});


// At setup, resize the pages to the window size
ResizePages();
// At setup, set value as closed_burger_menu
let open_menu = false