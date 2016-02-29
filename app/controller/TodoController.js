var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('todoTaskEditorCtrl',  [
    '$scope', 
    'Restangular',
    function($scope, Restangular) {
        $scope.tasks = [{id:1,description:"asdasd"}];
        $scope.task = {};
        
        $scope.addTodoTask = function(description) {
            var data = {'description': description};
            Restangular.one('tasks').one('add').customPOST(
                data,
                undefined,
                undefined,
                {"Content-Type":"application/json"}
                ).then(function(response){
                    $scope.tasks = [];
                    $scope.findAll();
                },null)
        };

        $scope.findAll = function() {
            Restangular.one('tasks').get().then(function(response) {
                $scope.tasks = response;
            }, null)
        };

        $scope.remove = function(taskId, index) {
            Restangular.one('tasks').one('remove').customPOST(
                {taskId: taskId},
                undefined,
                undefined,
                {"Content-Type":"application/json"}
                ).then(function(response){
                    $scope.tasks = [];
                    $scope.findAll();
                },null)        
        };

        $scope.findAll();
}]);