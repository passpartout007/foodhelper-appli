angular.module('starter.services', [])

.factory('Shoplists', function($http) {
  // Might use a resource here that returns a JSON array
  var shoplists = [];

  return {
    all: function() {
      return $http.get('/api/shoplists').success(function(data){
        shoplists = data;
      });
    },
    remove: function(shoplist) {
      shoplists.splice(shoplists.indexOf(shoplist), 1);
    },
    get: function(shoplistId) {
      for (var i = 0; i < shoplists.length; i++) {
        if (shoplists[i]._id === shoplistId) {
          return shoplists[i];
        }
      }
      return null;
    }, 
  };
})

.factory('Recipes', function($http) {
  // Might use a resource here that returns a JSON array
  var recipes = [];

  return {
    all: function() {
      return $http.get('/api/recipes').success(function(data){
        recipes = data;        
      });
    },
    remove: function(recipe) {
      recipes.splice(recipes.indexOf(recipe), 1);
    },
    get: function(recipeId) {
      for (var i = 0; i < recipes.length; i++) {
        if (recipes[i]._id === recipeId) {
          return recipes[i];
        }
      }
      return null;
    }
  };
});

