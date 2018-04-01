// eslint-env jquery

$(document).ready(function () {

let lightsOn = $('.lightsOn');
let lights =   $( '.lights' );
let speed = [];
let timeStamps;
let started = false;
let avg;

// made a tags and class for storing time

  let tb = $('h1').attr('class', 'title');
  $('body').append(tb);

  let dm = $('h3').attr('class', 'milli');
  $('body').append(dm);
  // let para = $('p').attr('class', 'time');
  // $('body').append(para);
  // $('.time').append(speed);
  // $('time').append(speed);
  // $('p').append(speed);

// Hides the lights on the initial page until they press "PLAY"
// Did not use the enter button since the landing page will be on the same html file
// using the .hide() function
$('.lightsOn').hide();
// $('.title').hide();


  let addTime = function() {
    const d = performance.now();
    // const m = d.getMilliseconds();
    // e.stopPropagation();
    speed.push(d);
    // console.log(speed);

// for every time the player reacts to the lights going off
// the time will be posted into the empty array named speed
// and printed out onto the screen

    for (let j = 0; j < lightsOn.length; j++) {
      $('body').on('mousedown', '.lightsOn', function(event) {

    alert('I work');

});
    }

    for ( let i = 0; i < speed.length; i++) {
        let stamps = $('<p>').text(parseInt(speed[i]));
        $('body').append(stamps);
        // $('.time').append($(speed[i]));
        // console.log(timeStamps);
    }

    // $(this).remove();
    $('.time').text(` ${d}`);

}


// create play button on index.html page
// When you press play the sequence will start
// after sequence has faded in it will then fade out at random instances
// remember to put e into the function();

function play () {

  $('#play').on('click', function() {
// return performance.now();
  ($('.lightsOn').delay(1000).fadeIn(1000).delay(10000).fadeOut(500, addTime));

 // randomized delay
 // Math.ceil(Math.random() * 10000)
 // (Math.floor(Math.random() * 10000))
 // Math.random() * 4000 + 1000
});

}
  play();

// Create event button so player can get time
// When user clicks on the screen they will get there speed
// Instead of function addTime immeaditely appearing in console.log
// It will fade out and then have a mouse event
// to initiate function addTime to grab the milliseconds
// and place it into the global array called speed

function pressed () {

}
pressed();

// create reset button on index.html page
  $('#reset').click(function() {
    window.location.href = 'index.html';
});
  });
