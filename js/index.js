(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
    console.log('wat', card);
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
  
  }());

  
// change volume
function volume_change() {
	volume_show.innerHTML = recent_volume.value;
	mainAudio.volume = recent_volume.value / 100;
}

function loopBalloon(id) {
  function animateBalloon() {
    var randLeft = 1000 * Math.random();
    var randTop = 500 * Math.random();
    
    var balloon = document.getElementById(id);
    if (balloon) {
      balloon.style.transition = "transform 10s linear";
      balloon.style.transform = `translate(${randLeft}px, -${randTop}px)`;
      setTimeout(animateBalloon, 10000);
    }
  }
  animateBalloon();
}

// Iniciar animaciones de los globos
loopBalloon("b1");
loopBalloon("b2");
loopBalloon("b3");
loopBalloon("b4");
loopBalloon("b5");
loopBalloon("b6");
loopBalloon("b7");

// Animar el contenedor de los globos
var balloonBorder = document.querySelector(".balloon-border");
if (balloonBorder) {
  balloonBorder.style.transition = "top 8s linear";
  balloonBorder.style.top = "-500px";
}

// Agregar clases para la rotación
["b1", "b4", "b5", "b7"].forEach(id => {
  var balloon = document.getElementById(id);
  if (balloon) balloon.classList.add("balloons-rotate-behaviour-one");
});

["b2", "b3", "b6"].forEach(id => {
  var balloon = document.getElementById(id);
  if (balloon) balloon.classList.add("balloons-rotate-behaviour-two");
});

// Ocultar elemento actual y mostrar la torta después de 5 segundos
setTimeout(() => {
  var cake = document.getElementById("cake_fadein");
  if (cake) cake.style.display = "block";
}, 6000);