"use strict";

//Конструктор настройщика
function Customize(minValue, maxValue, curValue) {
   this._customizeMinValue = minValue;
   this._customizeMaxValue = maxValue;
   this._currentValue = curValue;
} 
Customize.prototype.getValue = function () {
   return this._currentValue;
};
Customize.prototype.nextValue = function () {
   if (this._currentValue < this._customizeMaxValue) {
      this._currentValue++;
   } else {
      alert("Вы достигли максимального значения");
   };
};
Customize.prototype.prevValue = function () {
   if (this._currentValue > this._customizeMinValue) {
      this._currentValue--;
   } else {
      alert("Вы достигли минимального значения");
   };
};
Customize.prototype.setValue = function (value) {
   if (value >= this._customizeMinValue && value <= this._customizeMaxValue) {
      this._currentValue = value;
   } else {
      alert("Вы ввели значение за пределами допустимого");
   };
};
Customize.prototype.toString = function () {
   return ": " + this._currentValue;
};