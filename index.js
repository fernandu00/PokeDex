let id = 1
// let url = `https://pokeapi.co/api/v2/pokemon/${id}`



async function getResponse(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const poke = await response.json()
    await populatePokemon(poke)
}

const populatePokemon = (poke) => {
    const pokeName = document.querySelector('.name')
    pokeName.innerText = poke.name

    const pokeId = document.getElementById('id')
    pokeId.innerText = poke.id

    const pokeImg = document.querySelector('.img')
    pokeImg.src = poke.sprites.front_default

    const pokeType = document.querySelector('.type')
    pokeType.innerText = poke.types[0].type.name
    switch(pokeType.textContent){
        case "fire":
            pokeType.style.backgroundColor ="#fe0101"
            break
        case "grass":
            pokeType.style.backgroundColor ="#007007"
            break
        case "poison":
            pokeType.style.backgroundColor ="#9d00a8"
            break
        case "water":
            pokeType.style.backgroundColor ="#007cf7"
            break
        case "bug":
            pokeType.style.backgroundColor ="#35a33d"
            break
        case "normal":
            pokeType.style.backgroundColor ="#c6ad21"
            break
        case "electric":
            pokeType.style.backgroundColor ="#ffae00"
            break
        case "ground":
            pokeType.style.backgroundColor ="#3d2a01"
            break
        case "fairy":
            pokeType.style.backgroundColor ="#ff9fda"
            break
        case "fighting":
            pokeType.style.backgroundColor ="#710101"
            break
        case "psychic":
            pokeType.style.backgroundColor ="#b2c315"
            break
        case "rock":
            pokeType.style.backgroundColor ="#575656"
            break


    }

    const pokeabilities = document.querySelector('.abilities')
    const abilities = [poke.abilities[0].ability.name,poke.abilities[1].ability.name]


    abilities.forEach((ability) => {
        const abilityList = document.createElement('li')
        abilityList.innerText = ability
        pokeabilities.appendChild(abilityList)
    })

    const pokeMoves = document.querySelector('.moves')
    const moves = [poke.moves[0].move.name, poke.moves[1].move.name]

    moves.forEach((move) => {
        const moveList = document.createElement('li')
        moveList.innerText = move
        pokeMoves.appendChild(moveList)
    })
}




getResponse(id)

const nextBtn = document.getElementById('next')

nextBtn.addEventListener('click', () => {
    id = id+1
    cleanInfo()
    getResponse(id)
})
  
const previousBtn = document.getElementById('previous')

previousBtn.addEventListener('click', () => {
    id = id-1
    cleanInfo()
    getResponse(id)
})

function cleanInfo(){
    const abilityList = document.querySelector('.abilities')
    const movesList = document.querySelector('.moves')
    while(abilityList.firstChild && movesList.firstChild){
        abilityList.removeChild(abilityList.firstChild)
        movesList.removeChild(movesList.firstChild)
    }
}