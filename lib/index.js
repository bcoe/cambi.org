var $ = require('jquery')

var Flickity = require('flickity-imagesloaded')

require('./disable-submit-button')($)

$(document).ready(function () {
  var flkty = new Flickity('#carousel', { // eslint-disable-line
    setGallerySize: false,
    wrapAround: true,
    lazyLoad: true
  })

  setTimeout(function () {
    flkty.resize()
  }, 3000)

  $('#subscribe').submit(function (event) {
    // reset message boxes.
    $('#error').addClass('hidden')
    $('#success').addClass('hidden')

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
