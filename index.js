const axios = require('axios');
const readline = require('readline-sync');

//30655874000148
//27865757000102
//05323998000189

const info = readline.question("Digite o CNPJ a ser consultado: ");

const search = async (cnpj) => {

    try {
        const res = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
        var { data } = res;
        data.atividade_principal = data.atividade_principal[0].text;
        console.log(data.nome);
        console.log(data.atividade_principal);
    } catch (error) {
        console.log("\nErro na busca...");
        console.log(`\n\n${error}\n\n`);
    }
    
}

search(info);