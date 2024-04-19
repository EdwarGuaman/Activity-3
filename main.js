//LISTA ENLAZADA
class NodoLista{

    constructor(valor){
        this.valor=valor;
        this.siguiente=null;
    
    }

}
let primero=null;

function agregarElemento(valor){

    let nuevo= new NodoLista(valor);
    nuevo.siguiente=primero;
    primero=nuevo;

}
function mostrar(){

    let actual=primero;
    while(actual!=null){

        //document.getElementById("lista").innerHTML=actual.valor;
        
        document.getElementById("lista").innerHTML+="<li>"+ actual.valor+"</li>";


        
        actual=actual.siguiente;
    }
    

}

function eliminar(){
    primero=primero.siguiente;
}







/*

//PILAS
class NodoPila{

    constructor(valor){
        this.valor=valor;
        this.siguiente=null;
    
    }

}

let primeropila=null;

class Pila{

    constructor(){

        this.tope=null;
    }

    agregarElementoPila(valor){

        let nuevo=new NodoPila(valor);
        nuevo.siguiente=this.tope;
        this.tope=nuevo;
        
    }

    mostrar(){

        let actual=this.tope;
        while(actual!=null){

        console.log(actual.valor);
        actual=actual.siguiente;
    }


    }


}



let mipila= new Pila();
mipila.agregarElementoPila(15);
mipila.agregarElementoPila(150);
mipila.agregarElementoPila(1500);
mipila.agregarElementoPila(15000);
mipila.mostrar();

console.log(mipila);




//COLAS



class NodoCola{

    constructor(valor){
        this.valor=valor;
        this.siguiente=null;
    
    }

}

class Cola{

    constructor(){

        this.cola=[];

    }

    agregarElementoCola(valor){

        this.cola.push(valor);
    }

    eliminarElementoCola(){

        return this.cola.shift();
    }

}
*/