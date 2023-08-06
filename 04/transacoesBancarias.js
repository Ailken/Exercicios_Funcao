const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function(valor) {
        if(typeof valor !== "number" || valor <= 0 || !Number.isInteger(valor)) {
            console.log("|valor inválido para depósito.");
            return;
        }
        this.saldo += valor;
        this.historicos.push ({
            tipo: "Deposito",
            valor: valor,
        });

        console.log(`Depósito de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}.`);
    },

    sacar: function(valor) {
        if (typeof valor !== "number" || valor <= 0 || !Number.isInteger(valor)) {
            console.log("Valor inválido para saque.");
            return;
        }
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}.`);
            return;
        }

        this.saldo -= valor;
        this.historicos.push ({
            tipo:"Saque",
            valor: valor,
        });

        console.log(`Saque de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);
    },

    extrato: function() {
        let extrato = `Extrato de ${this.nome} - Saldo: R$ ${(this.saldo / 100).toFixed(2)}`;
        extrato += "\nHistórico";
        for(const operacao of this.historicos) {
            extrato += `\n${operacao.tipo} de R$ ${(operacao.valor / 100).toFixed(2)}`;
        }
        return extrato;
    }
};

// contaBancaria.depositar(10000);
// console.log(contaBancaria.saldo);
// console.log(contaBancaria.historicos);

// contaBancaria.sacar(5000);
// console.log(contaBancaria.saldo);
// console.log(contaBancaria.historicos);

// contaBancaria.sacar(8000);
// console.log(contaBancaria.saldo);
// console.log(contaBancaria.historicos);

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
console.log(contaBancaria.extrato());