//estructura condicional
let edad = prompt("Digite su edad:")

if ( edad >= 18) {
    // si la condicion es verdadera, pasa esto
    alert("Eres Mayor De Edad")
    } else {
        // si la condicion es falsa, pasa esto
        alert("Eres Menor De Edad")
}

/*calcular el salario de un empleado de acuerdo a los siguientes topes:

- si el salario es igual a 1.300.000 se descontara 4% y 5% en pension
-si gana entre 1.3M a 2.5M se decontara 5% y 6%
-si gana mas de 2.5M  se descontara 6 y 7%

*/

let salario = Number(prompt("digite el sarlio del empleado"));
let salud, pension, salarioNeto;
//calculos a raelizar
if (salario == 1300000) {
    salud = salario * 0.04;
    pension = salario * 0.05;
    salarioNeto = salario - salud - pension;

}

else if (salario >= 1300000 && salario <= 2500000) {
    salud = salario * 0.05;
    pension = salario * 0.06;
    salarioNeto = salario - salud - pension;

}

//si el salario es mayor a 2.5M 
else if (salario > 2500000) {
    
    salud = salario * 0.06;
    pension = salario * 0.07;
    salarioNeto = salario - salud - pension;
}else{
    salarioNeto = salario;
}
document.write(
    "El salario del emepleado es: "+salario+"<br>"
    +"Dto en salud: "+salud+"<br>"
    +"Dto en pension: "+pension+"<br>"
    +"-------------------------------------"+"<br>"
    +"Salario neto: "+salarioNeto+"</br>"

)