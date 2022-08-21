import { cliente } from "./Cliente.js";

export class contaCorrente {
  _cliente;
  conta;
  agencia;
  _saldo = 0;
  static numeroDeContas = 0;

  constructor (cliente, conta, agencia){
    this._cliente = cliente;
    this.conta = conta;
    this.agencia = agencia;
    contaCorrente.numeroDeContas += 1;
  }


  set cliente(novoValor){
    if(novoValor instanceof cliente)
    this._cliente = novoValor;
  }

  get cliente(){
    return this._cliente;
  }


  get saldo(){
    return this._saldo
  }

  sacar(valor){
    if(this._saldo >= valor)
    this._saldo -= valor
      return valor;
  }

  depositar(valor){
    if(valor <= 0) return //Early return(verifica algo q vc n quer primeiro para evitar rodar o codigo todo)
    this._saldo += valor;
      
  }
  
  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);

  }



}