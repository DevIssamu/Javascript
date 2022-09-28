/*array ou vetor é uma variável que tem varios elementos ,
cada elemento tem uma valor e uma chave de identificação
que sempre começa com 0*/

let num = [5,8,4]
num[3]= 9
num.push(7) // adiciona sozinho na sequencia
num.length // mostra o tamanho do vetor
num.sort() // ordena o vetor em ordem crescente

console.log(num)

for(let c=0; c<num.length; c++){
    console.log(`A posição ${c+1} do vetor é: ${num[c]}`)
}

//forma simplificada para o for ecma script novo 
for(let c in num){
    console.log(num[c])
}

let pos = num.indexOf(12)
console.log(pos)

