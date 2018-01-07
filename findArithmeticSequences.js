// define helper function
function isArithmetic(arr){
  let targetDifference = arr[1] - arr[0]
  for(var i = 0; i < arr.length - 1; i++) {
    if(arr[i + 1] - arr[i] !== targetDifference) {
      return false
    }
  }
  return true
}

function solution(A) {
  let arithmeticSlices = []
  for(let i = 0; i <= A.length; i++) {
    for(let j = i + 2; j < A.length; j++) {
      if(isArithmetic(A.slice(i, j + 1))) {
        arithmeticSlices.push([i, j])
      }
    }
  }
  return arithmeticSlices.length
}
