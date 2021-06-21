const pwd = require('./pwd')
const ls = require('./ls');
const cat = require('./cat')
const curl = require('./curl');
const date = require('./date');
const echo = require('./echo')
const head = require('./head');
const tail = require('./tail');
const sort = require('./sort');

// output a prompt
process.stdout.write('prompt >');

//the stdin 'data' event fires after a user types in a line
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim(); //remove the new line

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// })

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(" ");

  if(cmd[0] === 'pwd'){
    pwd(done);
  } else if (cmd[0] === 'ls'){
    ls(done);
  } else if (cmd[0] === 'cat'){
    cat(cmd[1],done);
  } else if (cmd[0] === 'curl') {
    curl(cmd[1],done);
  }else if (cmd[0]==='date'){
    date(done);
  }else if (cmd[0]==='echo'){
    echo(done,cmd);
  } else if(cmd[0]==='head'){
    head(done,cmd[1])
  } else if(cmd[0] === 'tail'){
    tail(done,cmd[1]);
  } else if (cmd[0] === 'sort'){
    sort(done,cmd[1])
  }
  else{

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }

})

const done = (output) =>{
  process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}
