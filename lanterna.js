var status = "false";
var cargaBateria = 100;
var click =0;

function interruptor(){
	
	var botao = document.getElementById('botao-ligar');
	var lampada = document.getElementById('lampada');
	var progressBarra = document.getElementById('barra-bateria');	
	var porcentagem = document.getElementById('porcentagem');
	var titulo = document.getElementById('titulo');
	var body = document.getElementById('body');
	click++;
	body.style.backgroundColor = 'rgba(0,0,0,0.2)';
	
	if(status === 'false'){
		if(cargaBateria != 0){
			botao.setAttribute('class',"botao-ligado");
			lampada.setAttribute('class', "lampada-ligada");
			titulo.innerHTML = "Ligada";
			body.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
		}
		
		
		var bar = setInterval(barra,300);

		function barra(){
			if(cargaBateria == 0 ){
				clearInterval(bar);
				botao.setAttribute('class',"botao-desligado");
				lampada.setAttribute('class', "lampada-desligada");
				body.style.backgroundColor = 'rgba(0,0,0,0.2)';
				status = 'true';
				titulo.innerHTML = "Desligada";
				if(click >= 2){
					alert("Recarrege a bateria");
				}
					
				

			}else if(click ==2){
					console.log(click);
					clearInterval(bar);
					click = 0;					
					body.style.backgroundColor = 'rgba(0,0,0,0.2)';
				}else{	

				--cargaBateria;
				progressBarra.style.width = cargaBateria+"%";
				porcentagem.innerHTML = cargaBateria;
				
			}
		}

		status = 'true';		

		

	}else{
		botao.setAttribute('class',"botao-desligado");
		lampada.setAttribute('class', "lampada-desligada");
		status = 'false';
		titulo.innerHTML = "Desligada";
		body.style.backgroundColor = 'rgba(0,0,0,0.2)';
		click =2;
	}
	

	

}

function carregerBateria(){

	if(status == "false"){
		var botao = document.getElementById('botao-ligar');
		var lampada = document.getElementById('lampada');
		botao.setAttribute('class',"botao-desligado");	

			lampada.setAttribute('class', "lampada-desligada");
			status = 'false';
			titulo.innerHTML = "Desligada";
			body.style.backgroundColor = 'rgba(0,0,0,0.2)';

		var progressBarra = document.getElementById('barra-bateria');
		var porcentagem = document.getElementById('porcentagem');
		cargaBateria = 100;
		porcent = 100
		progressBarra.style.width = cargaBateria+"%";
		porcentagem.innerHTML = cargaBateria;
		click = 0;
	}
}