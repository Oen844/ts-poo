export class MyDate {

  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9
  ) { }

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    } return value;
  }


  public add(amount: number, type: 'day' | 'month' | 'year') {
    if (type === 'day') {
      this._day += amount;
    } else if (type === 'month') {
      this.month += amount;
    } else if (type === 'year') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear() {
    return this.year % 4 === 0;
  }

}

const myDate = new MyDate(1993, 1, 12);
console.log(myDate.printFormat());
const day = myDate.day;
const leap = myDate.isLeapYear;
console.log('Is leap ' + leap);

const myDate2 = new MyDate(2000, 1, 12);
console.log('Is leap ' + myDate2.isLeapYear);
const myDate3 = new MyDate(2004, 1, 12);
console.log('Is leap ' + myDate3.isLeapYear);



//
