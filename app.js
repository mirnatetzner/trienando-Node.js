import readline from "readline"

let lista = []
 const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


let p = 'Digite uma propriedade css: ';
function pergunta(p){
  rl.question( p, (propriedade) => {
    propriedade = propriedade.toLowerCase();
    if(propriedade == "sair"||propriedade == "Sair"){
      let order = lista.sort()
      console.log(order);
      rl.close(lista);
    } else {
      lista.push(propriedade);
      pergunta(p);  
    }
  });
}

//primeira pergunta 
pergunta(p);

