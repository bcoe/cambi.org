var emailRegex = /^.+@.+\..+/

module.exports = function ($) {
  $(document).ready(function () {
    var email = $('#email')

    function validate (val) {
      if (emailRegex.test(val)) {
        $('#submit').prop('disabled', false)
      } else {
        $('#submit').prop('disabled', true)
      }
    }

    email.keyup(function () {
      validate(email.val())
    })

    email.on('paste', function (e) {
      validate(e.originalEvent.clipboardData.getData('text'))
    })
  })
}
