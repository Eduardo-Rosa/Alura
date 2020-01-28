
			var titulo = document.querySelector(".titulo");
            titulo.textContent = "Suellen";

            // pega os dados do paciente
            var pacientes = document.querySelectorAll(".paciente");
            console.log(pacientes);

            for(var i = 0; i < pacientes.length; i++){

                var paciente = pacientes[i];

                //pega o peso do paciente
                var tdPeso = paciente.querySelector(".info-peso");
                //pega a altura do paciente
                var tdAltura = paciente.querySelector(".info-altura");

                var peso = tdPeso.textContent;
                var altura = tdAltura.textContent;
            
                var tdImc = paciente.querySelector(".info-imc");
                var pesoEhValido = validaPeso(peso);
                var alturaEhValido = validaAltura(altura);

                if(!pesoEhValido){
                    console.log("Peso inválido!");
                    pesoEhValido = false;
                    tdImc.textContent = "Peso inválido!";
                    paciente.classList.add("paciente-invalido");
                }

                if(!alturaEhValido){
                    console.log("Altura inválida!");
                    alturaEhValido = false;
                    tdImc.textContent = "Altura inválida!";
                    paciente.classList.add("paciente-invalido");
                }
                
                //calcula o imc do paciente
                if(alturaEhValido && pesoEhValido){
                    var imc = calculaImc(peso,altura);
                    tdImc.textContent = imc;
                }
            }

            function validaPeso(peso){
                if(peso >= 0 && peso < 500){
                    return true;
                }else{
                    return false;
                }
            }

            function validaAltura(altura){
                if(altura > 0 && altura <= 3.0){
                    return true;
                }else{
                    return false;
                }
            }


            function calculaImc(peso,altura){
                var imc = 0;

                imc = peso / (altura*altura);
                return imc.toFixed(2);           
            
            }


           
            
            

            
           
		