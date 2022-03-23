$(function(){
	var indiceAtual = 0;
	var indiceMaximo = $('.slider img').length; // pegando a quantidade 
	var delay = 5000;
	
	//executando funções
	initSlider();
	// console.log(indiceMaximo);

	function initSlider(){
		for(var i = 0; i < indiceMaximo; i++){
			/*<span style="background:#069;"></span>
			<span></span>
			<span></span>*/
			if(i == 0){
				$('.bullets-nav').append('<span style="background:#069;"></span>');
			}else{
				$('.bullets-nav').append('<span style="background:#ccc;"></span>');
			}
		}

		$('.slider img').eq(0).fadeIn();
		setInterval(function(){
			// console.log('funciondando');
			alternarSlider(); 
		},delay); 
	}

	// função de movimento das imagens automatico
	function alternarSlider(){
		// console.log('alterando imagens');
		$('.slider img').eq(indiceAtual).stop().fadeOut(2000); // img sumindo a cada 2s
		indiceAtual+=1;
		if(indiceAtual == indiceMaximo)
			indiceAtual = 0;
		$('.bullets-nav span').css('background-color','#ccc')
		$('.bullets-nav span').eq(indiceAtual).css('background-color','#069');
		$('.slider img').eq(indiceAtual).stop().fadeIn(2000);
	}

});