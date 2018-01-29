var emailRegex = /^.+@.+\..+/

module.exports = function ($) {
  $(document).ready(function () {
    var email = $('#email')
    email.keyup(function () {
      if (emailRegex.test(email.val())) {
        $('#submit').prop('disabled', false)
      } else {
        $('#submit').prop('disabled', true)
      }
    })
  })
}
