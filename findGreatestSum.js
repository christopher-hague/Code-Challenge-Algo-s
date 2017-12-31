// original solution
function findGreatestSum(arr) {
  var greatestSum = arr[0]
  
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {      
      var curSubArr
      
      j === i ? curSubArr = arr.slice(i) : curSubArr = arr.slice(i, j)
      var curTotal = curSubArr.reduce((sum, num) => sum += num)
      
      if(curTotal > greatestSum) {
        greatestSum = curTotal
      }
    }
  }
  return greatestSum
}
