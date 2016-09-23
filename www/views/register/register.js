/**
 * Created by yiming on 16/9/13.
 */
angular.module('starter')

  .controller('registerController',function($scope,$ionicActionSheet,$http,$q){

    $scope.carOwner={
    }

    $scope.Select=function(cmd,data,title,item,field) {

      $scope.fetch(cmd, data).then(function(json) {
        var sr=json.data;
        var buttons=[];
        sr.map(function(r,i) {
          buttons.push({text: r});
        });
        $ionicActionSheet.show({
          buttons:buttons,
          titleText: title!==undefined&&title!==null?title:'',
          cancelText: 'Cancel',
          buttonClicked: function(index) {
            item[field] = sr[index];
            return true;
          },
          cssClass:'motor_insurance_actionsheet'
        });
      });
    };


    $scope.fetch=function(cmd,data){
      var deferred=$q.defer();
      if(cmd!==undefined&&cmd!==null) {
        $http({
          method: "POST",
          url: "/proxy/node_server/svr/request",
          headers: {
            'Authorization': "Bearer " + $rootScope.access_token,
          },
          data:
          {
            request:cmd
          }
        }).then(function(res) {
          var json=res.data;
          deferred.resolve({re: 1, data: json.data});
        }).catch(function(err) {
          var str='';
          for(var field in err)
            str+=err[field];
          console.error('error=\r\n' + str);
        })
      }else{
        deferred.resolve({re: 1, data: data});
      }
      return deferred;
    };


    $scope.go_back=function(){
      window.history.back();
    };

  });
