//Ejercicio 1

function multiplication (a, b){
    return a*b;
}

console.log(multiplication(1,4));
console.log(multiplication(5,4));
console.log(multiplication(32,87));

//Ejercicio 2

function average (a, b, c, d){
    return ((a+b+c+d)/4);
}

console.log(average(1,1,1,1));
console.log(average(10,4,15,8));

//Ejercicio 3 faltan cosas

function price(sinIVA, IVA){
    const total = sinIVA+(sinIVA*IVA);
    return (total);
    
}

console.log (price(10, 0.21));


//Ejercicio 4

function oddOrEven (num){
    if (num % 2 === 0){
        console.log ("Es un número par");
    }else {
        console.log ("Es un númpero impar");
    }
}

oddOrEven(311);

//Ejercicio 5

function getEl (){
    document.querySelector()
}