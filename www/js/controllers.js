//angular.module('starter.controllers', [])

var siteUrl = 'http://www.muktopata.com/wp-json/wp/v2/product';

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  


  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});


app.controller('HomeCtrl', function($scope, $http, $ionicLoading, $ionicSlideBoxDelegate, $location) {
    
    $ionicLoading.show({
        template: '<img src="img/loading-gif4.gif" width="60" height="60"/>'
      });
        //get posts
      $scope.getPosts = function() {
        $http.get(siteUrl + '?filter[post_status]=publish&filter[posts_per_page]=50&filter[orderby]=date')
         .success(function(data) {
           $scope.posts = data;
            //console.log(posts)
            $ionicSlideBoxDelegate.update();
            $ionicLoading.hide();
         })
        
      }
	  	   	 

			 // Open the cart modal
			$scope.go = function ( path ) {
			  $location.path( path );
			}
      	  
     $scope.getPosts();
	 
	 

	    
    
  
    //refresh page
        $scope.doRefresh = function() {
            $http.get(siteUrl +  '?filter[post_status]=publish&filter[posts_per_page]=50&filter[orderby]=date')
             .success(function(data) {
               $scope.posts = data;
             })
             .finally(function() {
               // Stop the ion-refresher from spinning
               $scope.$broadcast('scroll.refreshComplete');
             });
          };
  
        
});




app.directive('imageonload', function() {
    return {
        restrict: 'A',
      
        link: function(scope, element) {
          element.on('load', function() {
            // Set visibility: true + remove spinner overlay
              element.removeClass('spinner-hide');
              element.addClass('spinner-show');
              element.parent().find('span').remove();
          });
          scope.$watch('ngSrc', function() {
            // Set visibility: false + inject temporary spinner overlay
              element.addClass('spinner-hide');
              // element.parent().append('<span class="spinner"></span>');
          });
        }
    };
});

app.controller('SingleCtrl', function($scope, $stateParams, $http, $ionicLoading, $cordovaSocialSharing, $location) {
     
    $ionicLoading.show({
        template: '<img src="img/loading-gif4.gif" width="60" height="60"/>'
      });
	  
	  	// Open the cart modal
			$scope.go = function ( path ) {
			  $location.path( path );
			};
    
    return $http.get(siteUrl + '?filter[post_status]=publish&filter[posts_per_page]=50&filter[orderby]=date')
    .success(function(data){
        $scope.singlePost = data[$stateParams.id];
        //console.log($scope.singlePost);
        $ionicLoading.hide();
    });
	

    
});

app.controller('CartCtrl', function($scope, $stateParams, $http, $ionicLoading, $cordovaSocialSharing) {
     
    $ionicLoading.show({
        template: '<img src="img/loading-gif4.gif" width="60" height="60"/>'
      });
    
    return $http.get(siteUrl + '?filter[post_status]=publish&filter[posts_per_page]=50&filter[orderby]=date')
    .success(function(data){
        $scope.Post = data;
        //console.log($scope.singlePost);
        $ionicLoading.hide();
    });
	

    
});

app.controller('MenuCtrl', function($scope, $http) {

	         //get catagory
      $scope.getCategorys = function() {
        $http.get('http://muktopata.com/wp-json/wp/v2/product_category')
         .success(function(data) {
           $scope.categorys = data;
            //$ionicSlideBoxDelegate.update();
         })
        
      }
              
     $scope.getCategorys();

        
});

app.filter('fromNow', function() {
  return function(date) {
    return moment(date).fromNow();
  }
});



















