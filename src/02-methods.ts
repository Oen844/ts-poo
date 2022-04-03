

export class MyDate {
  year : number;
  month : number;
  day : number;

  constructor(year : number, month : number, day : number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }
  add(amount: number, type: 'day'|'month'|'year') {
    if(type === 'day') {
      this.day += amount;
    } else if(type === 'month') {
      this.month += amount;
    } else if(type === 'year') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1993, 1, 12);
console.log(myDate.printFormat());
myDate.add(3, 'day');
console.log('After 3 days: ', myDate.printFormat());
myDate.add(3, 'month');
console.log('After 3 months: ', myDate.printFormat());
