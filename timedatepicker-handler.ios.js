"use strict";
var applicationModule = require("application");
var _isInit = false;
var _iOSApplication = applicationModule.ios;
var mPickerManager;
var MyDelegate1 = (function (_super) {
    __extends(MyDelegate1, _super);
    function MyDelegate1() {
        _super.apply(this, arguments);
    }
    MyDelegate1.prototype.setCallback = function (callback) {
        this.mCallback = callback;
    };
    MyDelegate1.prototype.actionSheetPickerViewDidSelectDate = function (pickerView, date) {
        this.dateFormater = NSDateFormatter.alloc().init();
        this.dateFormater.dateFormat = "dd MM yyyy HH:mm Z";
        this.mCallback(this.dateFormater.stringFromDate(date));
    };
    MyDelegate1.ObjCProtocols = [IQActionSheetPickerViewDelegate];
    return MyDelegate1;
}(NSObject));
var _delegate = new MyDelegate1();
var _title = "";
function init(mCallback, title, initialDate, doneText, cancelText, buttonColor) {
    _delegate.setCallback(mCallback);
    if (doneText || cancelText) {
        console.log("TIMEDATEPICKER: Cancel and Done text strings are deprecated it will use the ios system default. If you need to localize them check how to do it here https://github.com/AntonioCuevaUrraco/nativescript-timedatepicker ");
    }
    if (title) {
        _title = title;
    }
    mPickerManager = IQActionSheetPickerView.alloc().initWithTitleDelegate(_title, _delegate);
    if (mPickerManager) {
        _isInit = true;
    }
    if (initialDate) {
        mPickerManager.date = _toNativeDate(initialDate);
    }
    if (buttonColor) {
        mPickerManager.toolbarButtonColor = buttonColor;
    }
    if (_isInit) {
        return true;
    }
    else {
        console.log("DATETIMEPICKER: the initialize of the plugin failed");
        return false;
    }
}
exports.init = init;
function _isInitFunction() {
    if (_isInit) {
        return true;
    }
    else {
        console.log("DATETIMEPICKER: you have to initialize the plugin first");
        return false;
    }
}
function registerCallback(mCallback) {
    if (_isInitFunction()) {
        console.log("DATETIMEPICKER: registerCallback is not supported for iOS");
    }
}
exports.registerCallback = registerCallback;
function showDatePickerDialog() {
    if (_isInitFunction()) {
        mPickerManager.actionSheetPickerStyle = 1;
        mPickerManager.show();
    }
}
exports.showDatePickerDialog = showDatePickerDialog;
function showTimePickerDialog() {
    if (_isInitFunction()) {
        mPickerManager.actionSheetPickerStyle = 3;
        mPickerManager.show();
    }
}
exports.showTimePickerDialog = showTimePickerDialog;
function showDateTimePickerDialog() {
    if (_isInitFunction()) {
        mPickerManager.actionSheetPickerStyle = 2;
        mPickerManager.show();
    }
}
exports.showDateTimePickerDialog = showDateTimePickerDialog;
function dismiss() {
    if (_isInitFunction()) {
        mPickerManager.dismiss();
    }
}
exports.dismiss = dismiss;
function _toNativeDate(date) {
    if (_isInitFunction()) {
        var comps = NSDateComponents.alloc().init();
        comps.day = date.getDate();
        comps.month = date.getMonth() + 1;
        comps.year = date.getFullYear();
        comps.hour = date.getHours();
        comps.minute = date.getMinutes();
        var cal = NSCalendar.alloc().initWithCalendarIdentifier(NSGregorianCalendar);
        return cal.dateFromComponents(comps);
    }
}
function setMinDate(date) {
    if (_isInitFunction()) {
        mPickerManager.minimumDate = _toNativeDate(date);
    }
}
exports.setMinDate = setMinDate;
function setMaxDate(date) {
    if (_isInitFunction()) {
        mPickerManager.maximumDate = _toNativeDate(date);
    }
}
exports.setMaxDate = setMaxDate;
function setMinTime(minHour, minMinute) {
    if (_isInitFunction()) {
        console.log("DATETIMEPICKER: setMinTime is not supported for iOS");
    }
}
exports.setMinTime = setMinTime;
function setMaxTime(maxHour, maxMinute) {
    if (_isInitFunction()) {
        console.log("DATETIMEPICKER: setMaxTime is not supported for iOS");
    }
}
exports.setMaxTime = setMaxTime;
//# sourceMappingURL=timedatepicker-handler.ios.js.map