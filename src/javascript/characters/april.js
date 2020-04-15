setTimeout(() => {
    var i = 0;

    var txt = `Tengo que decir algo en especifico?... mmm, esta bien... Soy april tengo 15 años mi comida favorita es la pizza y mi color favorito es el negro y el morado, provengo de una familia destacada; mi madre, Abey, es dueña de una empresa farmaceutica muy prestigiosa, mi padre, Abel, es el mejor cirujano del mundo, en serio no miento!. Bueno, me mude a Kōbe con mi tia Nicole, yo queria conocer este pais desde que era niña, no es que no me guste el mio, pero ya saben... es japon. Primero me costo un poco adaptarme, ser la chica nueva y el japones no era lo mismo que en mis clases privadas con Jorge, ademas los niños tenian una especie de miedo de mi familia por los guardespaldas y todo eso, aunque no los necesito, toda mi vida he sabido valerme por mi misma y cualquier persona que me haga molestar no dudaria en patearle el... si, el punto es que nadie se acercaba, por miedo. 
    Solo hubo una chica... es la unica chica en toda la escuela que se acerco a mi y que fue amable conmigo apesar de mi temperamento... ahora es mi mejor amiga, claro... por ahora.`;
    var element = 'aprilS'
    var speed;
    speed = 100;
    setTimeout(() => {
       speed = 600;
       setTimeout(() => {
         speed = 70;
       }, 600*4)
    }, 100*35)
    
    function typeWriter() {
    
        if (i < txt.length) {
          document.getElementById(element).innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      typeWriter()
}, 2000)