
// Scroll top portrait mode
function myFunctionOrientationSidebar() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $("#sidebar-div-id").addClass("sidebar-orientation");
    $("#sidebar-div-id").removeClass("sidebar");
}

// Orientation Check on reload 
var executed = false;
var orientationVariable; // Portrait
var Orient = setInterval( function() {
    if (!executed) {
        executed = true;
        orientationCheck();
    }
}, 1000);
function orientationCheck() {
    orientationVariable = screen.orientation.angle;
    var element = document.getElementById("sidebar-div-id");
    if (orientationVariable === 90) {
        element.classList.remove("sidebar-orientation");
    }
    else {
        element.classList.add("sidebar-orientation");
    }
}
    

// Switch Orientation Check 
let portrait = window.matchMedia("(orientation: portrait)");
portrait.addEventListener("change", function(e) {
    var element = document.getElementById("sidebar-div-id");
    if(e.matches) {
        // Portrait mode
        element.classList.remove("sidebarSmall");
        element.classList.remove("sidebar");
        element.classList.add("sidebar-orientation");
    } else {
        // Landscape
        element.classList.remove("sidebar-orientation");
        element.classList.add("sidebar");   
    }
});
    
// Sidebar open and close with button   
var count = 0;
function myFunction() {
    var element = document.getElementById("sidebar-div-id");
    if (count === 1) {
        element.classList.add("sidebarSmall");
        $("#contact-div-id").removeClass("small-content");
        $("#contact-div-id").addClass("big-content");
        count = 0; 
    }
    else {
        count = 1;
        element.classList.remove("sidebarSmall");
        $("#contact-div-id").addClass("small-content");
        $("#contact-div-id").removeClass("big-content");   
        setTimeout(function() {
            element.classList.add("sidebarSmall");
            $("#contact-div-id").removeClass("small-content");
            $("#contact-div-id").addClass("big-content"); 
        }, 5000)
    } 
}

// Sidebar close on scroll
window.onscroll = function (e) {
    var element;
    var position = $(window).scrollTop(); 
    element = document.getElementById("sidebar-div-id");
    if( position === 0) {
        element.classList.remove("sidebarSmall");
        $("#contact-div-id").addClass("small-content");
        $("#contact-div-id").removeClass("big-content"); 
    }
    else {
        element.classList.add("sidebarSmall");
        $("#contact-div-id").removeClass("small-content");
        $("#contact-div-id").addClass("big-content"); 
    }
}

// Modals
var modalBtn = document.querySelectorAll('button.modal-btn');
var modal = document.querySelectorAll('.modal-overlay');
var close = document.querySelectorAll('.close-btn');
// let slide = document.querySelectorAll('.slides');

for (var i = 0; i < modalBtn.length; i++) {
    modalBtn[i].onclick = function(e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.classList.add('open-modal');
    }
    close[i].onclick = function(e) {
        modal.classList.remove('open-modal');
    }
}