setTimeout(() => {
    var i = 0;

    var txt = `Mi padre siempre ha dicho que mi familia es algo especial, que es diferente a las demas familias. Siempre me pregunte el porque, el dice que es porque seremos un antes y un despues... literalmente, siempre nos dice eso a mi y a mi hermana kopy, pero nunca lo tomamos como algo serio. Soy Conejo! estudio, practico natacion, me gusta crear mundos fantasiosos junto con mi hermana y imaginar que se cumplen... el sueño de toda princesa... incluso tengo dos guardias reales, mis amigos; harian por mi lo que fuera! mi vida... mi vida no sera la mejor, pero estoy feliz de tenerla.`;
    var element = 'conejoS'
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