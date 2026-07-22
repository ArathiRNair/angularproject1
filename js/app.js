var app=angular.module("campus360",[]);
app.controller("dashboardcontroller",function($scope){

    $scope.collegename="FIS";
    $scope.totalStudents=18500;
    $scope.totalFaculty=90;
    

    console.log("dashboard controller is loaded");
    $scope.students=[
    "Avany c","Lakshmi krishna","sivani","sandra"
    ];
    $scope.addstudent=function(){
        $scope.totalStudents++;
        $scope.showStudents=true;
        $scope.showDashboard=true;
    };
});