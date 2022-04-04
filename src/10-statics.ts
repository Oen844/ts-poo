console.log(Math.PI);
console.log(Math.max(1, 2, 3, 4, 5));


class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {


    return numbers.reduce((max, item)=> max >= item ? max : item, numbers[0]);
  }

}




// const math = new MyMath();
 console.log('PI: '+MyMath.PI);
  console.log( MyMath.max(1, 2, 3, 4, 5));
  console.log( MyMath.max(-1, -2, -3, -4, -5));







//



