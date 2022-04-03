export class MyDate {

  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
  ) { }

  public printFormat(): string {
    const day = this.addPadding(this.day);
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
      this.day += amount;
    } else if (type === 'month') {
      this.month += amount;
    } else if (type === 'year') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }

}

const myDate = new MyDate(1993, 1, 12);
console.log(myDate.printFormat());
//console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);

const myDate2 = new MyDate();
console.log('MyDate2 ' + myDate2.printFormat());
console.log('MyDate2 ' + myDate2.getDay());



//
