// Go to contact section 
function myFunctionContact() {
    document.querySelector('.contact-form').scrollIntoView({behavior: 'smooth'});
}

// window.addEventListener('scroll', function() {
//     var y = window.scrollY;
//     if (y > 380) {
//         console.log(y);
//         $("span:nth-child(n)").css("visibility", "visible");
//         $("span:nth-child(n)").css("animation", "fadeIn 1s ease-in .7s forwards");
//     }
// });

// // Animation Remover
var textAnimationRemove = setInterval( function() {
    $(document).ready(function() {
        $("span:nth-child(n)").css("animation", "none");
        $("span:nth-child(n)").css("opacity", "1");
    });
}, 5700);

// Cursor Trailing
// var dots = [], mouse = {
//     x: 0, y: 0
// };
// var Dot = function() {
//     this.x = 0;
//     this.y = 0;
//     this.node = (function(){
//         var n = document.createElement("div");
//         n.className = "trail";
//         document.body.appendChild(n);
//         return n;
//     }());
// };

// Dot.prototype.draw = function() {
//     this.node.style.left = this.x + "px";
//     this.node.style.top = this.y + "px";
// };

// for (var i = 0; i < 12; i++) {
//     var d = new Dot();
//     dots.push(d);
// }

// function draw() {
//     var x = mouse.x,
//     y = mouse.y;
//     dots.forEach(function(dot, index, dots) {
//         var nextDot = dots[index + 1] || dots[0];
//         dot.x = x;
//         dot.y = y;
//         dot.draw();
//         x += (nextDot.x - dot.x) * .6;
//         y += (nextDot.y - dot.y) * .6;
//     });
// }

// addEventListener("mousemove", function(event) {
//     mouse.x = event.pageX;
//     mouse.y = event.pageY;
// });

// function animate() {
//     draw();
//     requestAnimationFrame(animate);
// }animate();



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

// Contact Form 3D Hover
let hover3D = document.getElementById("form-image");
const height = hover3D.clientHeight;
const width = hover3D.clientWidth;
hover3D.addEventListener("mousemove", handleMove);

function handleMove(e) {
    const xVal = e.layerX;
    const yVal = e.layerY;
    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);
    const string = "perspective(500px) scale(1.1) rotateX(" + xRotation + "deg) rotateY(" + yRotation + "deg)";
    hover3D.style.transform = string;
}
hover3D.addEventListener("mouseout", function() {
    hover3D.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
})

hover3D.addEventListener("mousedown", function() {
    hover3D.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
})

hover3D.addEventListener("mouseup", function() {
    hover3D.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
})
    
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

// Count Seconds
// function time() {
//     var timsss;
//     var seconds = 0;
//     seconds += 1;
//     timsss = seconds;
//     console.log(timsss);
//     console.log("123");
//     return timsss
// }

// Sidebar open on click and close after interval
// let btn = document.querySelector('#sidebar-div-id');
// var element = document.getElementById("sidebar-div-id");
// btn.addEventListener('click',(event) => {
//     element.classList.remove("sidebarSmall");
//     $("#contact-div-id").addClass("small-content");
//     $("#contact-div-id").removeClass("big-content");
//     setTimeout(function() {
//         element.classList.add("sidebarSmall");
//         $("#contact-div-id").removeClass("small-content");
//         $("#contact-div-id").addClass("big-content"); 
//     }, 3000)
// });

// Sidebar Hover open close
// var element = document.getElementById("sidebar-div-id");
//     element.addEventListener("mouseover", func, false);
//     element.addEventListener("mouseout", func1, false);

// function func() {  
//     element.classList.remove("sidebarSmall");
//     $("#contact-div-id").addClass("small-content");
//     $("#contact-div-id").removeClass("big-content"); 

// }
// function func1() {
//     element.classList.add("sidebarSmall");
//     $("#contact-div-id").removeClass("small-content");
//     $("#contact-div-id").addClass("big-content"); 
// }

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

// Digital Clock
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);

}showTime();