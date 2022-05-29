//Define constants for colors
const home = document.getElementById("home");
const red = document.getElementById("red");
const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const pink = document.getElementById("pink");


// define the body to target to change color
const bodyElement = document.body;

// navigationBar
const menuElement = document.menu;

// select sidebar to change width
const getSideBar = document.querySelector(".menu");
// select <ul> to change visibility
const getSideBarNav = document.querySelector(".menu nav");
// select listed items to change opacity
const getColorElement = document.getElementsByClassName("color");

// set elements to closed menu
let closeMenu = function (){
    getSideBar.style.width = "80px, black";
    
    for (let i=0; i < getColorElement.length; i++) {
        getColorElement[i].style.opacity ="0";
    }
    getSideBarNav.style.visibility = "hidden";
};

//add eventlistener to button top open the menu
let menuButton = document.querySelector(".menuToggle")
menuButton.addEventListener("mouseover", function(){
    openMenu();
});
menuButton.addEventListener("click", function(){
    openMenu();
});
getSideBar.addEventListener("mouseleave", function(){
    closeMenu();
});

let openMenu = function() {
    getSideBarNav.style.visibility = "visible";
    getSideBar.style.width = "300px";
    
    for (let i=0; i < getColorElement.length; i++) {
        getColorElement[i].style.opacity = "1";
    };
 
    red.addEventListener("click", function () {
        bodyElement.style.backgroundColor = "red";
        changeText("red.");
        closeMenu();
    });
    
    orange.addEventListener("click", function () {
        bodyElement.style.backgroundColor = "orange";
        changeText("orange.");
        closeMenu();
    });
    
    yellow.addEventListener("click", function () {
        bodyElement.style.backgroundColor = "yellow";
        changeText("yellow.");
        closeMenu();
    });
    
    green.addEventListener("click", function () {
        bodyElement.style.backgroundColor = "green";
        changeText("green.");
        closeMenu();
    });
           
    blue.addEventListener("click", function () {
        bodyElement.style.backgroundColor = "blue";
        changeText("blue.");
        closeMenu();
    });
    
    purple.addEventListener("click", function () {
        bodyElement.style.backgroundColor = "purple";
        changeText("purple.");
        closeMenu();
    });

    pink.addEventListener("click", function () {
        bodyElement.style.backgroundColor = "magenta";
        changeText("pink.");
        closeMenu();
    })

}; 

//Hover a color
red.addEventListener("mouseover", function(){
    red.style.opacity = ".7";
});
red.addEventListener("mouseleave", function(){
    red.style.opacity = "1";
});
orange.addEventListener("mouseover", function(){
    orange.style.opacity = ".7";
});
orange.addEventListener("mouseleave", function(){
    orange.style.opacity = "1";
});
yellow.addEventListener("mouseover", function(){
    yellow.style.opacity = ".7";
});
yellow.addEventListener("mouseleave", function(){
    yellow.style.opacity = "1";
});
green.addEventListener("mouseover", function(){
    green.style.opacity = ".7";
});
green.addEventListener("mouseleave", function(){
    green.style.opacity = "1";
});
blue.addEventListener("mouseover", function(){
    blue.style.opacity = ".7";
});
blue.addEventListener("mouseleave", function(){
    blue.style.opacity = "1";
});
purple.addEventListener("mouseover", function(){
    purple.style.opacity = ".7";
});
purple.addEventListener("mouseleave", function(){
    purple.style.opacity = "1";
});
pink.addEventListener("mouseover", function(){
    pink.style.opacity = ".7";
});    
pink.addEventListener("mouseleave", function(){
    pink.style.opacity = "1";
});


// keyboard

//Change text when picking a color
let colorPicked = document.getElementById("tekstColor");
let changeText = function (clr) {
    colorPicked.textContent = "You picked " + clr;
};

