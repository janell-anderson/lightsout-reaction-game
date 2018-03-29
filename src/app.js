  /*eslint-env jquery*/

$(document).ready(function () {


$('.lightsOn').hide();

// create enter button for landing page
  const enterbtn = ('#enter');
  $('enter').click(function() {
    window.location.href = 'index.html';
});

// create play button on index.html page
// When you press play the sequence will start
const lights = [];
  $('#play').on('click', function() {
    $('.lightsOn').delay(1000).fadeIn(2000)

// after sequence has faded in it will then fade out at random instances

// setInterval()

});

// Create event button so player can get time
$( ".lightsOn" ).click(function() {
  $( ".lights" ).mousedown().delay(1000).fadeIn(2000);
});

setInterval(function(){ alert("Hello"); }, 3000);

// addEventListener('mousedown', event => {
//   if (event.button === 0) tap(event);
// }, {passive: false});


// create reset button on index.html page
  $('#reset').click(function() {
    window.location.href = 'index.html';
});
  });
