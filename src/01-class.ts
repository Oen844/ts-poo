const data = new Date();
data.getHours();
data.getTime();
data.toISOString();


const date2 = new Date(1993, 1, 12);
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date2);
console.log(data);

class MyDate {
  year : number;
  month : number;
  day : number;

  constructor(year : number, month : number, day : number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

//
