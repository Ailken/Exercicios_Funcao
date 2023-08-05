const carro = {
    ligado: false,
    velocidade: 0,

    imprimirStatus: function () {
        console.log("Carro " + (this.ligado ? "ligado" : "desligado") + " . Velocidade: " + this.velocidade + ".");
    },

    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            //console.log("Carro ligado. Velocidade: " + this.velocidade + ".");
            this.imprimirStatus();
        }
    },
    
    desligar: function () {
        if (!this.ligado) {
            console.log("Este carro já está desligado.");
        } else if (this.velocidade === 0){
            this.ligado = false;
            //this.velocidade = 0;
            //console.log("Carro desligado. Velocidade: " + this.velocidade + ".");
            this.imprimirStatus();        
        } else {
            console.log("O carro não pode ser desligado com velocidade diferente de zero.");
        }
    },

    acelerar: function () {
        if(!this.ligado) {
            //console.log("Não é possível acelerar um carro desligado.");
            this.ligar();
        } //else {
        this.velocidade += 10;
            //console.log("Carro ligado. Velocidade: " + this.velocidade + ".");
        this.imprimirStatus();
        //}
    },

    desacelerar: function () {
        if(!this.ligado) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            this.velocidade -= 10;
            if (this.velocidade === 0) {
            //console.log("Carro ligado. Velocidade: " + this.velocidade + ".");
                this.desligar();
            } else {
                this.imprimirStatus();
            }
        }
    },
};

//testando os metodos
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();