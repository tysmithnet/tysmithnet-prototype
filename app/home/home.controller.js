import angular from 'angular';
import app from '../app.module';

class HomeController {
    constructor($scope) {
        $scope.greeting = "hi";
    }
}

HomeController.$inject = ['$scope'];

app.controller('HomeController', HomeController);

export default HomeController;