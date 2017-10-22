"use strict";

//Конструктор переключателя
function Switch(value) {
   this._switchValue = value;
}
Switch.prototype.getValue = function () {
   return this._switchValue;
};
Switch.prototype.setValue = function (switchValue) {
   if (typeof switchValue === "boolean") {
   this._switchValue = switchValue;
   }
};
Switch.prototype.toString = function () {
   if (this._switchValue === true) {
      return ": Вкл";
   } else {
      return ": Выкл";
   }
};