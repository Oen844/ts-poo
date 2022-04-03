export class MyDate {
  public year: number;
  public month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }
  private addPadding(value: number){
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
}

const myDate = new MyDate(1993, 1, 12);
console.log(myDate.printFormat());
//console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
//myDate.day = 10;
//console.log(myDate.day);


