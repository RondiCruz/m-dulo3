# Manipulação de Arrays do JS

## for/of
For EACH
```
const lista = ['🐸','💕','😎','🐱‍🐉'];

for(let umitem of lista){
    console.log(umitem);
}
```

## Map
Estrutura de dados tipo CHAVE VALOR.
```javascript
const mapa = new Map();

mapa.set('sapo','🐸');
mapa.set('coruja','🦉');
mapa.set('jacare','🐊');

console.log(mapa);
console.log(mapa.get('sapo'));
```
## SET
Gera uma lista de valores únicos.
```
const listavaloresunicos = new Set();
listavaloresunicos.add('🐸');
listavaloresunicos.add('🐊');
listavaloresunicos.add('🐶');
listavaloresunicos.add('🐸');
console.log(listavaloresunicos);
```

## Parâmetros padrão (defaul Parameters)
Definir valores padrão para parãmetros de entrada
```javascript
function soma(x = 1, y = 2){
    return x + y;
}
console.log(soma()); //x = 1, y = 2
console.log(soma(3));//x = 3, y = 2
console.log(soma(3,5));//x = 3, y = 5

let soma2 = (x=1 , y=2) => x + y
console.log(soma2());
```

## Rest Parameters
Define uma coleção não limitada de valores por parâmetro.
```javascript
function minhafuncao(...valores){
    console.log(valores); 
}
minhafuncao();
minhafuncao(1);
minhafuncao(1,2);
```

## Descontruir uma lista
Retirar cada elemento da lista e atribuir a variáveis diferentes
```javascript
const lista =['🐶','🐊','🐸','🐧'];
let a, b, c, d;
[a,b,c,d] = lista;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

## Espalhar valores ( SPREAD OPERATOR)
Distribui os valores da lista para cada parâmetro de entrada
```javascript
function minhafunc(a,b,c,d){ 
console.log(a);
console.log(b);
console.log(c);
console.log(d);
}
minhafunc(...lista); //SPREAD Operator
```
