var Toast = function () {};

Toast.prototype._failureCallback = function (msg) {
    console.log("Toast Javascript Callback Error: " + msg)
};

Toast.prototype._callNative = function (action, args, successCallback) {
    if (arguments.length == 2) {
        args = []
    }
    return cordova.exec(
        successCallback, // called when signature capture is successful
        this._failureCallback, // called when signature capture encounters an error
        'ToastPlugin', // Tell cordova that we want to run "JPush"
        action, // Tell the plugin the action we want to perform
        args); // List of arguments to the plugin
};



/**
 * 设置提示值
 * @param msg
 * @param callback
 * @returns {*}
 */
Toast.prototype.ShowToast = function (msg,timeout, callback) {
    this._callNative("Toast", [msg,timeout], callback);
    return this;
};

module.exports = (new Toast());
