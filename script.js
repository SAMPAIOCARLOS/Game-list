const myselect = document.getElementById('myselect')

async function exibirResultados() {
    const response = await fetch('data.json');
    const data = await response.json();

    const valorSelect = myselect.value

    for (let i = 0; i < data.length; i++) {
        const element = data[i];

        const imagem = document.getElementById('Imagem');

        const nome = document.getElementById('nome');
        const nivel = document.getElementById('nivel');
        const classe = document.getElementById('classe');
        const raca = document.getElementById('raca');


        if(valorSelect === element.nome) {
            imagem.setAttribute('src', element.url);

            nome.innerText = element.nome
            nivel.innerText = element.nivel
            classe.innerText = element.classe
            raca.innerText = element.raca
        }
        
    }
}

myselect.addEventListener('change', exibirResultados)