import angular from 'angular';

class HomeController {
    constructor($scope) {
        $scope.greeting = "hi";
    }
}

HomeController.$inject = ['$scope'];

export default HomeController;