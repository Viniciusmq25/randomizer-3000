const numero = document.querySelector('[data-numero]');
const resultado = document.querySelector('[data-resultado]');

let jogoEmAndamento = true;

numero.addEventListener('keydown', function(evento) {
  if (evento.code === 'Space' || evento.code === 'Enter') {
    if (!jogoEmAndamento) return; // se o jogo acabou, saia da função
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    resultado.innerHTML = numeroAleatorio;
    console.log(numeroAleatorio);

    if (parseInt(numero.value) === numeroAleatorio) {
      jogoEmAndamento = false; // define o jogo como encerrado
      console.log("Você acertou!")

      //.5 segundos para aparecer a mensagem
      setTimeout(function() { 

        const acerto = document.getElementById('certo');

        acerto.style.display = 'block';

        if(acerto.style.display = 'block'){
            setTimeout(function(){
                acerto.style.transform = 'rotate(-3630deg)';
                acerto.style.transition = 'transform 500ms ease-in-out';
            },5)
           
        }
        

      }, 50);
    }
  }
});









