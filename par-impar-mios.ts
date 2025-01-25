

 export function modulo (numeros:number[]){
 
    for (let i= 0;i <= numeros.length -1; i++){

        let numero= numeros[i]


        if (( numero  %   2) === 0){
            console.log(numero + ' es par')
        } else {
            console.log (numero + ' es impar');
        }

    }

   

 } 


 modulo([2, 898, 844623, 4681651, 5646546]);
