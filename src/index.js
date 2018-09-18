module.exports = function getZerosCount(number) {
  // your implementation
  var result =0;
    for(var i=5; i<=number; i*=5){
      result += Math.floor(number/i);
  }
    return result;
}
