var mess=0;      
function updateOfflineStatus(){
  var $toastOff = $('<span style="font-size:18px;font-style: normal;">You are offline <img src="/images/icons/svgs/offline.svg"/></span>');
  Materialize.toast($toastOff, 5000);
  mess=1;
  changeColorOffline();
}
function updateOnlineStatus(){
   if(mess==1){
    var $toastOn = $('<span style="font-size:18px;font-style: normal;">You are back online <img src="/images/icons/svgs/check.svg" /></span>');
    Materialize.toast($toastOn, 5000);
    changeColorOnline();
   }
}
function changeColorOffline(){
   document.getElementsByTagName("HTML")[0].setAttribute("class", "t-grey");
   document.getElementsByClassName("btn-floating btn-large purple darken-4")[0].setAttribute("class", "btn-floating btn-large grey darken-1");
   document.querySelector('meta[name="theme-color"]').setAttribute("content", "#607D8B");
   document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", "#607D8B");
   document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", "#607D8B");
   document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", "grey-translucent");
   document.getElementsByClassName("tabs")[0].style.background='#607D8B';
}
function changeColorOnline(){
   document.getElementsByTagName("HTML")[0].setAttribute("class", "t-purple");
   document.getElementsByClassName("btn-floating btn-large grey darken-1")[0].setAttribute("class", "btn-floating btn-large purple darken-4");
   document.querySelector('meta[name="theme-color"]').setAttribute("content", "#673AB7");
   document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", "#673AB7");
   document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", "#673AB7");
   document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", "purple-translucent");
   document.getElementsByClassName("tabs")[0].style.background='#673AB7';
}
window.addEventListener('offline', updateOfflineStatus);
window.addEventListener('online', updateOnlineStatus);

if (!navigator.onLine) {
    changeColorOffline();
}
$(document).keydown(function(e){
if (e.keyCode==85 && e.ctrlKey)
    alert("Sorry ;) Try harder next time!");
    window.location = "https://google.com";
});
if (window.location.protocol=="view-source:https:") { window.location = "https://google.com"; }
