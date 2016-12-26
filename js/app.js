/**
 * Created by sergio on 26/12/16.
 */
(function () {
    var app = angular.module('pokedex', []);

    app.controller('PokemonCtrl', function () {
        this.pokemon = {
            id: 001,
            name: 'Bulbasaur',
            species: 'Seed Pokemon',
            type: ['Grass', 'Poison'],
            height: "2′4″ (0.71m)",
            weight: "15.2 lbs (6.9 kg)",
            abilities: ["Overgrow", "Chlorophyll"]
        };
    });
})();