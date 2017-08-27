'use strict';

/**
 * @ngdoc function
 * @name tracxnprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tracxnprojectApp
 */
angular.module('tracxnprojectApp')
  .controller('MainCtrl', function ($scope) {
    
    $scope.data= [
  {
    "id": 1,
    "title": "node1",
    "nodes": [
      {
        "id": 11,
        "title": "node1.1",
        "nodes": [
          {
            "id": 111,
            "title": "node1.1.1",
            "nodes": []
          },
          {
            "id": 111,
            "title": "node1.1.2",
            "nodes": []
          }
        ]
      },
      {
        "id": 12,
        "title": "node1.2",
        "nodes": []
      }
    ]
  },
  {
    "id": 2,
    "title": "node2",
    "nodrop": true,
    "nodes": [
      {
        "id": 21,
        "title": "node2.1",
        "nodes": []
      },
      {
        "id": 22,
        "title": "node2.2",
        "nodes": []
      }
    ]
  },
  {
    "id": 3,
    "title": "node3",
    "nodes": [
      {
        "id": 31,
        "title": "node3.1",
        "nodes": []
      }
    ]
  }
];
$scope.treeOptions = {
    beforeDrop: function(event) {
      console.log(event);
      return event.source.nodesScope.$parent == event.dest.nodesScope.$parent;
    },
    accept: function(sourceNodeScope, destNodesScope, destIndex) {

      return sourceNodeScope.$nodeScope.$parent==destNodesScope.$nodeScope.$parent;
    },
  };
$scope.storage = {title: "", change:""};
$scope.latestcategory="category";
/*$scope.newSubItem = function (scope) {
	console.log(scope);
        var nodeData = scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id * 10 + nodeData.nodes.length,
          title: nodeData.title + '.' + (nodeData.nodes.length + 1),
          nodes: []
        });
      };*/


$scope.newSubItem = function (scope) {
	console.log(scope);
        var nodeData = $scope.storage.change.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id * 10 + nodeData.nodes.length,
          title: scope,
          nodes: []
        });
      };
$scope.newCategory = function () {
	
        
        $scope.data.push({
          id: 10,
          title: $scope.latestcategory,
          nodes: []
        });
      };
$scope.childItem = function (scope) {
	console.log(scope);
	$scope.storage.change= scope;
       
      };

$scope.editItem = function (scope) {
	
	$scope.storage.change= scope;
       
      };

$scope.saveItem = function (value) {
	$scope.storage.change.node.title=value;
       
      };
$scope.collapseAll = function () {
        $scope.$broadcast('angular-ui-tree:collapse-all');
      };
 $scope.expandAll = function () {
        $scope.$broadcast('angular-ui-tree:expand-all');
      };

  });
