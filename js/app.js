/**
 * Created by sergio on 26/12/16.
 */
(function () {
    var app = angular.module('pokedex',[
        'ngRoute',
        'pokedex.controllers',
        'pokedex.directives',
        'pokedex.filters'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/',{
                templateUrl: 'views/pokedex.html'
            })
            .when('/pokemon/:id',{
              templateUrl: 'views/pokemon.html',
              controller: 'PokemonController',
              controllerAs: 'cmtsCtrl'
            })
            .otherwise({
               redirectTo: '/'
            });
    }]);

    /*app.config(function($routeProvider){
    });*/

})();