function adicionar() {
    var produto = document.getElementById("produto").value;
    var preco = document.getElementById("preco").value;
    document.getElementById("tabela").innerHTML = document.getElementById("tabela").value + "\n" + produto + "          R$ " + preco;
}

function loadImage() {
    var input = document.getElementById("fileImage").files;

    if (input && input[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#imagem').attr('src', e.target.result);
        }

        reader.readAsDataURL(input[0]); // convert to base64 string
    }
}

function dataAtualFormatada() {
    var data = new Date(),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}

function download() {
    var input = document.getElementById("fileImage").files;

    if (input && input[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById("folderPromocoes").style.backgroundImage = "url('" + e.target.result + "')";
        }

        reader.readAsDataURL(input[0]); // convert to base64 string

    }

    document.getElementById("folderPromocoes").innerHTML = "<br>OFERTAS " + dataAtualFormatada() + "<br><br>" + document.getElementById("tabela").value.replaceAll("\n", "<br>");

}