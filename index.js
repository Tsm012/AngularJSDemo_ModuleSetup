import angular from "angular";
import "@uirouter/angularjs";
import "./modules/main.module"

let app = angular.module("AngularComponentDemo", ['ui.router', 'main.module'])
    
app.config(["$locationProvider", function ($locationProvider) {    
    $locationProvider.html5Mode(true);
}]);
