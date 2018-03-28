function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (x = 0; x < getRandomInt(5, 15); x++) {   
  var div = '<div class="square" style="  z-index: -2; width: ' +getRandomInt(80, 125)+ 'px; height: ' +getRandomInt(80, 125)+ 'px; border-bottom: ' +getRandomInt(50, 125)+ 'px solid red; transform: rotate(' +getRandomInt(0, 360)+ 'deg); position: absolute; top: ' +getRandomInt(-20, 400)+ '; left: ' +getRandomInt(-20, $( window ).width()-50)+ '">';
  $(div).appendTo('#square-container');
}