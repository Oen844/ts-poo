// function getValue (value:number | string):number | string {
//     return value;
// }

function getValue <myType>(value:myType) {
  return value;
}

getValue<number>(1).toFixed(2);
getValue<string>('1').toLowerCase();
getValue<number[]>([1,2,3,5]).forEach(item => console.log(item));





//
