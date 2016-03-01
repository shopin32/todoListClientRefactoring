'use strict';

// Declare app level module which depends on views, and components
var todoListApp = angular.module('todoList', [
  'ngRoute',
  'todoControllers',
  'todoTasksServices',
  'restangular'
  
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'pages/tasks-editor.html',
        controller: 'todoTaskEditorCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
