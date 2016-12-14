      function updateOfflineStatus(){
        var $toastOff = $('<span style="font-size:18px;font-style: normal;">You are offline.</span>');
        Materialize.toast($toastOff, 5000);
        mess=1;
      }
      var mess=0;
      function updateOnlineStatus(){
        if(mess==1){
         var $toastOn = $('<span style="font-size:18px;font-style: normal;">You are back online.</span>');
         Materialize.toast($toastOn, 5000);
        }
      }
     window.addEventListener('offline', updateOfflineStatus);
     window.addEventListener('online', updateOnlineStatus);
