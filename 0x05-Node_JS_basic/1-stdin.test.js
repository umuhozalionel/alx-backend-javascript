const { spawn } = require('child_process');

test('interactive mode', (done) => {
  const child = spawn('node', ['1-stdin.js']);
  let output = '';

  child.stdout.on('data', (data) => {
    output += data.toString();
  });

  child.stdout.on('end', () => {
    expect(output).toContain('Welcome to Holberton School, what is your name?');
    done();
  });

  child.stdin.write('John\n');
  child.stdin.end();
});

test('piped input mode', (done) => {
  const child = spawn('sh', ['-c', 'echo "John" | node 1-stdin.js']);
  let output = '';

  child.stdout.on('data', (data) => {
    output += data.toString();
  });

  child.stdout.on('end', () => {
    expect(output).toContain('Welcome to Holberton School, what is your name?');
    expect(output).toContain('Your name is: John');
    expect(output).toContain('This important software is now closing');
    done();
  });
});
