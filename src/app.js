// eslint-env jquery

$(document).ready(() => {
  const lightsOn = $('.lightsOn');
  // let lights =   $( '.lights' );
  const speed = [];
  let d;
  let count = 13;
  // let clickReact;
  // let timeout = 0;
  // let p1;
  // let avg;

  // made a tags and class for storing time

  // let tb = $('h1').attr('class', 'title');
  // $('body').append(tb);
  const rules = alert('RULES: 1) Press Play initiate game. 2) Press Action button once the light fades out. 3) Press Reset to start over ');
  const name = prompt("What's your name?");
  const dm = $('h3').attr('class', 'milli');
  $('h3').text(`${name} Stored Time`);
  $('body').append(dm);


  // Hides the lights on the initial page until they press "PLAY"
  // Did not use the enter button since the landing page will be on the same html file
  // using the .hide() function
  $('.lightsOn').hide();


  const addTime = function () {
    d = performance.now();
    speed.push(d);


    // for every time the player reacts to the lights going off
    // the time will be posted into the empty array named speed
    // and printed out onto the screen
    // parseInt takes a string and turns it into a integer


    for (let i = 0; i < speed.length; i++) {
      const stamps = $('<p>').text(parseInt(speed[i]));
      $('body').append(stamps);
      // $('.text').text('');
    }
    // $('<p>').text('');
    $('.time').text(`${d}`); // prints out the time that is selected
    return d; // returns performance.now data
  };


  // create play button on index.html page
  // When you press play the sequence will start
  // after sequence has faded in it will then fade out at random instances
  // timeout const detects if the player pressed the action button before sequence finished.
  // if so they will have to press play button again

  // const timeout = 0;
  d = performance.now()

  // function countDown starts a setInterval from 1
  // it decrements every 1 second (1000)
  // have a global variable called count which starts at 13
  // 13 is the total of the .lightsOn delay,fadeIn,delay,fadeOut

  function countDown (){
    // let count = 10;
    setInterval(function() {
      count--;
      return count;
    }, 1000);
  }


  function play() {
    $('#play').on('click', () => {
      countDown();
        // $('#action').on('click', () => {


          // $('.circle').removeClass('.lightsOn');
          // alert('You jumpstarted');

          // return reset();
        // });

      // else if (timeout > ) {
      //   $('#action').on('click', () => {
      //     alert(addTime());
      //     // return addTime();
      //   });
      // }

      ($('.lightsOn').delay(1000).fadeIn(1000).delay(10000)
        .fadeOut(1000, pressed));


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
  // have a button to initiate function addTime to grab the milliseconds
  // and place it into the global array called speed
  // has an if statement if the counter is greater then 0 it is a jump start
  // else it will place the time

  function pressed() {
    $('#action').on('click', () => {
      if (count > 0 ) {
      alert("You jumpstarted");
      } else {
        alert(addTime());
      }
    });
  }
  pressed();

  // create reset button on index.html page
  function reset() {
    $('#reset').click(() => {
      window.location.href = 'index.html';
    });
  }
  reset();
});
