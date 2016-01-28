import angular from 'angular';

class HomeController {
    constructor() {
    }
}

HomeController.$inject = [];

angular
    .module('app')
    .controller('HomeController', HomeController);

export default HomeController;