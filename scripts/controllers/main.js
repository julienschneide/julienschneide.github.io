'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.filmList = [];
    $scope.parsedList = JSON.parse(localStorage.getItem('listFilm'));

    if ($scope.parsedList === null){
      $scope.filmList = [];
    }else{
      $scope.filmList = JSON.parse(localStorage.getItem('listFilm'));
    }

    $scope.addFilm = function(){
      if($scope.nouveauFilm === ""){
        exit();
      }

      $scope.filmList.push($scope.nouveauFilm);
      $scope.nouveauFilm = "";

      localStorage.setItem('listFilm', JSON.stringify($scope.filmList));
    }

    $scope.removeFilm = function(film){
      $scope.filmList.splice($scope.filmList.indexOf(film), 1);

      localStorage.setItem('listFilm', JSON.stringify($scope.filmList));
    }






    for (var i=0;i < 100;i++){
      $scope.awesomeThings.push('Element ' + (i+1))
    }

    $scope.monClick = function () {
      $scope.awesomeThings.push($scope.nouveauFilm);
      $scope.nouveauFilm = "";
    }

    $scope.active = true;
    $scope.nbAffiche = 10;
    $scope.debut = 3;



  });


