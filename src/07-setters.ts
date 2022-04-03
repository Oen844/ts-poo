export class MyDate {

  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) { }

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
      this._month += amount;
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
  set day(value: number) {
    if (value < 1 || value > 31) {
      throw new Error('Invalid day');
    }
    this._day = value;
  }
  set mouth(value: number) {
    if (value < 1 || value > 12) {
      throw new Error('Invalid mouth');
    }
    this._month = value;
  }
  get mouth() {
    return this._month;
  }

}

const myDate = new MyDate(1993, 1, 12);
myDate.mouth=12;
console.log(myDate.printFormat());
console.log('My mouth is ' + myDate.mouth);



//
