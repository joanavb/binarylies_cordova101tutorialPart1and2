var PostsService = ['$http', '$q', function ($http, $q) {
    var self = this;

    self.Posts = [];

    this.GetPosts = function () {
        // You would probbably want to make a $http request here to obtain your data
        self.Posts = [
            { Id: 1, Title: "Sinatra Tests 101 - RSpec", Date: new Date("2015-03-16"), Author: "Tiago Casanova", Url: "http://binarylies.ghost.io/sinatra-tests-101/", ImageUrl: "http://blog.softartisans.com/wp-content/uploads/2012/03/sinatraruby.jpg" },
            { Id: 2, Title: "Sinatra Tests 101 - MiniTest", Date: new Date("2015-03-31"), Author: "Tiago Casanova", Url: "http://binarylies.ghost.io/sinatra-tests-101-minitest/", ImageUrl: "http://blog.softartisans.com/wp-content/uploads/2012/03/sinatraruby.jpg" },
            { Id: 3, Title: "Cordova + Ionic in Visual Studio - 101 Tutorial [Part I]", Date: new Date("2015-04-16"), Url: "http://binarylies.ghost.io/cordova-ionic-in-visual-studio/", Author: "Joana Barbosa", ImageUrl: "https://xrgqhq.dm2302.livefilestore.com/y2pFCNt436TcSShqnPwputyXorHc1Szo8rwrJJzMXp9NWUWYFvGtm3BlG95ohv2MvaCHJo63vD87xgJiu7fw_aNmzR9lceKyXymu7f3ZUFXP4dd2XS41CN-celCPvaJ1wDogkcicT0Q1Es07g6O_o7iHw/cordova_p1_header.png?psid=1" },
            { Id: 4, Title: "Sinatra Tests 101 - Cucumber (Webrat & Capybara)", Date: new Date("2015-04-29"), Author: "Tiago Casanova", Url: "http://binarylies.ghost.io/sinatra-tests-101-cucumber/", ImageUrl: "http://binarylies.ghost.io/content/images/2015/04/cucumber-ruby-2.png" },
            { Id: 5, Title: "Wandering thoughts - General Tools API", Date: new Date("2015-05-19"), Author: "Tiago Casanova", Url: "http://binarylies.ghost.io/general-tools-api/", ImageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Social_Network_Analysis_Visualization.png" },
            { Id: 6, Title: "ReactJS + jQuery Nestable = Drag & Drop Menu Manager", Date: new Date("2015-07-09"), Author: "Tiago Casanova", Url: "http://binarylies.ghost.io/reactjs-nestable-menu-manager/", ImageUrl: "https://camo.githubusercontent.com/59ff5a9f16ead0abb26765f31badaa40899d7e0b/687474703a2f2f692e696d6775722e636f6d2f7948334a6b49482e706e67" }
        ];

        return self.Posts;
    },

    this.GetPostById = function (id) {
        for (var i = 0; i != self.Posts.length; i++) {
            if (self.Posts[i].Id == id) {
                return self.Posts[i];
            }
        }
    }
}];