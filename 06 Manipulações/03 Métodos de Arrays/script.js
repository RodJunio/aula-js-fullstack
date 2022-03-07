let lista = [
    {id: 1, nome:'Junio', sobrenome:'Rodrigues'},
    {id: 2, nome:'Fulano', sobrenome:'da Silva'},
    {id: 3, nome:'Helena', sobrenome:'Silveira'},
];


let pessoa = lista.findIndex(function(item){
    return (item.id == 3) ? true : false;
});

let res = pessoa;

console.log(res);