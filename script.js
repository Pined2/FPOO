var readline = require('readline-sync');
passagem1 = 0

let i = 0
do{
console.log('+ _ _ _ _ _ _ Passagens Aéreas_ _ _ _ _ _ _ +');
console.log('|                                           |');
console.log('|      1 - Comprar Passagem                 |');
console.log('|      2 - Consultar Voos                   |');
console.log('|      3 - Mapa de Assentos                 |');
console.log('|      4 - Emitir ticket                    |');
console.log('|      0 - Encerrar o programa              |');
console.log('|                                           |');
console.log('+_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _+');

var opcao = readline.question("Digite sua escolha:");
 switch(opcao){
    case "1":
        console.clear()
    var passagem = console.log('+ _ _ _ _ _ _ Passagens Aéreas_ _ _ _ _ _ _ +');
    var passagem = console.log('                                             ');
    var passagem = console.log('Você está em -> Comprar passagem             ');
    var passagem = console.log('                                             ');
    var passagem1 = readline.question('Nome: ');
    var passagem2 = readline.question('Sobrenome: ');
    var passagem3 = readline.question('Idade: ');
    var passagem4 = readline.question('Assento: ');
    var passagem5 = readline.question('Origem: ');
    var passagem6 = readline.question('Destino: ');
    console.log('                                             ');
    console.log('*Resumo da compra*');
    console.log('                                             ');
    console.log('Cliente: '+ passagem1 +" " +passagem2);
    console.log('Idade: '+ passagem3);
    console.log('Assento: '+ passagem4);
    console.log('Voo: '+ passagem5+ " X " + passagem6);
    console.log('                                             ');
    console.log('Valor: R$ 3.500,00');
    break;
   
        case "2":
            console.clear()
            var orides = console.log('+ _ _ _ _ _ _ Passagens Aéreas_ _ _ _ _ _ _ +');
            var orides = console.log('                                             ');
            var orides = console.log('Você está em -> Consultas de voos            ');
            var orides = console.log('                                             ');
            var orides = console.log('Origem                  x             Destino');
            var orides = console.log('                                             ');
            var orides = console.log('_____________________________________________');
            var orides = console.log('                                             ');
            var orides = console.log('Presidente Prudente                    dublin');
            var orides = console.log('Presidente Prudente                    Ceará ');
            var orides = console.log('Presidente Prudente                 São Paulo');
            var orides = console.log('Presidente Prudente                  New York');
            break;
          case "3":
            console.clear()
            var fileiraA = "";
   var fileiraB = "";
   for (let assentos = 1; assentos < 13; assentos++) {
    if(passagem4 == "A"+assentos){
      fileiraA += " X "
      fileiraB += "B"+assentos+" "
    }
    else if(passagem4 == "B"+assentos){
      fileiraA += " X "
      fileiraB += "A"+assentos+" "
    }
    else{
      fileiraA+="A"+assentos+" "
      fileiraB+= "B"+assentos+" "
    }
   }
   console.log(fileiraA)
   console.log(fileiraB)
   break;



            case "4":
                console.clear()
                if(passagem1.length > 0) {
    console.log("+ _ _ _ _ _ _ Passagens Aéreas _ _ _ _ _ _ +");
    console.log("Você está em -> Emitir Ticket");
    console.log("               ");
    console.log("*************************************************");
    console.log("*     OBRIGADO POR VIAJAR CONOSCO     *");
    console.log("*                                               *");
    console.log("*" + "Cliente:" + passagem1 +" "+passagem2   + "*");
    console.log("*" + "Idade:" + passagem3 +" "+passagem4     + "*");
    console.log("*" + "Origem/Destino:" +passagem5 +" "+passagem6 +"*");
    console.log("*" + "Status do Voo:" + "confirmado" +    "*");
    } else {
      console.log("Você ainda não possui um ticket!");
    }
                break;

    case "0":
    i=51
    break;
 }
}while(opcao !=0)