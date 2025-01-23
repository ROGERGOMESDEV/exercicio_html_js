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
        const containerFalso = document.querySelector('.mensagen-falso');
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block';
        document.querySelector('.mensagem-verdade').style.display = 'none';
    }
    
else{
    const containerVerdade = document.querySelector('.mensagen-verdade');
        containerVerdade.innerHTML = mensagemVerdade;
        containerVerdade.style.display = 'block';
        document.querySelector('.mensagen-falso').style.display = 'none';
}

});