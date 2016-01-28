import angular from 'angular';
import HomeController from './home.controller';

/**
 * Directive that will hold the ui-view element and show the background 
 * pattern. It is essentially just a placeholder directive.
 */
class HomeDirective {
    constructor(){
        this.restrict = 'E';
        this.controller = HomeController; 
        this.templateUrl = 'app/home/home.template.html';
    }
    
    static factoryFunction(){
        return new HomeDirective();
    }
}

angular
    .module('app')
    .directive('tsHome', HomeDirective.factoryFunction);
    
export default HomeDirective;