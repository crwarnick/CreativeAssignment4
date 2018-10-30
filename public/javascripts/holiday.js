/*global angular*/
angular.module("app", [])
    .controller("appCtrl", function($scope, $http) {
            $scope.toDos = [];
            $scope.recipes = [];
            $scope.decors = [];
            $scope.activities = [];
            $scope.people = [];

            $scope.addToDo = function() {
                $scope.toDos.push({
                    ToDo: $scope.toDo,
                    Notes: $scope.notes
                });
                var objData = { ToDo: $scope.toDo, Notes: $scope.notes };
                console.log(objData);
                var toDoURL = 'todo';
                $http({
                    url: toDoURL,
                    method: "POST",
                    data: objData
                }).success(function(data, status, headers, config) {
                    console.log("Post worked");
                }).error(function(data, status, headers, config) {
                    console.log("Post failed");
                });
            };

            $scope.addRecipe = function() {
                $scope.recipes.push({
                    RName: $scope.rName, 
                    RIUrl: $scope.riUrl, 
                    RUrl: $scope.rUrl
                });
                var objData = { RName: $scope.rName, RIUrl: $scope.riUrl, RUrl: $scope.rUrl };
                console.log(objData);
                var recipeURL = 'recipe';
                $http({
                    url: recipeURL,
                    method: "POST",
                    data: objData
                }).success(function(data, status, headers, config) {
                    console.log("Post worked");
                }).error(function(data, status, headers, config) {
                    console.log("Post failed");
                });
            };

            $scope.addDecor = function() {
                $scope.decors.push({
                    DName: $scope.dName, 
                    DIUrl: $scope.diUrl
                });
                var objData = { DName: $scope.dName, DIUrl: $scope.diUrl };
                console.log(objData);
                var decorURL = 'decor';
                $http({
                    url: decorURL,
                    method: "POST",
                    data: objData
                }).success(function(data, status, headers, config) {
                    console.log("Post worked");
                }).error(function(data, status, headers, config) {
                    console.log("Post failed");
                });
            };
    
            $scope.addActivity = function() {
                $scope.activities.push({
                    AName: $scope.aName, 
                    AIUrl: $scope.aiUrl, 
                    AUrl: $scope.aUrl
                });
                var objData = { AName: $scope.aName, AIUrl: $scope.aiUrl, AUrl: $scope.aUrl };
                console.log(objData);
                var activityURL = 'activity';
                $http({
                    url: activityURL,
                    method: "POST",
                    data: objData
                }).success(function(data, status, headers, config) {
                    console.log("Post worked");
                }).error(function(data, status, headers, config) {
                    console.log("Post failed");
                });
            };

            $scope.addPerson = function() {
                $scope.people.push({
                    PName: $scope.pName, 
                    PIUrl: $scope.piUrl, 
                    PNumber: $scope.pNumber
                });
                var objData = { PName: $scope.pName, PIUrl: $scope.piUrl, PNumber: $scope.pNumber };
                console.log(objData);
                var personURL = 'person';
                $http({
                    url: personURL,
                    method: "POST",
                    data: objData
                }).success(function(data, status, headers, config) {
                    console.log("Post worked");
                }).error(function(data, status, headers, config) {
                    console.log("Post failed");
                });
            };
    });