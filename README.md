# lightsout-reaction-game

## Summary
My game is based off of reaction testing. It tests the players reaction speed after the lights have gone out. 
This game is based off of how motorsports when they are at the starting line. They have all five lights up and 
once it goes out they press on the gas and go.

## How to Play
- There will be an alert to tell you the instructions of the game.
- A prompt will show up asking for your name to be stored next to the "Stor

## Features
- CSS Animations
- jQuery
- Vanilla Javascript

## Bugs/Issues
1. This code is one of my biggest issues. 

   const addTime = function () {
    d = performance.now();
    speed.push(d);
    const stamps = $('<p>').text(parseInt(speed[0]));
    $('body').append(stamps);
    $('.time').text(`${speed}`); // prints out the time that is selected
    return d; // returns performance.now data
  };
  
  - When the player plays and they press the action button an alert to tell them there time pops up but it happens twice.
  Because it happens twice it shows the values in the stored time. This issue still continues, I will have continuing debugging 
  this issue. I got some advice and it may have to be with line 17. Since it is performance.now() that could possibly be an issue.
  
  
  ## Final Thoughts
  This project was difficult. I didn't think it was going to be simple but I did have high expectations at least. 
  It was a little fun but also tedious. The concept was great but I don't think I executed it well. For what it's worth
  I think I did a decent job. I was able to make it work with each button(besides github pages messing up my project). 
