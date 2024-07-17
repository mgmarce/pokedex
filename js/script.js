
/*document.getElementById('focusLink').addEventListener('click', function() {
    document.getElementById('buscarPokemon').focus();
});*/

const buscarPokemon = async (p) => {
    p.preventDefault();
    const input = document.getElementById("txtBuscar");
    const val = input.value.trim();
  
    const fetchPokeData = async (val) => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${val}`);
            if (!res.ok) {
                console.log('Error al buscar Pokémon');
            }
            const data = await res.json();
            return {
                nombre: data.name,
                experiencia: data.id
            };
        } catch (error) {
            //console.log('Error fetching Pokémon data: ...', error);
            return null;
        }
    };


    if (val) {
        const pokemon = await fetchPokeData(val);
        if (pokemon) {
            console.log('Pokemon Data:', pokemon);
        } else {
            alert('Pokémon no encontrado');
        }
    } else {
      alert("Esta vacio");
    }

    
    
};

const form = document.getElementById("frmBuscar");
form.addEventListener("submit", buscarPokemon);