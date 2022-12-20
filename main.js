function liberarAcesso() {
  let idade = document.getElementById("idade").value;
  let nome= document.getElementById("nome").value;


  if (idade == ""  || nome=="") {
    alert('Favor informar valor de nome ou idade')
  } else if (idade >= 60) {
    console.log(` ${nome} na melhor idade! entra free`);
  } else if (idade >= 18 && idade < 60){
    console.log(`pode entrar ${nome} ` );
  } else {
    console.log(`pode entra! ${nome} `+ nome);
    
  }
}

// function liberarAcesso(idade, nome) {

//   if (idade >= 18 && idade < 60) {
//     console.log(`pode entrar ${nome} ` );
//   } else if (idade >= 60) {
//     console.log(` ${nome} na melhor idade! entra free`);
//   } else {
//     console.log(`foi barrado no baile`);
    
//   }
// }

// liberarAcesso(75, "josao");
// liberarAcesso(16);
// liberarAcesso("10")
