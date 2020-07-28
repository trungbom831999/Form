'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('register', 'register.html'),
            new Route('login', 'login.html')
        ]);
    }
    init();
}());
