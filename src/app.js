  /*eslint-env jquery*/

$(document).ready(function () {

let lightsOn = $('.lightsOn');
let lights =   $( ".lights" );
let speed = [];
let time;
let avg;

// Hides the lights on the initial page until they press "PLAY"
// Did not use the enter button since the landing page will be on the same html file
// using the .hide() function
$('.lightsOn').hide();

// create enter button for landing page
//   const enterbtn = ('#enter');
//   $('enter').click(function() {
//     window.location.href = 'index.html';
// });

// made a h1 tag and class for storing time

  let dm = $('h1').attr('class', 'milli');
  $('body').append(dm);

  let para = $('p').attr('class', 'time');

  $('body').append(para);
  $('stime').append(speed);
  // $('p').append(speed);


  let addTime = function() {;
    const d = Date.now();
    // const m = d.getMilliseconds();
    // e.stopPropagation();
    speed.push(d);
    console.log(speed);
}

// create play button on index.html page
// When you press play the sequence will start
// after sequence has faded in it will then fade out at random instances
// remember to put e into the function();

function play () {

  $('#play').on('click', function() {

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

// var down = false;
// $(document).mousedown(function() {
//     down = true;
// }).mouseup(function() {
//     down = false;
// });
// $(".lightsOn").mouseout(function() {
//     if(down) {
//         console.log("down");
//     }
//     else {
//         console.log("up");
//     }
// });

  // .mousedown(function() {
  //   $( this ).append( "down" );

  // });


// $('.container').on('mousedown', addTime, function(e){
//     alert($(this)) // Changed line
// })​

// mousedown('click', function() {
//   ($('.lightsOn').delay(1000).fadeIn(1000).delay(10000).fadeOut(500, addTime))
//   // alert('hello');
// });

// }
}
pressed();

// create reset button on index.html page
  $('#reset').click(function() {
    window.location.href = 'index.html';
});
  });
