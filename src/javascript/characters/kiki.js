setTimeout(() => {
    var i = 0;

    var txt = `Desde chica... mas chica aun, me han interesado mucho las personas, cualquier persona, porque hay de todos los colores, pero no me interesan porque sean geniales o parecido. Simplemente... su esencia es genial y me gusta poner a las personas en muchas circunstancias para averiguar sus reacciones, eso es ¡tan divertido!. Especialmente cuando piensan que solo soy una inocente niñita...
    Naci en osaka, japon. Pero me mude a Satoroshi (Ciudad ficticia de Dark Day´s) hace un par de años e hice nuevos amigos aqui, aunque soy algo popular la verdad es que no me gusta, no quiero ser el centro de atencion, es muy cansado, en serio. Me gusta mucho el color rojo, porque lo expresa todo, es la matriz de la vision.
    Mi padre es un miembro destacado de una organizacion, la cual en mi infancia nunca pude saber, pero aun asi nos mudabamos a menudo gracias a eso, pero ahora que cumpli 13 añitos, mi padre dice que estoy lista y que cambiare el mundo, dice que soy como una princesa, la princesa del apocalipsis.`;
    var element = 'kikiS'
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