setTimeout(() => {
    var i = 0;

    var txt = `................. . . . . . . . . .     ? ? ?`;
    var element = 'kyaruS'
    var speed = 1500;
    setTimeout(function() {
       speed = 700
    }, speed * 40)
    
    function typeWriter() {
    
        if (i < txt.length) {
          document.getElementById(element).innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      typeWriter()
}, 2000)