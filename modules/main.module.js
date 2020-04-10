import HOME_COMPONENT from "../components/home-component";
import ABOUT_COMPONENT from "../components/about-component";

export const MAIN_MODULE = angular.module("main.module", [])
    .component("homeComponent", HOME_COMPONENT)
    .component("aboutComponent", ABOUT_COMPONENT);

    MAIN_MODULE.config(function($stateProvider) {
    var helloState = {
        name: 'home',
        url: '/',
        component: 'homeComponent'
    }
    
    var aboutState = {
        name: 'about',
        url: '/about',
        component: 'aboutComponent'
    }
    
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
    });
    