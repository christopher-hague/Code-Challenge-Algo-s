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

// refactored solution
function findGreatestSum(arr) {
  let greatestSum = arr[0]

  for(let i = 0; i < arr.length; i++) {
    let curSum = 0

    for(let j = i; j < arr.length; j++) {
      curSum += arr[j]

      if(curSum > greatestSum){
        greatestSum = curSum
      }
    }
  }
  return greatestSum
}

