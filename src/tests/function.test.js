const { sayHello, wellDoneSprint14, haveSex} = require('../tests/function');

test('Create a greeting', () => {
 expect(sayHello('Anne', 'Sam')).toBe('Hello, Mr. Anne Sam!');
})

test ('Create a greeting',() => {
  expect(wellDoneSprint14('Samuel', 'Luo')).toBe('Congrats, passed the Sprint 14 Samuel Luo')
})

it ('Create an event', () => {
  expect(haveSex('pink pussy', 'soft boobs')).toBe('Tonight gonna fuck Anne\'s pink pussy & soft boobs')
})