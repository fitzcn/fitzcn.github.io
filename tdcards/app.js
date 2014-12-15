// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards'])


.config(function($stateProvider, $urlRouterProvider) {

})

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

.controller('CardsCtrl', function($scope, $sce, TDCardDelegate) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }

  console.log('CARDS CTRL');
  var cardTypes = [{
    title: 'Would you want to work with this person?',
    image: 'http://distilleryimage8.ak.instagram.com/e17837faafb611e3b8a7126a0592d374_8.jpg',
    map: 'https://a.tiles.mapbox.com/v4/fitzcn.kgbb5fog/attribution,zoompan,zoomwheel.html?access_token=pk.eyJ1IjoiZml0emNuIiwiYSI6InVTV1luQ0UifQ.xvYrvgBMkKkM-QYJtTyxuw'
  }, {
    title: 'Would you be friends with this person?',
    image: 'http://distilleryimage10.ak.instagram.com/d7373e60a22a11e3a110123da7743db2_8.jpg',
    map: 'https://a.tiles.mapbox.com/v4/fitzcn.kgbb5fog/attribution,zoompan,zoomwheel.html?access_token=pk.eyJ1IjoiZml0emNuIiwiYSI6InVTV1luQ0UifQ.xvYrvgBMkKkM-QYJtTyxuw'
  }, {
    title: 'Would you go on a date with this person?',
    image: 'http://photos-d.ak.instagram.com/hphotos-ak-xfa1/917045_730403106982531_1038497188_n.jpg',
    map: 'https://a.tiles.mapbox.com/v4/fitzcn.kgbb5fog/attribution,zoompan,zoomwheel.html?access_token=pk.eyJ1IjoiZml0emNuIiwiYSI6InVTV1luQ0UifQ.xvYrvgBMkKkM-QYJtTyxuw'
  }];


  $scope.cards = Array.prototype.slice.call(cardTypes, 0);
  
  $scope.setFrame = function() {
    document.getElementById("mapFrame").src = "http://www.cnn.com";
  }
  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
})

.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };
});
