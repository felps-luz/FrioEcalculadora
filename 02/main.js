class Calculadora {
    constructor(){
        //é o visor
        this.valor='0'
    }
    //método para add numero
    adicionarNumero(numero){
        if(this.valor==='0'){
            // vai substituir se for zero no visor
            this.valor = numero
        } else{
            //então coloque o valor atrás do numero no visor
            this.valor+=numero
        }
        //atualizar visor
        this.atualizarVisor()
    }

    adicionarOperacao(operacao){
        if(
            this.valor.slice(-1)=== '+' ||
            this.valor.slice(-1)=== '-' ||
            this.valor.slice(-1)=== '*' ||
            this.valor.slice(-1)=== '/' 
        ) {
            //substituir operação 
            this.valor = this.valor.slice(0, -1) + operacao
        } else{
            //colocar operação
            this.valor += operacao
        }

        this.atualizarVisor
    }
    limpar(){
        //metodo para limpar visor
        this.valor ='0'
        this.atualizarVisor()
    }

    resultado(){
        try{
            //Converter string em numeros
            this.valor = eval(this.valor).toString()
        } catch(e){
            this.valor = 'ERROR 61'
        }
        this.atualizarVisor()
    }

    //para aparecer os numeros
    atualizarVisor(){
        document.getElementById('visor').value = this.valor
    }
}
let calculadora = new Calculadora()


