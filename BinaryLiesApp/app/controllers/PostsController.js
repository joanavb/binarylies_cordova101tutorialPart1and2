"use strict";
var PostsController = ['$scope', '$cordovaInAppBrowser', 'postsService', function ($scope, $cordovaInAppBrowser, postsService) {
    var self = this;

    $scope.model = {
        posts: []
    };

    self.Init = function () {
        $scope.model.posts = postsService.GetPosts();
    }

    $scope.openPost = function (item) {
        $cordovaInAppBrowser.open(item.Url, '_blank', { location: 'no' });;
    }

    self.Init();
}];