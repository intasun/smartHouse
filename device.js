"use strict";

//Сборщик
function Device(name){
   this._name = name;
   this._objSwitch = {};
   this._objCustomise = {};
   this._objMode = {};
};
Device.prototype.getDeviceName = function(){
   return this._name;
}
Device.prototype.addPropInObjSwitch = function(name, newSwitch){
   this._objSwitch[name] =  newSwitch;
   return this._objSwitch;
}
Device.prototype.addPropInObjCustomise = function(name, newCustomise){
   this._objCustomise[name] =  newCustomise;
   return this._objCustomise;
}
Device.prototype.addPropInObjMode = function(name, newMode){
   this._objMode[name] =  newMode;
   return this._objMode;
}
Device.prototype.getSwitchValue = function(name){
   return this._objSwitch[name].getValue();
}
Device.prototype.setSwitchValue = function(name, value){
   return this._objSwitch[name].setValue(value);
}
Device.prototype.getCustomizeValue = function(name){
   return this._objCustomise[name].getValue();
}
Device.prototype.setCustomizeValue = function(name, value){
   value = +value;
   return this._objCustomise[name].setValue(value);
}
Device.prototype.customizeNextValue = function(name){
   return this._objCustomise[name].nextValue();
}
Device.prototype.customizePrevValue = function(name){
   return this._objCustomise[name].prevValue();
}
Device.prototype.getModeValue = function(name){
   return this._objMode[name].getValue();
} 
Device.prototype.getAllModeValues = function(name){
   return this._objMode[name].getAllValues();
} 
Device.prototype.setModeValue = function(name, propNum){
   return this._objMode[name].setValue(propNum);
}  
Device.prototype.toString = function(){
   var statusOfDevice = "";
   for (var eachSwitch in this._objSwitch){
      statusOfDevice += eachSwitch + this._objSwitch[eachSwitch].toString () + "<br />";
   }
   for (var eachCustomise in this._objCustomise){
      statusOfDevice += eachCustomise + this._objCustomise[eachCustomise].toString () + "<br />";
   }
   for (var eachMode in this._objMode){
      statusOfDevice += eachMode + this._objMode[eachMode].toString () + "<br />";
   }
   return statusOfDevice;
} 