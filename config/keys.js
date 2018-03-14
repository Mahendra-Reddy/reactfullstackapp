if(process.env.NODE_ENV === "production"){
  module.exports = require('./prod')
  const keys = require('./prod');
}else{
    module.exports = require('./dev')
}