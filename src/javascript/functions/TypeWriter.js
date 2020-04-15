var i = 0;

var txt = "Input Text";
var element = 'YourElement'
var speed = 100;

function typeWriter() {

    if (i < txt.length) {
      document.getElementById(element).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }