
 export let employees:string[] = ['fernando', 'melissa', 'eduardo']
let salaries:number[] = [1500, 2400, 3200]

//let flowers: string[] = ['rosa', 'girasol', 'lirio', 'rosa azul'];



//for (let i = 0; i <flowers.length; i++ ){

   // console.log(flowers[i]);

//}

 
 
let nombres:string[] = ['ariel', 'aimar', 'charlie', 'taylor' , 'jordan'];
 let apellidos:string[] = ['montoya', 'correa', 'zapata', 'sierra', 'gil'];
 let sueldos:number[] =[1000, 2000, 3000, 4000 , 5000];

 for (let i = 0; i <=4; i++){
    let nombre = nombres[i];
    let apellido = apellidos[i];
    let sueldo = sueldos[i];

    console.log(nombre + ' ' + apellido, 'gana' +' ' +sueldo);

 }