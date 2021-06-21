const fs = require('fs')

module.exports = (done,file) =>{
  fs.readFile(file, 'utf8',(err,data) =>{
    let newArr = [];
    if (err){
      throw err;
    }else {

      let arr = data.split('\n');
      for(let i=0; i<10; i++){
        newArr.unshift(arr[arr.length-i])
      }

      done(newArr.join('\n'))

    }

  })
  }
