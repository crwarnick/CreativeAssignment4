/*global angular*/
angular.module("app", [])
    .controller("appCtrl", function($scope) {
        
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
                console.log($scope.toDos);
            };

            $scope.addRecipe = function() {
                $scope.recipes.push({
                    RName: $scope.rName,
                    RIUrl: $scope.riUrl,
                    RUrl: $scope.rUrl
                });
            };

            $scope.addDecor = function() {
                $scope.decors.push({
                    DName: $scope.dName,
                    DIUrl: $scope.diUrl,
                });
            };

            $scope.addActivity = function() {
                $scope.activities.push({
                    AName: $scope.aName,
                    AIUrl: $scope.aiUrl,
                    AUrl: $scope.aUrl
                });
            };

            $scope.addPerson = function() {
                $scope.people.push({
                    PName: $scope.pName,
                    PIUrl: $scope.piUrl,
                    PNumber: $scope.pNumber
                });
            };

        });
