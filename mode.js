"use strict";

//Конструктор режимов
function Mode(modeArr) {
   this._modeArr = modeArr;
   this._modeCurrent = modeArr[0];
}
Mode.prototype.getValue = function () {
   return this._modeCurrent;
};
Mode.prototype.getAllValues = function () {
   return this._modeArr;
};
Mode.prototype.setValue = function (modeArrNum) {
   if (modeArrNum >=0 && modeArrNum <= this._modeArr.length) {
   this._modeCurrent = this._modeArr[modeArrNum];
   };
};
Mode.prototype.toString = function () {
   return ": " + this._modeCurrent;
};