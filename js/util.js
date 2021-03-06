var mess = 0;

function updateOfflineStatus() {
    var d = new Date(new Date().getTime()).toLocaleDateString();
    var t = new Date(new Date().getTime()).toLocaleTimeString();
    console.log('Went Offline on ' + d + ' at ' + t);
    var $toastOff = $('<span style="font-size:18px;font-style: normal;">You are offline <img src="/images/icons/svgs/offline.svg"/></span>');
    Materialize.toast($toastOff, 5000);
    mess = 1;
    changeColorOffline();
}

function updateOnlineStatus() {
    if(mess == 1) {
        var $toastOn = $('<span style="font-size:18px;font-style: normal;">You are back online <img src="/images/icons/svgs/check.svg" /></span>');
        Materialize.toast($toastOn, 5000);
        changeColorOnline();
   }
}

function changeColorOffline() {
    document.getElementsByTagName("HTML")[0].setAttribute("class", "t-grey");
    document.getElementsByClassName("btn-floating btn-large purple darken-4")[0].setAttribute("class", "btn-floating btn-large grey darken-1");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#607D8B");
    document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", "#607D8B");
    document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", "#607D8B");
    document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", "grey-translucent");
}

function changeColorOnline() {
    document.getElementsByTagName("HTML")[0].setAttribute("class", "t-blue");
    document.getElementsByClassName("btn-floating btn-large grey darken-1")[0].setAttribute("class", "btn-floating btn-large purple darken-4");
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#039be5");
    document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", "#039be5");
    document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", "#039be5");
    document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", "blue-translucent");
}

window.addEventListener('offline', updateOfflineStatus);
window.addEventListener('online', updateOnlineStatus);

if (!navigator.onLine) {
    changeColorOffline();
}

navigator.getBattery().then(function(battery) {
    var batteryLevel = battery.level*100;
    batteryLevel = batteryLevel.toPrecision(3);
    if(batteryLevel <= 30) {
        var $battoast = $('<span style="font-size:18px;font-style: normal;">Low Battery (' + batteryLevel + '%)<img src="/images/icons/svgs/lowbat.svg" /></span>');
        Materialize.toast($battoast, 5000);
    }
})
