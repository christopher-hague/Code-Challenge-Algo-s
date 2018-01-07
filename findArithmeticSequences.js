function isArithmetic(arr){
  let targetDifference = arr[1] - arr[0]
  for(var i = 0; i < arr.length - 1; i++) {
    if(arr[i + 1] - arr[i] !== targetDifference) {
      return false
    }
  }
  return true
}
