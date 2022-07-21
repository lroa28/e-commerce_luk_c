export default class Persona {
    //estas variables solo se puede acceder desde la clase, es privada
    private fname: string; 
    private lname: string;
  
    constructor(fname: string, lname: string) {
      this.fname = fname;
      this.lname = lname;
    }
  
    getFullName(): string {
      return `${this.fname} ${this.lname}`;
    }
  }
