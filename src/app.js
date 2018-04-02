// eslint-env jquery

$(document).ready(function () {

let lightsOn = $('.lightsOn');
// let lights =   $( '.lights' );
let speed = [];
let timeout = 0;
let p1;
let avg;

// made a tags and class for storing time

  // let tb = $('h1').attr('class', 'title');
  // $('body').append(tb);

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
    let d = performance.now(); //
    speed.push(d);


// for every time the player reacts to the lights going off
// the time will be posted into the empty array named speed
// and printed out onto the screen
// parseInt takes a string and turns it into a integer

    for ( let i = 0; i < speed.length; i++) {
        let stamps = $('<p>').text(parseInt(speed[i]));
        $('body').append(stamps);
    }

    // $(this).remove();
    $('.time').text(` ${d}`); // prints out the time that is selected
    return d; // returns performance.now data
}


// create play button on index.html page
// When you press play the sequence will start
// after sequence has faded in it will then fade out at random instances
// remember to put e into the function();

let randomFade = Math.floor(Math.random() * 10000);

function play () {

  $('#play').on('click', function() {
// return performance.now();

  ($('.lightsOn').delay(1000).fadeIn(1000).delay(10000));

     if (Math.floor(Math.random() > 0.5 )) {
      $('.lightsOn').fadeOut(1000);
   }

  // setTimeout(function(){
  //     ($('.circle').fadeOut(500, addTime));

  // }, 10000);
  // ($('.circle2').fadeOut(500, addTime, randomFade));
  // ($('.circle3').fadeOut(500, addTime, randomFade));
  // ($('.circle4').fadeOut(500, addTime, randomFade));



  // ($('.lightsOn').delay(1000).fadeIn(1000).delay(10000).fadeOut(500, (Math.random(addTime))));

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


 $('.container').on('click', function() {
  alert(addTime());
});

 if (!timeout) {
   $('.container').on('click', function() {
  timeout.textContent = "jump start";
 });

}
}
  pressed();

// create reset button on index.html page
  $('#reset').click(function() {
    window.location.href = 'index.html';
});
  });
