 console.log('inicio del programa');


 1; export let notasLuis: number = 70;

if (notasLuis < 90 && notasLuis >= 0){
    console.log('usted ha perdido la materia');
} else if (notasLuis >= 90 && notasLuis <= 100 ){

    console.log('usted ha aprobado la materia')

} else {
    console.log('usted ha perdido el año');
}

console.log('fin del programa');
















 2;  export let mesesAño: number = 4;

switch (mesesAño ){
    case 1:
        console.log('enero')
        break;

}




switch (mesesAño ){
    case 2:
        console.log('febrero')
        break;

}

switch (mesesAño ){
    case 3:
        console.log('marzo')
        break;

        default:
            console.log('no hay meses');
}










3;  let cellPhone:number = 100;


while (cellPhone >=0){
      console.log('%', cellPhone);

      cellPhone--;
} 


console.log('tu celular se ha descargado');










let base = 5;
let limit = 10;

for (let i = 1; i <= limit; i++){
    console.log(base, 'x', i, '=', base * i);

}