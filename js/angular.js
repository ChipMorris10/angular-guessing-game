// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.startGame = function(){
    $scope.number = Math.floor(Math.random()*100)+1;
    console.log($scope.number);
    $scope.showGame = !$scope.showGame;
    $scope.numGuesses=0;
    $scope.quitMessage='';
    $scope.message='';
  };

  $scope.makeGuess = function(){
    console.log($scope.guess);
    $scope.numGuesses++;
    if($scope.guess < $scope.number){
      $scope.message = 'Your guess is to low.';
    } else if($scope.guess > $scope.number){
      $scope.message = 'Your guess is to high.';
    } else if($scope.guess === $scope.number){
      $scope.message = 'You win!';
    } else {
      $scope.numGuesses--;
      $scope.message = 'You guessed outside the range.';
    }
    $scope.guess='';
  };

  $scope.giveUp = function(){
    $scope.showGame =! $scope.showGame;
    $scope.quitMessage = "You're a quiter!!";
  }

});
