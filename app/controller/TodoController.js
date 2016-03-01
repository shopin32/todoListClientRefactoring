var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('todoTaskEditorCtrl',  [
    '$scope', 
    'TasksService',
    function($scope, TasksService) {
        $scope.tasks = [{id:1,description:"asdasd"}];
        $scope.task = {};
        
        $scope.addTodoTask = function(description) {
            var data = {'description': description};
            TasksService.addTodoTask(data,function(response){
                $scope.tasks = [];
                $scope.findAll();
            });
        };

        $scope.findAll = function() {
            TasksService.findAll(function(response) {
                $scope.tasks = response;
            });
        };

        $scope.remove = function(taskId, index) {
            TasksService.remove(taskId,function(response){
                $scope.tasks = [];
                $scope.findAll();
            })        
        };

        $scope.findAll();
}]);