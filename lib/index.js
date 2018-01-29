var $ = require('jquery')
require('../public/js/jquery-slideshow-1.0.7.min')($)
require('./disable-submit-button')($)

$(document).ready(function () {
  $('#slideshow').slideShow()
  $('#subscribe').submit(function (event) {
    // reset message boxes.
    $('#error').addClass('hidden')

    // submit the form with AJAX.
    event.preventDefault()
    $.ajax({
      type: 'post',
      url: 'subscribe',
      data: $('#subscribe').serialize(),
      error: function (result) {
        $('#error')
          .removeClass('hidden')
          .text(result.responseText)
        $('#email').addClass('error')
      },
      success: function (result) {
        $('#email').val('')
        $('#subscribe').addClass('hidden')
        $('#success').removeClass('hidden')
      }
    })
  })
})
