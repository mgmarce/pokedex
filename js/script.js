
document.getElementById('focusLink').addEventListener('click', function() {
    document.getElementById('buscarPokemon').focus();
});

var inputElement = document.getElementById('buscarPokemon');
var inputValue = inputElement.value.trim();
function retornarDatos() {
    return {
        "buscarPokemon": document.getElementById('buscarPokemon').value,
    };
}
$('#btnBuscar').click(function() {
    if (inputValue === "") {
        alert("El input está vacío");
    } else {
        $.ajax({
            url: mostrarPokemon(inputValue),
            type: 'POST',
            dataType: 'json',
            success: function() {
                mostrarPokemon();
            }
        })
    }
})
function mostrarPokemon(poke) {

    /*let pokeId = poke.id.toString();
    console.log(pokeId)*/
    console.log(poke)
    
}