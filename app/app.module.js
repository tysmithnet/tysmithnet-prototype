import angular from 'angular';
import HomeController from './home/home.controller';

angular
    .module('app', [])
    .controller('HomeController', HomeController);