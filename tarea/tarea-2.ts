 export let kms = 10;

let mile = kms * 0.62;

console.log('10 km en millas es igual a=',mile, 'miles');

function km(km:number , millas:number){

    console.log(`${km} km en millas es igual a= ${km * millas}`);

}

km(24, 0.62);