//ARBOLES

class Nodo{

    constructor(valor){

        this.valor=valor;
        this.izquierda=null;
        this.derecha=null;
        
    }
}

class arbolBinario{

    constructor(){
        this.raiz=null;
    }

//  INICIO AGREGAR
    agregarElemento(valor){
        let nuevo=new Nodo(valor);
        if(this.raiz==null){

            this.raiz=nuevo;
    
        }else{

            this.agregar(nuevo,this.raiz);

        }

    }

    agregar(nuevo,nodo){
        //comparacion izquierda
        if(nuevo.valor<nodo.valor){ 
           
            if(nodo.izquierda==null){

                nodo.izquierda=nuevo;
            }
            else{
                this.agregar(nuevo,nodo.izquierda);
            }
           
        }else{

            // comparacion derecha

            if(nodo.derecha==null){

                nodo.derecha=nuevo;

            }
            else{
                this.agregar(nuevo,nodo.derecha);
            }

        }
    }
//FIN AGREGAR

// BUSQUEDA DE VALOR

    buscar(valor){

        return this.buscarElemento(valor,this.raiz);
    }

    buscarElemento(valor,nodo){

        if(nodo!=null){

            if(valor<nodo.valor){
                return this.buscarElemento(valor,nodo.izquierda);
            }
            else{

                if(valor>nodo.valor){
                    return this.buscarElemento(valor,nodo.derecha);
                }
                else{
                    return nodo;
                }
            }
        }
    }
//FIN BUSQUEDA VALOR

//RECORRIDO EN ORDEN
    buscarenOrden(){

        let resultado=[];
        this.enOrdenAux(this.raiz,resultado);
        return resultado;
    }

    enOrdenAux(nodo, resultado){

        if(nodo!=null){

            this.enOrdenAux(nodo.izquierda,resultado);
            resultado.push(nodo.valor);
            this.enOrdenAux(nodo.derecha,resultado);
            
        }

    }
// FIN RECORRIDO ORDEN

// RECORRIDO EN PREORDEN

    buscarenPreOrden(){
        let resultado=[];
        this.enPreOrdenAux(this.raiz,resultado);
        return resultado;
    }


    enPreOrdenAux(nodo,resultado){

        if(nodo!=null){

            resultado.push(nodo.valor);
            this.enPreOrdenAux(nodo.izquierda,resultado);
            this.enPreOrdenAux(nodo.derecha,resultado);
        }
    }

// FIN RECORRIDO PREORDEN

// RECORRIDO POSTORDEN

    buscarenPostOrden(){
        let resultado=[];
        this.enPostOrdenAux(this.raiz,resultado);
        return resultado;
    }


    enPostOrdenAux(nodo,resultado){

        if(nodo!=null){

            this.enPostOrdenAux(nodo.izquierda,resultado);
            this.enPostOrdenAux(nodo.derecha,resultado);
            resultado.push(nodo.valor);
            
            
        }
    }

// FIN RECORRIDO POSTORDEN    

}


let myarbol= new arbolBinario();

myarbol.agregarElemento(10);
myarbol.agregarElemento(7);
myarbol.agregarElemento(20);
myarbol.agregarElemento(15);
//console.log(myarbol);
//console.log(myarbol.buscar(20));
console.log(myarbol.buscarenOrden());
console.log(myarbol.buscarenPreOrden());
console.log(myarbol.buscarenPostOrden());
