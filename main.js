//ORDENAMIENTO POR SELECCION
let myarray = [10,8,7,3,9,1,4,2,5,6];


for (let i=0; i<=myarray.length-1;i ++){
    let aux;
    
       for (let j=0;j<=myarray.length-1;j++){
            
            if(myarray[i]<myarray[j]){
                aux=myarray[i];
                myarray[i]=myarray[j];
                myarray[j]=aux;
            
            }     
       }
       
       
} 

console.log(myarray);

let myarrays= [10,8,7,3,9,1,4,2,5,6];

console.log(myarrays);
for(let i=1;i<=myarrays.length-1;i++){

    let valoraInsertar=myarrays[i];
    let posicionActual=i;
      
            while(posicionActual>0 && myarrays[posicionActual-1]< valoraInsertar){
                myarrays[posicionActual]=myarrays[posicionActual-1];
                posicionActual--;
            }

            if(posicionActual!=i){
                myarrays[posicionActual]=valoraInsertar;
            }
    

}console.log(myarrays);