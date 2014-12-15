// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.contrib.ui.cards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
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


.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
  var cardTypes = [{
    title: 'Would you want to work with this person?',
    image: 'http://distilleryimage8.ak.instagram.com/e17837faafb611e3b8a7126a0592d374_8.jpg'
  }, {
    title: 'Would you be friends with this person?',
    image: 'http://distilleryimage10.ak.instagram.com/d7373e60a22a11e3a110123da7743db2_8.jpg'
  }, {
    title: 'Would you go on a date with this person?',
    image: 'http://photos-d.ak.instagram.com/hphotos-ak-xfa1/917045_730403106982531_1038497188_n.jpg'
  }];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

  $scope.cardSwiped = function(index) {
    $scope.addCard();
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.nextCard = function(index) {
    $scope.cards.pop();
    //var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    //newCard.id = Math.random();
    //$scope.cards.push(angular.extend({}, newCard));
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }

  $scope.shuffleCards = function() {
    cardTypes.forEach(function(card) {
      $scope.cards.push(angular.extend({}, card));
    });

    //for (var i = 0; i <= cardTypes.length; i++) {
    //  $scope.cards.push(angular.extend({}, cardTypes[i]));
    //}
  }
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
    card.swipe();
  };
});
