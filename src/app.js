  /*eslint-env jquery*/

$(document).ready(function () {

let lightsOn = $('.lightsOn');
let lights =   $( ".lights" );
let speed = [];
let time;

// Hides the lights on the initial page until they press "PLAY"
// Did not use the enter button since the landing page will be on the same html file
$('.lightsOn').hide();

// create enter button for landing page
//   const enterbtn = ('#enter');
//   $('enter').click(function() {
//     window.location.href = 'index.html';
// });

// create play button on index.html page
// When you press play the sequence will start
// after sequence has faded in it will then fade out at random instances
// remember to put e into the function();

// Create event button so player can get time
// When user clicks on the screen they will get there speed
// Instead of function addTime immeaditely appearing in console.log
// I want it to fade out and then have a mouse event
// to initiate function addTime to grab the milliseconds
// and place it into the global array called speed

  let addTime = function() {;
    let d = Date.now();
    console.log(d);
    // e.stopPropagation();
    speed.push(d);
    console.log(speed);
}

function play () {

  $('#play').on('click', function() {
 ($('.lightsOn').delay(1000).fadeIn(2000).delay(10000).fadeOut(500, addTime))


 // randomized delay
 // Math.ceil(Math.random() * 10000)
 // (Math.floor(Math.random() * 10000))
 // Math.random() * 4000 + 1000
});
}
  play();



// create reset button on index.html page
  $('#reset').click(function() {
    window.location.href = 'index.html';
});
  });
