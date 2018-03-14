if(process.env.NODE_ENV === "production"){
  module.exports = require('./prod')
  const keys = require('./prod');
  console.log(keys.googleClientID)
}else{
    module.exports = require('./dev')
}