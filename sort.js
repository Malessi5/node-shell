const fs = require('fs')

module.exports = (done,file) =>{
  fs.readFile(file, 'utf8',(err,data) =>{
    //let newArr = [];
    if (err){
      throw err;
    }else {
      let arr = data.split('\n').sort();
      done(arr.join('\n'))

    }

  })
  }
