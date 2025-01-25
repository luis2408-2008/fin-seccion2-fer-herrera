function max (a:number, b:number, c:number){

    if (a > b){
 
     return (a > c) ? a : c;
 
    }
 
    if (b > c){
 
     return b;
 
    }
 
    return ( a > c) ? a: c;
 
     
 }
 
 
  export let maxValue= max (2, 1, 0);
 
 
 console.log(`el numero mayor es ${maxValue}`)