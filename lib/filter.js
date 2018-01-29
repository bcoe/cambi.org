module.exports = function (file) {
  return file.match('index.scss') || file.match('.js')
}