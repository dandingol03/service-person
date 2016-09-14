/**
 * Created by yiming on 16/9/14.
 */
angular.module('starter')

  .controller('myController',function($scope,$state,$http,$ionicActionSheet) {

    $scope.go_back=function(){
      window.history.back();
    };

    $scope.order_intend='';
    $scope.order_intends=['维修','车驾管'];
    //接单偏好选择
    $scope.set_order_intend=function() {

        var buttons=[];
        $scope.order_intends.map(function(price,i) {
          buttons.push({text: price});
        });
        $ionicActionSheet.show({
          buttons:buttons,
          titleText: '选择接单偏好',
          cancelText: 'Cancel',
          buttonClicked: function(index) {
            $scope.order_intend= $scope.order_intends[index];
            return true;
          },
          cssClass:'motor_insurance_actionsheet'
        });

    }


  })
