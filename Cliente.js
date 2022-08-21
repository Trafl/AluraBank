export class cliente {
  nome;
  _cpf;
  rg;
  
  constructor(nome, cpf, rg){
    this.nome = nome;
    this._cpf = cpf; 
    this.rg = rg;
   
  }

  get cpf(){
    return this._cpf;
  }
}