//angular.module('starter.services', [])

app.service('myPosts', ['$http', function($http){
    return $http.get('http://brandage.com.ng/wp-json/posts?filter[post_status]=publish&filter[posts_per_page]=25&filter[orderby]=date&filter[order]=desc')

        .success(function(data){
            return data;
        })
        .error(function(err){
            return err;
        });
		
		
		.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];
    
	

    
}])

