import angular from 'angular';
import './app.module';
 
import './nav/nav.module';
import './nav/navbar.directive';
import './nav/navbar.controller';

import './home/home.controller';
import './home/home.directive';

angular.element(document).ready(() => {
    angular.bootstrap(document, ['app']);
});