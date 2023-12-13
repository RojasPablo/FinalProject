class Pokemon {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.image = data.sprites['front_default'];
        this.shinyImage = data.sprites['front_shiny'];
        this.type = data.types.map(type => type.type.name).join(', ');
        this.height = data.height;
        this.weight = data.weight;
    }
}

const pokedex = document.getElementById('pokedex')
const fetchPokemon = async () => {
    
    const promises = [];
    for (let i = 1; i <= 9; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((response) => response.json()))
    }
    const results = await Promise.all(promises);
    const pokemonList = results.map(data => new Pokemon(data));
    displayPokemon(pokemonList);
}


const displayPokemon = (pokemon) => {

    pokemon.forEach((individualPoke) => {
        const listItem = document.createElement('li');
        listItem.classList.add('card');

        const image = document.createElement('img');
        image.classList.add('card-image');
        image.src = individualPoke.image;

        const title = document.createElement('h2');
        title.classList.add('card-title');
        title.textContent = individualPoke.name;

        const subtitle = document.createElement('p');
        subtitle.classList.add('card-subtitle');
        subtitle.textContent = `Type: ${individualPoke.type}  |  Height: ${individualPoke.height}'  |  Weight: ${individualPoke.weight} lb`;

        listItem.appendChild(image);
        listItem.appendChild(title);
        listItem.appendChild(subtitle);
        
        listItem.addEventListener('click', () => {
            image.src = listItem.classList.contains('shinyImage')
                ? individualPoke.image
                : individualPoke.shinyImage;

            listItem.classList.toggle('shinyImage');
        });


        pokedex.appendChild(listItem);

    });

};
fetchPokemon(); 

setTimeout(() => {
    const pikachuUrl = 'https://pokeapi.co/api/v2/pokemon/25';

    fetch(pikachuUrl)
        .then(response => response.json())
        .then(data => {
            const pikachu = new Pokemon({
                id: data.id,
                name: data.name,
                sprites: {
                    'front_default': data.sprites['front_default'],
                    'front_shiny': data.sprites['front_shiny']
                },
                types: data.types,
                height: data.height,
                weight: data.weight
            });

            displayPokemon([pikachu]); 
            alert(`
            Who's that Pokemon?!
            Professor Oak has one more Pokemon up for adoption`)
        });
}, 15000);