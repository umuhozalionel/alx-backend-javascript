const displayMessage = require('./0-console');

test('displayMessage logs the correct string', () => {
    console.log = jest.fn(); // Mock console.log
    displayMessage('Hello NodeJS!');
    expect(console.log).toHaveBeenCalledWith('Hello NodeJS!');
});
