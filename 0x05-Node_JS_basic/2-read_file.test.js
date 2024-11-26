const fs = require('fs');
const countStudents = require('./2-read_file');

// Mocking the fs.readFileSync method
jest.mock('fs');

describe('countStudents', () => {
  it('should throw an error if the file does not exist', () => {
    fs.readFileSync.mockImplementation(() => {
      throw new Error('Cannot load the database');
    });
    expect(() => countStudents('nope.csv')).toThrow('Cannot load the database');
  });

  it('should count and log students correctly', () => {
    const mockData = 'firstname,lastname,age,field\nJohann,Kerbrou,30,CS\nGuillaume,Salou,30,SWE\nArielle,Salou,20,CS\nJonathan,Benou,30,CS\nEmmanuel,Turlou,40,CS\nGuillaume,Plessous,35,CS\nJoseph,Crisou,34,SWE\nPaul,Schneider,60,SWE\nTommy,Schoul,32,SWE\nKatie,Shirou,21,CS\n';
    fs.readFileSync.mockReturnValue(mockData);

    console.log = jest.fn();
    countStudents('database.csv');
    
    expect(console.log).toHaveBeenCalledWith('Number of students: 10');
    expect(console.log).toHaveBeenCalledWith('Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie');
    expect(console.log).toHaveBeenCalledWith('Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
  });
});

