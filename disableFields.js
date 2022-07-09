// Use the Radio button to disable fields

(function() {
  'use strict';

  var CHOICE = 'Radio_button'; // field code of radio button
  var FIELD_A = 'Apple_dropdown'; // field code of the field to disable
  var FIELD_B = 'Topping_dropdown'; // field code of another field to disable


  var events = ['app.record.create.show', 'app.record.edit.show', 'app.record.create.change.' + CHOICE, 'app.record.edit.change.' + CHOICE];
  kintone.events.on(events, function(event) {
    var record = event.record;
    var toggleVal = record[CHOICE].value;

    if (toggleVal === 'Apple') {
      record[FIELD_A].disabled = false;
      record[FIELD_B].disabled = true;


    } else {
      record[FIELD_A].disabled = true;
      record[FIELD_B].disabled = false;
    }
    return event;
  });
}());



