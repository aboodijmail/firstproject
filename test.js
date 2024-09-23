// THE DIFFRANCE BETWEEN (VAR,LET,CONST):
//
//    -THE SCOPE
//
//       WITH "VAR" WE CAN GET TO IT FROM ANYWERE
//       REGARDLESS WHERE IT WAS (GLOBAL SCOPE OR LOCAL SCOPE).
//
//       VAR ISNT BLOCK SCOPED & FUNCTION SCOPE
//       EVEN IF WE PUT IT INTO {} .
//
//       WITH "LET" WE CAN'T GET IT FROM ANYWERE
//       BECAUSE ITS FUNCTION-SCOPED & BLOCK-SCOPED.
//



function cumulative(array){
    let total =array.reduce(function(prev,current){

        return prev+current
    })
    let arr = [total,array.length]
    return arr

}

console.log(arr);






