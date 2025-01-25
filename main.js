const form = document.getElementById('form-deposit');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const campoAinput = document.getElementById('valor_a');
    const campoBinput = document.getElementById('valor_b');

    const campoA = parseFloat(campoAinput.value);
    const campoB = parseFloat(campoBinput.value);

    const mensagemFalso = `Tente novamente !`;
    const mensagemVerdade = `Esta valido o número${campoB} é acima do numero ${campoA}`;

    if(campoA >= campoB){
        const containerFalso = document.querySelector('.mensagem-falso');
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block';
        document.querySelector('.mensagem-verdadeira').style.display = 'none';
    }
    
else{
    const containerVerdadeira = document.querySelector('.mensagem-verdadeira');
        containerVerdadeira.innerHTML = mensagemVerdade;
        containerVerdadeira.style.display = 'block';
        document.querySelector('.mensagem-falso').style.display = 'none';
}

});