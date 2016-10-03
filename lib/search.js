(function(angular){
	angular.module("components")
		.directive("searchBox", [function(){
			return {
				restrict: 'E',
				templateUrl: '/LookUpComponent/lib/searchBox.html',
				scope:{
					ecDisabled: '=',
					dataModel: '=datamodel',
					selectedItem: '=',
					customfilterfunc: '&'
				},
				controller:["$scope", function($scope){
										
					$scope.selectedItem = null;
					
					$scope.clicked = function(){
						$scope.ShowWidget = !$scope.ShowWidget;
					};

					$scope.onKeyDown = function($event){
						if($event.altKey)
							return;
						$scope.selectedItem = null;
					};
					
					$scope.clear = function(){
						$scope.selectedItem = null;
						$scope.searchText = '';
						
					};
					
					$scope.itemSelected = function(selectedItemValue){
						$scope.selectedItem = selectedItemValue;
						$scope.searchText = selectedItemValue.name;
						
						$scope.ShowWidget = false;
					};
					
					$scope.filterfunc = function(item){
						return $scope.customfilterfunc({item: item});
					};
				}]
			};
		}]);
})(angular);


