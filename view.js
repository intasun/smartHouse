"use strict";

//Визуализатор устройств 
var parentDiv = document.body.children[2];

function viewer (ObjDevices){
   var switches = ObjDevices._objSwitch;
   var customises = ObjDevices._objCustomise;
   var modes = ObjDevices._objMode;
   var viewDevice = document.createElement("div");
   viewDevice.setAttribute("name", ObjDevices.getDeviceName() ); 
   //Шапка
   var headSpan = document.createElement("span");
   headSpan.className = "centerText";
   
   var removeInput = document.createElement("input");
   removeInput.type = "button";
   removeInput.className = "right remove";
   removeInput.setAttribute("name", "remove");
   removeInput.value = "x";
   removeInput.onclick = function(){
      var num = ArreyOfDevices.indexOf(ObjDevices); 
      ArreyOfDevices.splice(num, 1); 
      refresh();
   };
   
   var hDevice = document.createElement("h3");
   hDevice.innerHTML = ObjDevices.getDeviceName();
   
   headSpan.appendChild(removeInput);
   headSpan.appendChild(hDevice);
   viewDevice.appendChild(headSpan);
   
    //Свичи
   var nameInputRadio;
   var switchDiv;
   var switchSpanOn;
   var switchSpanCenter;
   var switchSpanOff;
   var switchInputOn;
   var switchLabelInputOn;
   var switchInputOff;
   var switchLabelInputOff;
   var currentSwitchProp;
   for (var switchProp in switches) {
      //див со свичем
      nameInputRadio = ObjDevices.getDeviceName() + switchProp;
      switchDiv = document.createElement("div");
      switchDiv.className = "switch";
      switchDiv.setAttribute("name", switchProp); 
      //спан со свичем для включения
      switchSpanOn = document.createElement("span");
      switchSpanOn.className = "left switchLabel";
      switchSpanOn.setAttribute("name", switchProp);
      switchSpanOff = document.createElement("span");
      switchSpanOff.className = "right switchLabel";
      switchSpanOff.setAttribute("name", switchProp);
      //инпут со свичем вкл
      switchInputOn = document.createElement("input");
      switchInputOn.type = "radio";
      switchInputOn.className = "on-off";
      switchInputOn.setAttribute("name", nameInputRadio); 
      switchInputOn.value = "true";
      switchInputOn.onclick = function (){
         currentSwitchProp = this.parentNode.getAttribute("name");
         ObjDevices.setSwitchValue(currentSwitchProp, true);
         refresh();
      };
      
      switchLabelInputOn = document.createElement("label");
      switchLabelInputOn.htmlFor = switchInputOn;
      switchLabelInputOn.innerHTML = " Вкл";
      //инпут со свичем выкл
      switchInputOff = document.createElement("input");
      switchInputOff.type = "radio";
      switchInputOff.className = "on-off";
      switchInputOff.setAttribute("name", nameInputRadio); 
      switchInputOff.value = "false";
      switchInputOff.onclick = function(){
         currentSwitchProp = this.parentNode.getAttribute("name");
         ObjDevices.setSwitchValue(currentSwitchProp, false);
         refresh();
      };
      switchLabelInputOff = document.createElement("label");
      switchLabelInputOff.htmlFor = switchInputOn;
      switchLabelInputOff.innerHTML = "Выкл ";
      
      if(ObjDevices.getSwitchValue(switchProp) === true){
         switchInputOn.setAttribute("checked", "checked"); 
      } else {
         switchInputOff.setAttribute("checked", "checked"); 
      }
      
      //наполняем главный див свичами
      switchSpanCenter = document.createElement("span");
      switchSpanCenter.className = "centerText";
      switchSpanCenter.innerHTML = switchProp;
      switchSpanOn.appendChild(switchInputOn);
      switchSpanOn.appendChild(switchLabelInputOn);
      
      switchSpanOff.appendChild(switchLabelInputOff);
      switchSpanOff.appendChild(switchInputOff);
      switchDiv.appendChild(switchSpanOn);
      switchDiv.appendChild(switchSpanCenter);
      switchDiv.appendChild(switchSpanOff);
      viewDevice.appendChild(switchDiv);
   }; 
   
   //Настройщики
   var valueInputText; 
   var nameDivCustomise;
   var customiseDiv;
   var customiseSpanPrev;
   var customiseSpanNext;
   var customiseSpanVal;
   var customInputPrev;
   var customInputNext;
   var customInputVal;
   var customSpan;
   var currentCustomProp;
   for (var customProp in customises) {
      valueInputText = customises[customProp].getValue();
      nameDivCustomise = customProp;
      customiseDiv = document.createElement("div");
      customiseDiv.className = "customize";
      customiseDiv.setAttribute("name", nameDivCustomise); 
      //обертка спан для инпута
      customiseSpanPrev = document.createElement("span");
      customiseSpanPrev.setAttribute("name", customProp);
      //инпут настройка prev
      customInputPrev = document.createElement("input");
      customInputPrev.type = "button";
      customInputPrev.className = "left next-prev";
      customInputPrev.setAttribute("name", "customize");
      customInputPrev.value = "-";
      customInputPrev.onclick = function(){
         currentCustomProp = this.parentNode.getAttribute("name");
         ObjDevices.customizePrevValue(currentCustomProp);
         refresh();
      };
      //обертка спан для инпута
      customiseSpanNext = document.createElement("span");
      customiseSpanNext.setAttribute("name", customProp);
      //инпут настройка next
      customInputNext= document.createElement("input");
      customInputNext.type = "button";
      customInputNext.className = "right next-prev";
      customInputNext.setAttribute("name", "customize");
      customInputNext.value = "+";
      customInputNext.onclick = function(){
         currentCustomProp = this.parentNode.getAttribute("name");
         ObjDevices.customizeNextValue(currentCustomProp);
         refresh();
      };
      //обертка спан для инпута
      customiseSpanVal = document.createElement("span");
      customiseSpanVal.setAttribute("name", customProp);
      //инпут настройка значения
      customInputVal= document.createElement("input");
      customInputVal.type = "text";
      customInputVal.className = "right";
      customInputVal.setAttribute("name", "text");
      customInputVal.value = valueInputText;
      customInputVal.onblur = function(){
         currentCustomProp = this.parentNode.getAttribute("name");
         ObjDevices.setCustomizeValue(currentCustomProp, this.value);
         refresh();
      };
      //спан названия настройщика
      customSpan= document.createElement("span");
      customSpan.className = "centerText";
      customSpan.innerHTML += customProp;
      //наполняем главный див
      customiseSpanPrev.appendChild(customInputPrev);
      customiseSpanNext.appendChild(customInputNext);
      customiseSpanVal.appendChild(customInputVal);
      customiseDiv.appendChild(customiseSpanPrev);
      customiseDiv.appendChild(customiseSpanVal);
      customiseDiv.appendChild(customSpan);
      customiseDiv.appendChild(customiseSpanNext);
      viewDevice.appendChild(customiseDiv);
   };   
   
      //Режимы
   var valueOption;
   var tmpOuter;
   var modeDiv;
   var modeSpan;
   var modeSelect;
   var tmpInner = "";
   for (var modeProp in modes) {
      tmpOuter = modes[modeProp].getAllValues();
      for (var tmpMode in tmpOuter){
         tmpInner  +=  '<option value="' + tmpMode + '">' + tmpOuter[tmpMode] + '</option>'
      }
      //див режимов
      modeDiv = document.createElement("div");
      modeDiv.className = "mode";
      //спан режимов
      modeSpan = document.createElement("span");
      modeSpan.className = "centerText";
      modeSpan.innerHTML += modeProp;
      //селект режимов
      modeSelect = document.createElement("select");
      modeSelect.className = "right";
      modeSelect.setAttribute("name", "mode");
      modeSelect.innerHTML += tmpInner;
      modeSelect.onchange = function(){
         var tmpArrMode = ObjDevices.getAllModeValues(modeProp);
         var arrModeIndex = +modeSelect.value;
         ObjDevices.setModeValue(modeProp, arrModeIndex);
         refresh();
      }
      //наполняем главный див
      modeDiv.appendChild(modeSpan);
      modeDiv.appendChild(modeSelect);
      viewDevice.appendChild(modeDiv);
   } 
   
   //Статус
   var statusDiv = document.createElement("div");
   statusDiv.className = "infoStatus";
   var statusSpan = document.createElement("span");
   statusSpan.className = "centerText";
   statusSpan.innerHTML += "<u>Статус:</u><br />";
   statusSpan.innerHTML += ObjDevices.toString();
   
   statusDiv.appendChild(statusSpan);
   viewDevice.appendChild(statusDiv);
   parentDiv.appendChild(viewDevice);
}

//Обновление экрана
function refresh(){
   parentDiv.innerHTML = "";
   for (var itemDevices in ArreyOfDevices){
      viewer(ArreyOfDevices[itemDevices]); 
   }
}