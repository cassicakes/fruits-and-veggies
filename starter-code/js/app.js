/* setup your angular app here */
var app = angular.module('FruitVeg', []); 

app.controller('FruitVegCtlr', ['$scope', function($scope) { //I need a better explanation of what all this is. esp scope in [0] above. 
  $scope.pool = fruits.concat(vegetables); //also need to suffle @each refresh still
  $scope.fruit = [];
  $scope.veggies = [];

  $scope.moveToFruit = function(idx) {
    $scope.fruit.push($scope.pool[idx]);
    $scope.pool.splice(idx,1); 
  };

  $scope.moveToVeggie = function(idx) {
    $scope.veggies.push($scope.pool[idx]);
    $scope.pool.splice(idx,1);
  };

  $scope.veggieToPool = function(idx) {
    $scope.pool.push($scope.veggies[idx]);
    $scope.veggies.splice(idx,1);
  };

  $scope.fruitToPool = function(idx) {
    $scope.pool.push($scope.fruit[idx]);
    $scope.fruit.splice(idx,1);
  };

  $scope.turnRed = function(type, idx) {
    if ($scope.pool.length == 0) {
      if (type == "veg") {
        if (vegetables.indexOf($scope.veggies[idx]) === -1) { //if item doesn't exist in array it will return -1, hence why it is there. 
          return true;
        } else {
          return false;
        }
      }
      if (type == "fruit") {
        if (fruits.indexOf($scope.fruit[idx]) === -1) {
          return true;
        } else {
          return false;
        }
      }
    }
  };
//this is the area that I couldn't figure out... I know that I need to sent an altert saying that you've won, but the funcitoning, not sure. 
  $scope.win = function() {

  }
  
}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruits count', fruits.length);
console.log('Veggie count', vegetables.length);