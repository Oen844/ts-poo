export class MyDate {
  public year: number;
  public month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }
  public add(amount: number, type: 'day' | 'month' | 'year') {
    if (type === 'day') {
      this.day += amount;
    } else if (type === 'month') {
      this.month += amount;
    } else if (type === 'year') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1993, 1, 12);

console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
myDate.day = 10;
console.log(myDate.day);
