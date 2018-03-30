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
function play () {

  $('#play').on('click', function() {
 ($('.lightsOn').delay(1000).fadeIn(2000).delay(10000).fadeOut(1000));

 // randomized delay
 // (Math.floor(Math.random() * 10000))
});
}
  play();

// Create event button so player can get time
// When user clicks on the screen they will get there speed
//

// addEventListener('mousedown', event => {
//   if (event.button === 0) tap(event);
// }, {passive: false});


// create reset button on index.html page
  $('#reset').click(function() {
    window.location.href = 'index.html';
});
  });
