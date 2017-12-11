var createImage = document.createElement("img");
var createSpan = document.createElement("span");




function slackGameImage() {
    var guessImage = document.getElementById("guess-the-image");

    createImage.setAttribute("src","assets/images/slack-logo.SVG");
    createImage.setAttribute("width", "300px");
    // guessImage.innerHTML = "";
    guessImage.appendChild(createImage);

    document.getElementById("letter1").textContent = "__ ";
    document.getElementById("letter2").textContent = "__ ";
    document.getElementById("letter3").textContent = "__ ";
    document.getElementById("letter4").textContent = "__ ";
    document.getElementById("letter5").textContent = "__ ";
    
}

document.onkeyup = function (event) {
    var userGuess = event.key
    
    if (event.key === "s") {
        document.getElementById("letter1").textContent = "S ";
    } 
    else if (event.key === "l") {
        document.getElementById("letter2").textContent = "L ";
    }
    else if (event.key === "a") {
        document.getElementById("letter3").textContent = "A ";
    }
    else if (event.key === "c") {
        document.getElementById("letter4").textContent = "C ";
    }
    else if (event.key === "k") {
        document.getElementById("letter5").textContent = "K ";
    }
    else {
        
    }
}

// document.onkeyup = function (event) {
//     var userGuess1 = event.key

//     if (userGuess1 === "l") {
//         var letter2 = "L";
//         var currentLetter = document.getElementById("letter-guess");
//         currentLetter.textContent = letter1 + letter2 + letter3 + letter4 + letter5;            
//     }
// }

// document.onkeyup = function (event) {
//     var userGuess2 = event.key

//     if (userGuess === "a") {
//         var letter3 = "A";
//         currentLetter.textContent = letter1 + letter2 + letter3 + letter4 + letter5;            
//     }
// }

// document.onkeyup = function (event) {
//     var userGuess3 = event.key

//     if (userGuess === "c") {
//         var letter4 = "C";
//         currentLetter.textContent = letter1 + letter2 + letter3 + letter4 + letter5;            
//     }
// }

// document.onkeyup = function (event) {
//     var userGuess4 = event.key

//     if (userGuess === "k") {
//         var letter5 = "K";
//         currentLetter.textContent = letter1 + letter2 + letter3 + letter4 + letter5;            
//     }
// }


function twitterGameImage() {
    var guessImage = document.getElementById("guess-the-image");
    var currentLetter = document.getElementById("letter-guess");

    createImage.setAttribute("src","assets/images/twitter-logo.JPG");
    createImage.setAttribute("width", "300px");
    // guessImage.innerHTML = "";
    guessImage.appendChild(createImage);

    currentLetter.textContent = "__ __ __ __ __ __ __";
}

function githubGameImage() {
    var guessImage = document.getElementById("guess-the-image");
    var currentLetter = document.getElementById("letter-guess");

    createImage.setAttribute("src","assets/images/github-logo.PNG");
    createImage.setAttribute("width", "300px");
    // guessImage.innerHTML = "";
    guessImage.appendChild(createImage);

    currentLetter.textContent = "__ __ __ __ __ __";
}




// $(document).ready(function() {
    
//           // Gets Link for Theme Song
//           var audioElement = document.createElement("audio");
//           audioElement.setAttribute("src", "Assets/captainplanet24.mp3");
    
//           // Theme Button
//           $(".theme-button").on("click", function() {
//             audioElement.play();
//           });
    
//           $(".pause-button").on("click", function() {
//             audioElement.pause();
//           });
    
//           // Size Buttons
//           $(".normal-button").on("click", function() {
//             $(".captain-planet").animate({ height: "300px" });
//           });
    
//           $(".grow-button").on("click", function() {
//             $(".captain-planet").animate({ height: "500px" });
//           });
    
//           $(".shrink-button").on("click", function() {
//             $(".captain-planet").animate({ height: "100px" });
//           });
          
//           $(".rotate-button").on("click", function() {
//             $(".captain-planet").toggleClass("flip");
//           });
         
     
    
//           // Visibility Buttons
//           $(".vis-button").on("click", function() {
//             $(".captain-planet").animate({ opacity: "1" });
//           });
    
//           $(".invis-button").on("click", function() {
//             $(".captain-planet").animate({ opacity: "0.05" });
//           });
    
//           // Move Buttons
//           $(".up-button").on("click", function() {
//             $(".captain-planet").animate({ top: "-=200px" }, "normal");
//           });
    
//           $(".down-button").on("click", function() {
//             $(".captain-planet").animate({ top: "+=200px" }, "normal");
//           });
    
//           $(".left-button").on("click", function() {
//             $(".captain-planet").animate({ left: "-=200px" }, "normal");
//           });
    
//           $(".right-button").on("click", function() {
//             $(".captain-planet").animate({ left: "+=200px" }, "normal");
//           });
    
//           $(".back-button").on("click", function() {
//             $(".captain-planet").animate({ top: "50px", left: "80px" }, "fast");
//           });
    
//           // Move Buttons (Keyboard Down)
//           $(document).keyup(function(e) {
//             switch (e.which) {
//               case 40:
//                 $(".captain-planet").animate({ top: "+=200px" }, "normal");
//             }
//           });
    
//           // Move Buttons (Keyboard Right)
//           $(document).keyup(function(e) {
//             switch (e.which) {
//               case 39:
//                 $(".captain-planet").animate({ left: "+=200px" }, "normal");
//             }
//           });
    
//           // Move Buttons (Keyboard Up)
//           $(document).keyup(function(e) {
//             switch (e.which) {
//               case 38:
//                 $(".captain-planet").animate({ top: "-=200px" }, "normal");
//             }
//           });
    
//           // Move Buttons (Keyboard Left)
//           $(document).keyup(function(e) {
//             switch (e.which) {
//               case 37:
//                 $(".captain-planet").animate({ left: "-=200px" }, "normal");
//             }
//           });
//         });
    