import { cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";


const cliente1 = new cliente("Pedro", 5788455, 5784994)

const cliente2 = new cliente("Marta", 2225548, 777481)


//------------------------------------------------------------//

const contaCorrentePedro = new contaCorrente(cliente1,15554844, 2445757)


//------------------------------------------------------------//
const contaCorrenteMarta = new contaCorrente(cliente2,1555588, 4751994 )


//------------------Operações------------------------//

//Teste de operações 
contaCorrenteMarta.depositar(500)
contaCorrentePedro.depositar(500)
console.log(contaCorrentePedro, contaCorrenteMarta)
contaCorrentePedro.sacar(275)
console.log(contaCorrentePedro, contaCorrenteMarta)
contaCorrentePedro.transferir(400, contaCorrenteMarta)
console.log(contaCorrentePedro, contaCorrenteMarta)
console.log(contaCorrentePedro.cliente)
console.log(`O saldo da conta e de ${contaCorrentePedro._saldo}`)








