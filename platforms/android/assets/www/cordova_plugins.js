cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/at.modalog.cordova.plugin.cache/www/Cache.js",
        "id": "at.modalog.cordova.plugin.cache.Cache",
        "clobbers": [
            "cache"
        ]
    },
    {
        "file": "plugins/com.danielcwilson.plugins.googleanalytics/www/analytics.js",
        "id": "com.danielcwilson.plugins.googleanalytics.UniversalAnalytics",
        "clobbers": [
            "analytics"
        ]
    },
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-sslcertificatechecker/www/SSLCertificateChecker.js",
        "id": "cordova-plugin-sslcertificatechecker.SSLCertificateChecker",
        "clobbers": [
            "window.plugins.sslCertificateChecker"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraConstants.js",
        "id": "org.apache.cordova.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
        "id": "org.apache.cordova.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/Camera.js",
        "id": "org.apache.cordova.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverHandle.js",
        "id": "org.apache.cordova.camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/net.yoik.cordova.plugins.screenorientation/www/screenorientation.js",
        "id": "net.yoik.cordova.plugins.screenorientation.screenorientation",
        "clobbers": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "file": "plugins/net.yoik.cordova.plugins.screenorientation/www/screenorientation.android.js",
        "id": "net.yoik.cordova.plugins.screenorientation.screenorientation.android",
        "merges": [
            "cordova.plugins.screenorientation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "at.modalog.cordova.plugin.cache": "1.0.0",
    "com.danielcwilson.plugins.googleanalytics": "0.6.1",
    "com.ionic.keyboard": "1.0.4",
    "com.phonegap.plugins.PushPlugin": "2.4.0",
    "com.wongatech.cordova-disable-nsurl-cache": "0.0.1-dev",
    "cordova-plugin-sslcertificatechecker": "5.0.0",
    "org.apache.cordova.camera": "0.3.6",
    "org.devgeeks.privacyscreen": "0.0.5",
    "net.yoik.cordova.plugins.screenorientation": "1.3.4"
}
// BOTTOM OF METADATA
});