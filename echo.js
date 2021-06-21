const pages = document.getElementsByClassName("page");

function ResizePages() {
    for (let page of pages){
        page.style.height = window.innerHeight + "px";
        page.style.width = window.innerWidth  - 17 + "px";
    }
}


window.addEventListener("resize", ResizePages);


document.getElementById("down-arrow").addEventListener("click", function(){
    if (document.getElementsByTagName("html")[0].scrollTop < window.innerHeight){
        window.scrollTo(0, window.innerHeight);
    } else if (document.getElementsByTagName("html")[0].scrollTop <= 2 * window.innerHeight){
        window.scrollTo(0, 2 * window.innerHeight);
    }
});

document.getElementById("up-arrow").addEventListener("click", function(){
    if (document.getElementsByTagName("html")[0].scrollTop <= window.innerHeight){
        console.log("it should work")
        window.scrollTo(0, 0);
    } else if (document.getElementsByTagName("html")[0].scrollTop <= 2 * window.innerHeight){
        window.scrollTo(0, window.innerHeight);
    }
});

ResizePages();