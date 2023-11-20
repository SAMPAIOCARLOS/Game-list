const buscar = document.getElementById('buscar')
const mySelect = document.getElementById('myselect')

buscar.addEventListener('click', ()=> {

    fetch('data.json').then((response)=> {
        response.json()
        .then((data)=> {

            let Imagem = document.getElementById("Imagem")

            const nome = document.getElementById('nome')
            const nivel = document.getElementById('nivel')
            const classe = document.getElementById('classe')
            const raca = document.getElementById('raca')

            for (let i = 0; i < data.length; i++) {
                const item = data[i]

                let valorSelect = mySelect.value
                if(valorSelect === item.nome) {
                    Imagem.setAttribute('src', item.url)
                    nome.innerText = item.nome
                    nivel.innerText = item.nivel
                    classe.innerText = item.classe
                    raca.innerText = item.raca
                    
                }      
            }
        })
    })
})