

function notasAtletas(objAtletas){

    for (let i = 0; i < objAtletas.length; i++) {

        // Copia as notas para não alterar a matriz original
        let notas = objAtletas[i].notas.slice();

        // Coloca a matriz de notas em ordem crescente
        notas.sort(function(a, b) {
            return a - b;
        });

        // Remove a primeira e a última nota da matriz
        let notasValidas = notas.slice(1, 4);

        // Realiza a media
        let soma = notasValidas.reduce(function(total, atual){
            return total + atual
        }, 0);
        let media = soma/(notasValidas.length);

        // Exibe a saída para cada usuário
        console.log(`
            Atleta: ${objAtletas[i].nome}
            Notas Obtidas: ${objAtletas[i].notas}
            Média Válida: ${media}
            `);
    }
}

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

notasAtletas(atletas);