
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
// vamos a definir la funcion para hacer buscador como una pokedex
$(function () {

    $('#comparador_pokemon').click(function (event) {

        // definir nombre de pokemon para la busqueda
        const NombrePokemon = $('#input_pokedex').val();
        event.preventDefault();
        // definir constante para que en el buscador quede con minusculas
        const NombrePokemonMinuscula = NombrePokemon.toLowerCase();

        // url de API POKEMON CON AJAX

        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${NombrePokemonMinuscula}/`,
            type: "GET",
            dataType: "json",
            success: function (results) {

                console.log(results);
            }
        }).done(response).fail(error);

        // funcion para los datos de busqueda

        function response(data) {
            $('#input').empty();
            // pokemon en su forma normal
            const Pokemon_imagen = data.sprites.front_default;
            // numero de la pokedex correspondiente
            const Numero_pokedex = data.id;
            // Nombre de pokemon
            const pokemon_name = data.name.toUpperCase();
            // peso pokemon
            const pokemon_peso = data.weight;
            // altura pokemon
            const pokemon_altura = data.height;
            $('#contenido_pokemon').empty();
            $('#tarjeta_imagen').append(`<img src="${Pokemon_imagen}" class="tarjeta_imagen">`);
            $('#tarjeta_nombrepokemon').append(`Nombre : ${pokemon_name}`);
            $('#tarjeta_numeropokedex').append(`Número Pokedex : ${Numero_pokedex}`);
            $('#tarjeta_pesoaltura').append(`Peso: ${pokemon_peso}0 Dg. / Tamaño : ${pokemon_altura}0 Cms.`);

            var data_types = data.types;

            for (i = 0; i < data_types.length; i++) {
                data_types[i].label = data_types[i]['type'].name;
                var data_types_original = data_types[i]['type'].name.toUpperCase()
                $('#tarjeta_tipos').append(`${data_types_original} `);
            }

            var datastats = data.stats;
            for (var i = 0; i < datastats.length; i++) {
                datastats[i].label = datastats[i]['stat'].name;
                datastats[i].y = datastats[i]['base_stat'];
                console.log('cargando stat')
            }
            var datos = {
                theme: 'light',
                width: 370,
                height: 300,
                animationEnabled: true,
                title: {
                    text: `Stats Base ${pokemon_name}`,
                    indexLabelFontFamily: 'Play'
                },
                axisY: {
                    title: "Value",
                    indexLabelFontFamily: 'Play',
                    includeZero: false
                },
                axisX: {
                    title: "Stats",
                    indexLabelFontFamily: 'Play'
                },
                data: [{
                    type: "pie",
                    dataPoints: datastats,
                    indexLabel: "{label} - {y}",
                    toolTipContent: "<b>{label}</b>: {y}",
                    indexLabelFontSize: 12,
                    indexLabelFontFamily: 'Play'
                }]
            };
            $("#grafico").CanvasJSChart(datos)
            $('#comparador_pokemon').append()
        }
    });

    function error() {
        alert('Lo sentimos, ha ocurrido un error :(, Ingresa un nombre o el número correspondiente para un Pokémon (1)');
    }
})
// vamos a definir la funcion para hacer buscador como una pokedex
$(function () {

    $('#comparador_pokemon').click(function (event) {

        // definir nombre de pokemon para la busqueda
        const NombrePokemon = $('#input_pokedex_1').val();
        event.preventDefault();
        // definir constante para que en el buscador quede con minusculas
        const NombrePokemonMinuscula = NombrePokemon.toLowerCase();

        // url de API POKEMON CON AJAX

        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${NombrePokemonMinuscula}/`,
            type: "GET",
            dataType: "json",
            success: function (results) {

                console.log(results);
            }
        }).done(response).fail(error);

        // funcion para los datos de busqueda

        function response(data) {

            // pokemon en su forma normal
            const Pokemon_imagen = data.sprites.front_default;
            // numero de la pokedex correspondiente
            const Numero_pokedex = data.id;
            // Nombre de pokemon
            const pokemon_name_1 = data.name.toUpperCase();
            // peso pokemon
            const pokemon_peso = data.weight;
            // altura pokemon
            const pokemon_altura = data.height;

            $('#input_1').empty();
            $('#tarjeta_imagen_1').append(`<img src="${Pokemon_imagen}" class="tarjeta_imagen">`);
            $('#tarjeta_nombrepokemon_1').append(`Nombre : ${pokemon_name_1}`);
            $('#tarjeta_numeropokedex_1').append(`Número Pokedex : ${Numero_pokedex}`);
            $('#tarjeta_pesoaltura_1').append(`Peso: ${pokemon_peso}0 Dg. / Tamaño : ${pokemon_altura}0 Cms.`);

            var data_types = data.types;

            for (i = 0; i < data_types.length; i++) {
                data_types[i].label = data_types[i]['type'].name;
                var data_types_original = data_types[i]['type'].name.toUpperCase()
                $('#tarjeta_tipos_1').append(`${data_types_original} `);
            }
            var datastats = data.stats;
            for (var i = 0; i < datastats.length; i++) {
                datastats[i].label = datastats[i]['stat'].name;
                datastats[i].y = datastats[i]['base_stat'];
            }
            var datos = {
                theme: 'light1',
                width: 370,
                height: 300,
                animationEnabled: true,
                title: {
                    text: `Stats Base ${pokemon_name_1}`,
                    indexLabelFontFamily: 'Play'
                },
                axisY: {
                    title: "Value",
                    includeZero: false,
                    indexLabelFontFamily: 'Play'
                },
                axisX: {
                    title: "Stats",
                    indexLabelFontFamily: 'Play'
                },
                data: [{
                    type: "pie",
                    dataPoints: datastats,
                    indexLabel: "{label} - {y}",
                    toolTipContent: "<b>{label}</b>: {y}",
                    indexLabelFontSize: 12,
                    indexLabelFontFamily: 'Play',
                    legendText: "{label}"
                }]
            };
            $("#grafico_1").CanvasJSChart(datos);


        }
    });

    function error() {
        alert('Lo sentimos, ha ocurrido un error :(, Ingresa un nombre o el número correspondiente para un Pokémon (2) ');
    }
})


