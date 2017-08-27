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
    "title": "Electronics",
    "nodes": [
      {
        "id": 11,
        "title": "Phones",
        "nodes": [
          {
            "id": 111,
            "title": "Chargers",
            "nodes": []
          },
          {
            "id": 111,
            "title": "Cases and Covers",
            "nodes": []
          }
        ]
      },
      {
        "id": 12,
        "title": "Cameras",
        "nodes": []
      },
      {
        "id": 13,
        "title": "Computers",
        "nodes": []
      }
    ]
  },
  {
    "id": 2,
    "title": "Accessories",
    "nodrop": true,
    "nodes": [
      {
        "id": 21,
        "title": "Strap",
        "nodes": []
      },
      {
        "id": 22,
        "title": "Selfie Stick",
        "nodes": []
      }
    ]
  },
  {
    "id": 3,
    "title": "Books",
    "nodes": [
      {
        "id": 31,
        "title": "e-books",
        "nodes": []
      }
    ]
  },
  {
    "id": 4,
    "title": "Fashion",
    "nodes": []
  },
  {
    "id": 5,
    "title": "Appliances",
    "nodes": []
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
$scope.child_storage={title:"", change:""};
$scope.latestcategory="";
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
        var nodeData = $scope.storage.change.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id * 10 + nodeData.nodes.length,
          title: scope,
          nodes: []
        });

        $scope.storage = {title: "", change:""};
      };

$scope.newCategory = function () {
	
        
        $scope.data.push({
          id: 10,
          title: $scope.latestcategory,
          nodes: []
        });
         $scope.latestcategory="";
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
	$scope.storage={title: "", change:""};
       
      };
$scope.collapseAll = function () {
        $scope.$broadcast('angular-ui-tree:collapse-all');
      };
 $scope.expandAll = function () {
        $scope.$broadcast('angular-ui-tree:expand-all');
      };

  });
