let carros = {
    marca:'Toyota',
    modelo:'Corolla',
    ano:'2018',   
    acelerar:function() {
        console.log("Vrum Vrum Vrum");
    }
};

console.log(carros.modelo);
carros.acelerar()
//------------------------------------------------------------------------------------------

let carro = [
    {nome:'Fiat', modelo:'Uno'},
    {nome:'Fiat', modelo:'Palio'},
    {nome:'Toyota', modelo:'Corolla'},
    {nome:'GM', moedelo:'Onix'}
];

console.log(carro[2].modelo);