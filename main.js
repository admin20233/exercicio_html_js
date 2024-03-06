let form = document.getElementById('formulario');
       
        form.addEventListener('submit', function(e){
            e.preventDefault();

            let numero1 = document.getElementById('numeroA').value;
            let numero2 = document.getElementById('numeroB').value;

            if(numero2 > numero1){
                alert('Formulario Valido')
            }else{
                alert('Formulario Invalido')
            }
         });