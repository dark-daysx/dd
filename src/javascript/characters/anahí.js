setTimeout(() => {
    var i = 0;

    var txt = `Biografia De Anahí`;
    var element = 'anahíS'
    var speed = 50;
    
    function typeWriter() {
    
        if (i < txt.length) {
          document.getElementById(element).innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      typeWriter()
}, 2000)