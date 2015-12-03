"use strict";
var AppController = ['$scope', '$ionicPopover', '$location', '$state', '$cordovaSocialSharing', function ($scope, $ionicPopover, $location, $state, $cordovaSocialSharing) {
    var self = this;

    $scope.rootModel = {
        isPinned: false,
        search: false
    }

    self.Init = function () {

        $ionicPopover.fromTemplateUrl('app/templates/popover-menu.html', {
            scope: $scope,
        }).then(function (popover) {
            $scope.menuPopover = popover;
        });

        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.menuPopover.remove();
        });
    }

    $scope.openPopoverMenu = function ($event) {
        $scope.menuPopover.show($event);
    };

    $scope.closePopoverMenu = function () {
        $scope.menuPopover.hide();
    };

    $scope.openPopoverMenuOption = function (option) {

        $scope.closePopoverMenu();

        if (option == 'share') {
            var title = "Binary Lies Mobile App";
            var message = document.title;
            var url = "http://binarylies.ghost.io/";

            $scope.share(title, title + " : " + message, url, null);
        }
    }

    $scope.goToPath = function (path) {
        $location.path(path);
    };

    $scope.toggleSearch = function (show) {
        $scope.rootModel.search = show;
    }

    $scope.SubmitSearch = function () {
    }

    //$scope.goBack = function () {
    //    $ionicHistory.goBack();
    //}

    $scope.share = function (title, message, link, file) {
        $cordovaSocialSharing
        .share(message, title, file, link) // Share via native share sheet
        .then(function (result) {
            console.log("shared successfully");
        }, function (err) {
            // An error occured. Show a message to the user
            alert("Ocorreu um erro ao partilhar.");
        });
    }
    self.Init();
}];