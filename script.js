let box=0
function squareSum(arr) {
    let square =arr.map(e=>e*e)
    return square.reduce((prew, next)=> prew+next)
 }
 console.log(squareSum([1,6,4,8,9]))
 console.log(squareSum([1,5]))


