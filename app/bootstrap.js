import angular from 'angular';
import './app.module'; 
import './nav/nav.module';
import './nav/navbar.directive';
import './nav/navbar.controller';
import './home/home.controller';

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});