// This is the service.
export class MyDataService {

  myName: string ;
  names: Array<any>;

  constructor() {
    this.myName = "Azza";
    this.names = ['John', 'Mary', 'Joan'];
  }
  getNames() {
    return this.names;
  }

  getMyName(){
    return this.myName;
  }

}
