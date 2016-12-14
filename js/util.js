function alertShow(){
       var alerted = localStorage.getItem('alerted') || '';
        if (alerted != 'yes') {
         var $toastContent = $('<span style="font-size:18px;font-style: normal;">Caching Complete.</span>');
         Materialize.toast($toastContent, 4000, '', function(){var $toastContents = $('<span style="font-size:18px;font-style: normal;">Future Visits Will Work Offline.</span>');Materialize.toast($toastContents, 4000);});
         localStorage.setItem('alerted','yes');
        }
      }
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
