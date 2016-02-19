angular.module('starter.controllers', [])

.controller('ShoplistsCtrl', function($scope, Shoplists, shoplistsPromised, recipesPromised) {
  var deploy = new Ionic.Deploy();

  $scope.shoplists = shoplistsPromised.data;
  //console.log($scope.shoplists);
  $scope.remove = function(shoplist) {
    Shoplists.remove(shoplist);
  };


  
  // Update app code with new release from Ionic Deploy
  $scope.doUpdate = function() {
    deploy.update().then(function(res) {
      console.log('Ionic Deploy: Update Success! ', res);
    }, function(err) {
      console.log('Ionic Deploy: Update error! ', err);
    }, function(prog) {
      console.log('Ionic Deploy: Progress... ', prog);
    });
  };

  // Check Ionic Deploy for new code
  $scope.checkForUpdates = function() {
    console.log('Ionic Deploy: Checking for updates');
    deploy.check().then(function(hasUpdate) {
      console.log('Ionic Deploy: Update available: ' + hasUpdate);
      $scope.hasUpdate = hasUpdate;
    }, function(err) {
      console.error('Ionic Deploy: Unable to check for updates', err);
    });
  }
})

.controller('ShoplistDetailCtrl', function($scope, $stateParams, Shoplists, Recipes) {
  $scope.shoplist = Shoplists.get($stateParams.shoplistId);
  for(var i = 0; i < $scope.shoplist.recipes.length; i++) { 
    var aRecipe = Recipes.get($scope.shoplist.recipes[i]._id);
    if(aRecipe) {
      $scope.shoplist.recipes[i].ingredients = aRecipe.ingredients;
    }
  }
})

.controller('RecipesCtrl', function($scope, Recipes, recipesPromised) {
  $scope.recipes = recipesPromised.data;
  //console.log($scope.recipes);
  $scope.remove = function(recipe) {
    Recipes.remove(recipe);
  };
})

.controller('RecipeDetailCtrl', function($scope, $stateParams, Recipes) {
  $scope.recipe = Recipes.get($stateParams.recipeId);
});
