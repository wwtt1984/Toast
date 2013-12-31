var Toast = function () {};

Toast.prototype._callNative = function (action, args) {
    if (arguments.length == 2) {
        args = []
    }
    return cordova.exec(
        null, // called when signature capture is successful
        null, // called when signature capture encounters an error
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
Toast.prototype.ShowToast = function (content, length) {
    this._callNative("Toast", [content,length]);
    return this;
};

module.exports = (new Toast());
