//const { request } = require('http')

const { doesNotMatch } = require('assert');
const request = require('request')

module.exports = (url,done) =>{
  request(url,function(err,response,body){
    if (err){
      throw err;
    }else {
      done(body)
      // process.stdout.write(body);
      // process.stdout.write('\nprompt > ');
    }
  })
}
