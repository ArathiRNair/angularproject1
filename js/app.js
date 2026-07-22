var app=angular.module("campus360",[]);
app.controller("dashboardcontroller",function($scope){

    $scope.collegename="FiSaT";
    $scope.totalStudents=1800;
    $scope.totalFaculty=90;
    

    console.log("dashboard controller is loaded");
    $scope.students=[
    "Avany c","Lakshmi krishna","sivani","sandra"
    ];
  
        $scope.fees=150000;
        $scope.today=new Date();
        $scope.departments=[
            "CSE","MCA","MBA","EEE","BCA","ECE","IMCA"
        ];
        $scope.selectedDepartment="MCA";
         $scope.addstudent=function(){
            $scope.totalStudents++;
    };
});