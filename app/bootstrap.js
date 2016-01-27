import angular from 'angular';
import './app.module'; 
import './home/home.controller';

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});