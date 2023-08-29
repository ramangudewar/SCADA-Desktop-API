const { SerialPort } = require('serialport')
const port = new SerialPort({ path: 'COM5', baudRate: 9600 }, function (err) {
  if (err) {
    return console.log('Error: ', err.message)
  }
})

port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')
})