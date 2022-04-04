interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver : Driver = {
//   database: 'test',
//   password: 'test',
//   port: 3306


// }{

// }

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){}
  connect():void {
    console.log('Connecting to database PostgresDriver');
  }
  disconnect(): void{
    console.log('Disconnecting from database PostgresDriver');
  }
  isConnected(name: string): boolean{
    return true;
  }
}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){}
  connect():void {
    console.log('Connecting to database OracleDriver');
  }
  disconnect(): void{
    console.log('Disconnecting from database PostgresDriver');
  }
  isConnected(name: string): boolean{
    return true;
  }
}

const postgresDriver = new PostgresDriver('test', 'test', 3306);

console.log(postgresDriver.database);
console.log(postgresDriver.password);
console.log(postgresDriver.port);
postgresDriver.connect();
postgresDriver.disconnect();
console.log(postgresDriver.isConnected('test'));
