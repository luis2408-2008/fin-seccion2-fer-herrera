 export function tablas (base:number, limite:number){
    for (let i = 1;i <=limite; i++ ){
        console.log(base, 'x', i, '=', base * i); 

    }

}

tablas(4,10);