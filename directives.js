//Directive
weatherApp.directive("weatherReport",function(){
    
    return {
        restrict: 'E',
        templateUrl : 'directive-templates/weather-report.html',
        replace     : true,
        scope: {
            weatherDay: "=",
            standard : "&",
            convertDate: "&",
            dateFormat : "@"
        }
    }
});

////Directive
//weatherApp.directive("footer",function(){
//    
//    return {
//        restrict: 'E',
//        templateUrl : 'directive/footer.html',
//        replace     : true,
//    }
//});

