const { doesNotMatch } = require('assert');
const ls = require('fs');

module.exports = (done) => {
  ls.readdir('./', 'utf8',(err,files)=>{
    if (err){
      throw err
    } else {
      done(files.join('\n'))
      // process.stdout.write(files.join('\n'));
      // process.stdout.write('\n');
      // process.stdout.write('prompt >');
    }
  })
}

