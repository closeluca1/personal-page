


//function pegarEmail(){
//    NomeChar = document.getElementById("TakeName").value;
//    EmailChar = document.getElementById("TakeEmail").value; 
//}

//document.getElementById("pegar-conteudo").onclick = function(){
//    pegarEmail();
//    firebase.database().ref("CRM/" + NomeChar).set({
//        NomePessoa: NomeChar,
//        EmailPessoal: EmailChar,
//    });

//    document.getElementById("TakeName").value = "";
//    document.getElementById("TakeEmail").value = "";
//};


let Ivariation = "";





function pegarMensagemCompleto(){
    let data = new Date();
        let ano = data.getFullYear();
        let dia = data.getDate();
        let mes = data.getMonth();
        let hora = data.getHours();
        let minuto = data.getMinutes();
        let mseg = data.getMilliseconds();
        Ivariation = "dia: " + dia + "/" + "mês: " + mes + "/" + "ano: " + ano + "   " + hora + ":" + minuto + ":" + mseg;
        setTimeout('pegarMensagemCompleto()',500);

    charNome = document.getElementById("NameTake").value;
    charEmail = document.getElementById("EmailTake").value;
    charAssunto = document.getElementById("TakeAssunto").value;
    charMensagem = document.getElementById("TakeMensagem").value;
    variationTeste =  Ivariation;

        

    
}

document.getElementById("EnviarCompleto").onclick = function(){
    pegarMensagemCompleto();
    firebase.database().ref("EmailComMensagem/" + variationTeste).set({
        NomeP: charNome,
        EmailP: charEmail,
        AssuntoP: charAssunto,
        MensagemP: charMensagem,
    });
    document.getElementById("NameTake").value = "";
    document.getElementById("EmailTake").value = "";
    document.getElementById("TakeAssunto").value = "";
    document.getElementById("TakeMensagem").value = "";
};