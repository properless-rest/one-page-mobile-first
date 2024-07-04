

function openNav() {
    title.style.display = "none";
    navbar.style.display = "initial";
    header.style.backgroundColor = rootStyle.getPropertyValue('--titles');
    hamburger.style.filter = "invert(100%)";

    navClosed = false;
}


function closeNav() {
    title.style.display = "initial";
    navbar.style.display = "none";
    header.style.backgroundColor = rootStyle.getPropertyValue('--bg-header');
    hamburger.style.filter = "invert(0)";

    navClosed = true;
}


function expandNav() {
    closeNav()
    navbar.style.display = "initial";
    hamburger.style.display = "none";
    
    console.log("expanding")
    navExpanded = true;
}


function narrowNav() {
    navbar.style.display = "none";
    hamburger.style.display = "initial";
    
    console.log("narrowing")
    navExpanded = false;
}


const hamburger = document.getElementById("hamburger");
const title = document.getElementById("title");
const navbar = document.getElementById("navbar");
const header = document.querySelector("header");

const submitBtn = document.getElementById("form-submit-btn");

const rootStyle = getComputedStyle(document.documentElement);

let navClosed = true;
let navExpanded = false;

hamburger.addEventListener(
    "click",
    () => {
        if (navClosed) openNav()
        else closeNav();
    }
)

submitBtn.addEventListener(
    "click",
    (e) => { e.preventDefault(); alert("Form submitted...") }
)

window.addEventListener(
    "resize",
    () => {
        // will only get executed on the specified screen width passing
        if (window.innerWidth > 599 && !navExpanded) expandNav()
        else if (window.innerWidth < 600 && navExpanded) narrowNav();
    }
)
