module.exports = (done) =>{
  let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

  done(month + "-" +date + "-" + year);
}
