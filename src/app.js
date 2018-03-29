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
const lights = $('#play');
  $('#play').on('click', function() {
    $('.lightsOn').hide().delay(1000).fadeIn(2000)

// after sequence has faded in it will randomly fade out
for (let i = 0;  i < lights.length; i++) {
    (function(i) {
        setTimeout(function () {
            console.log(i);
        }, Math.floor(Math.random() * 1000));
    })(i);
}

});

// Create event button so player can get time



// create reset button on index.html page
  $('#reset').click(function() {
    window.location.href = 'index.html';
});


// GAME LOGIC
/*
CREATE EMPTY ARRAY FOR STORED TIMES

*/
});

let timer = setInterval(changeLights, 3000);
let index = 0;
function changeLights(){
  index = index + 1;

}
