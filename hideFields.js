
/*
 * Open/close group fields depending on radio button choice
 *
 * Licensed under the MIT License
 */
(function() {
  'use strict';

  // define variables
  var GROUP1 = 'Customer_group'; // field code of Field Group 1
  var GROUP2 = 'Vendor_group'; // field code of Field Group 2


  var RADIOBUTTON = 'Radio_button'; // field code of radio button field
  var FIELDVALUE1 = 'Customer Order'; // first value of radio button field
  var FIELDVALUE2 = 'Vendor Order'; // second value of radio button field


  var eventsSubmit = ['app.record.detail.show',
    'app.record.create.show',
    'app.record.edit.show',
    'app.record.create.change.' + RADIOBUTTON,
    'app.record.edit.change.' + RADIOBUTTON];
  kintone.events.on(eventsSubmit, function(e) {
    var record = e.record;
    var radioButtonValue = record[RADIOBUTTON].value;

    // First, close all Field Groups
    kintone.app.record.setGroupFieldOpen(GROUP1, false);
    kintone.app.record.setGroupFieldOpen(GROUP2, false);


    // open/close Field Groups depending on radio button choice
    switch (radioButtonValue) {
      case FIELDVALUE1:
        kintone.app.record.setGroupFieldOpen(GROUP1, true);
        break;
      case FIELDVALUE2:
        kintone.app.record.setGroupFieldOpen(GROUP2, true);
        break;

    }
  });
})();