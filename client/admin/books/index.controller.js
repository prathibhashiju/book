﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('Books.IndexController', Controller);

    function Controller(BookService,UserService) {
        var vm = this;
vm.userid=null;
        vm.books = [];

        initController();

        function initController() {
 UserService.GetCurrent().then(function (user) {
                vm.userid = user._id;

            });
            vm.loading = true;
            BookService.GetAll()
                .then(function (books) {
                    vm.loading = false;
                    vm.books = books;
                });
        }
    }

})();
