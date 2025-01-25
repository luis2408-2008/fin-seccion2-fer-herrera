 export function tablas (base:number, limite:number){
    for (let i = 1;i <=limite; i++ ){
        console.log(base, 'x', i, '=', base * i); 

    }

}

tablas(4,10);







function calculo (kms:number ){

    let mile = kms * 0.62;
    console.log(`${kms} km en millas es igual a = ${mile} millas`);

 }
 
 
// calculo(6);

function nombreMayuscula(texto: string){
    console.log(texto.toUpperCase());
}

//nombreMayuscula('fercho antonio');







function tablas1 (inicio:number, final:number){

    for (let i= 1;i <=final  ;i++){

        console.log(`${inicio} x ${i} = ${inicio * i}`);

    }

}

tablas1(2,10);










function resultado (base:number, altura: number){

    let area = base * altura /2

   console.log(`el área de un triángulo con la base ${base} y altura ${altura} es igual a = ${area}`);




 }

 resultado (20, 10);
 resultado (500, 300);




function conversion (dolares:number,cop: number){
     
     

     let total = Math.round(dolares * cop );

    console.log (`${dolares} dólares es igual a ${total} cop}`);

 }

 conversion(1,4314.06);







 export function area(base:number, altura:number){


    console.log(`el area del triángulo rectangulo es de: ${(base * altura)/2}`);

}


area(50,25);


function km(km:number , millas:number){

    console.log(`${km} km en millas es igual a= ${ (Math.round) (km * millas)}`);

}

km(100, 0.62);
 


let numeros = [1, 9, 0, 6 , 725, 7253, 912, 4 , 9, 7 , 64, 863, 8364]


for (let i= 0;i <= numeros.length -1; i++){

    let numero = numeros[i];

    if ((numero % 2) === 0){

        console.log(numero + ' es par');
     
        
    } else {
        console.log(numero + ' es impar');
    }

