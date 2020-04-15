setTimeout(() => {
    var i = 0;

    var txt = `Soy Aniki, tengo 14 años y vivo en Kōbe, no tengo comida favorita pero mi color favorito es azul, porque aveces cuando estoy estresada de todos mis estudios solo me relaja ver el cielo, ver sus colores cambiantes y lo infinito que es el universo, nadie puede ser mas fuerte que el, ya que lo es todo. Mi vida siempre han sido los estudios y siempre me han metido a la cabeza que debo de ser una gran profesionista y asi fue... toda mi vida fui una chica dedica solamente a los estudios, mi vida... era aburrida, pero no me quejaba, no sabia hacer nada que no fueran mis deberes, ni debia.
    Siempre he sido debil para defenderme, accedo a lo que otros me piden, se que esta mal pero enserio no puedo evitarlo, cuando intento hacer algo un escalofrio recorre todo mi cuerpo, siento como si una culpa me invadiera, me siento como una pobre cordero gritandole a un lobo gigante de 2 metros con mucha hambre. Prefiero por eso hacer lo que los demas me digan, para evitar problemas...
    Aunque hace tiempo una chica entro a mi colegio, debieron ver a los demas, aunque parecian lobos con ella alado parecian cachorritos temblando ante un leon, una fiera indomable... pero hubo algo en esa chica que me hacia no temerle... incluso yo, la mas debil del colegio, fui la unica que no temio a hablarle... pude notar que no habla mucho, creo que no entiende todas las palabras, pero yo le ayudo con eso, somos amigas desde hace tiempo... al final de cuentas esta corderita no fue presa del leon...`;
    var element = 'anikiS'
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