let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let bigNumber = 0;

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

// for (let index = 0; index < numbers.length; index++) {
//        console.log(soma += numbers[index]);
// }

// for (let index = 0; index < numbers.length; index++) {
//     console.log((soma += numbers[index])/numbers.length);
// }

for (let index = 0; index < numbers.length; index++) {
    if(bigNumber < numbers[index]){
        bigNumber = numbers[index];
        // console.log('o maior valor atual e: ', bigNumber = numbers[index]);
    } if(bigNumber >= numbers[index] && index >= 9){
        console.log('o maior numero e: ',bigNumber);
    } 
}
