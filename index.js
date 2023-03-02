// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };

//   console.log(car.color);

// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda-feira',
//     3: 'terça-feira',
//     4: 'quarta-feira',
//     5: 'quinta-feira',
//     6: 'sexta-feira',
//     7: 'sábado',
//   };
  
//   console.log(diasDaSemana['5']);

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//     }
// }

// console.log('A jogadora ' + player.name+ ' ' + player.lastName+ ' ' + 'tem' + ' ' + player.age+ ' ' + 'anos de idade')

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora ' + player.name+ ' ' + player.lastName+ ' ' + 'foi eleita a melhor do mundo por ' +player.bestInTheWorld.length+ ' vezes.');

// console.log('A jogadora possui '+ player.medals.golden + ' de ouro e '+ player.medals.silver+ ' de prata.')

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge' 
//   };
  
//   for (let name in names) {
//     console.log("Olá " + names[name])
//   }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  
  for (let key in car) {
    console.log(key + ': ' + car[key]);
  }