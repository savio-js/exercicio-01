/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes). */

let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));




let soma = num1 + num2;
alert(`A soma dos dois números é ${soma}`);


let sub = num1 - num2;
alert(`A subtração dos dois números é ${sub}`);


let mult = num1 * num2;
alert(`A multiplicação dos dois números é ${mult}`);


let div = num1 / num2;
alert(`A divisão dos dois números é ${div}`);


let resto = num1 % num2;
alert(`O resto da divisão dos dois números é ${resto}`);


let par = (num1 + num2) % 2;
if (par) {
  alert(`A soma dos dois números é ímpar`);
} else {
  alert(`A soma dos dois números é par`);
}


let igual = num1 == num2;
if (!igual) {
  alert(`Os dois números são diferentes`);
} else {
  alert(`Os dois números são iguais`);
}






