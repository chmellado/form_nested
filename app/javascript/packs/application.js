import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"




Rails.start()
Turbolinks.start()
ActiveStorage.start()

require("jquery")
require("@popperjs/core")
// import "bootstrap"
// import { Modal } from 'bootstrap'
import { Tooltip, Popover } from 'bootstrap'

jQuery(function () {
  // alert(123456)
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl)
  })

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new Popover(popoverTriggerEl)
  })
})


require('./nested-forms/addFields')
require('./nested-forms/removeFields')

// $(document).ready(function() {
//   $('form').on('click', '.remove_fields,' function() {
//     $(this).prev('input[type=hidden]').val('1');
//     $(this).closest('fieldset').hide();
//     event.preventDefault();
    
    
//     // Todo el código aquí.
//     console.log("esta llegando")
    
    
//   });

//   $('form').on 'click', '.remove_fields', (event) ->
//   $(this).prev('input[type=hidden]').val('1')
//   $(this).closest('fieldset').hide()
//   event.preventDefault()


// });


