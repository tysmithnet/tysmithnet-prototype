import angular from 'angular';
import NavbarController from './navbar.controller';

class NavbarDirective {
    constructor(){
        this.restrict = 'E';
        this.controller = NavbarController;
        this.templateUrl = 'app/nav/navbar.template.html';
    }
    
    link(scope, element, attr, ctr) {
        
    }
    
    static factoryFunction() {
        return new NavbarDirective();
    }
}

angular
    .module('app.nav')
    .directive('tsNavbar', NavbarDirective.factoryFunction);
    
export default NavbarDirective;