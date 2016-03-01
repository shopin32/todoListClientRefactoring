'use strict';

/* Services */

var todoTasksServices = angular.module('todoTasksServices', ['restangular']);

todoTasksServices.factory('TasksService', ['Restangular',
  function(Restangular){
  	return {
  		addTodoTask: function(task,callback){
  			Restangular.one('tasks').one('add').customPOST(
  			 	task,
  			 	undefined,
  			 	undefined
		 	).then(function(response){
		 		callback && callback(response);
		 	})
  		},
  		findAll: function(callback){
  			Restangular.one('tasks').get().then(function(response) {
                callback && callback(response);
            }, null)
  		},
  		remove: function(taskId,callback){
  			Restangular.one('tasks').one('remove').customPOST(
                undefined,
                undefined,
                {taskId: taskId}
            ).then(function(response){
                callback && callback(response);
            },null)
  		}
  	}
}]);