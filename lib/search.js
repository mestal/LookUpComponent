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
					
					//filtervalues: '='
				},
				controller:["$scope", function($scope){
										
					$scope.selectedItem = null;
					
					$scope.clicked = function(){
						
						$scope.ShowWidget = !$scope.ShowWidget;
						
					};

					$scope.onKeyDown1 = function($event){
						if($event.altKey)
							return;
						$scope.selectedItem = null;
						//alert('keydown pressed');
						
					};
					
					$scope.clear = function(){
						
						$scope.selectedItem = null;
						$scope.searchText3 = '';
						
					};
					
					$scope.itemSelected = function(selectedItemValue){
						//alert(selectedItemValue);
						$scope.selectedItem = selectedItemValue;
						$scope.searchText3 = selectedItemValue.name;
						
						$scope.ShowWidget = false;
						
					};
					
					$scope.filterfunc = function(item){
						return $scope.customfilterfunc({item2: item});
					};
					
				}]
			};
		}]);
})(angular);


