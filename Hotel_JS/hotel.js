   let nomeHotel = prompt('Qual nome do Hotel? ');
    alert('O nome do hotel é ' + nomeHotel);
    let user = prompt('Qual seu nome? ');

    pass();

    function pass() {
        let senha = 2678;
        if (senha == parseInt(prompt('Digite a senha:'))) {
            inicio();
        } else {
            alert('Senha incorreta!')
            pass();
        }
    }

    function inicio() {
        let sitema = alert('Bem vindo ao Hotel ' + nomeHotel + ", " + user + '. É um imenso prazer ter você por aqui!')

        let escolha = parseInt(prompt('Selecione uma opção: \n - 1 Reserva de Quartos \n - 2 Cadastro de Hóspedes \n - 3 Cadastro \n - 4 Eventos  \n - 5 Buffet \n - 6 Auditório \n - 7 Restaurante \n - 8 Abastecimento \n - 9 Serviço \n - 10 Sair'))

        switch (escolha) {
            case 1:
                quartos();
                break;
            case 2:
                cadastro();
                break;
            case 3:
                pesquisas();
                break;
            case 4:
                eventos();
                break
            case 5:
                Buffet();
                break
            case 6:
                auditorio();
                break
            case 7:
                restaurante();
                break
            case 8:
                combustivel();
                break
            case 9:
                executa();
                break
            case 10:
                sair();
                break

        }

    }

    //1) Quantos quartos são?
    function quartos() {

        let diaria = parseFloat(prompt('Qual o valor padrão da diária? '));
        while (diaria < 0) {
            alert('Valor Inválido ' + user);
            diaria = parseFloat(prompt('Qual o valor padrão da diária? '));
        }
        let data = parseInt(prompt('Quantas diárias serão necessárias?'));
        while (data > 30 || data < 0) {
            alert('Valor Inválido ' + user);
            data = parseInt(prompt('Digite a quantidade de dias que você deseja se hospedar'));
        }
        alert('O valor de ' + data + ' dias de hospedagem é de R$' + diaria * data);
        let hospede = prompt('Informe o nome do hóspede: ');

        let confirmar = prompt(user + ' você confirma a hospedagem para ' + hospede + ' por ' + data + ' dias? S/N')
        if (confirmar === "S") {
            alert(user + ', reserva efetuada para ' + hospede + '. O valor total é de R$' + diaria * data)
            inicio();
        }
        if (confirmar === "N") {
            alert(user + ', reserva não efetuada')
            inicio();
        }
    }


    //2) Como soletra?
    function cadastro() {
        let diaria = parseFloat(prompt("Qual o valor padrão da diária?"));
        let hospedes = [];
        let gratuidade = 0;
        let meia = 0;
        var soma = 0;

        while (true) {

            let cadastro = (prompt('Qual nome do Hospéde?'));
            if (cadastro === "PARE") {
                alert(user + ', o valor total das hospedagens é: R$' + (diaria + soma) + '; \n gratuidade(s) : ' + gratuidade + '\n meia(s): ' + meia);
                break;
            }
            var idade = parseInt(prompt("Qual a idade do Hóspede?"));
            if (idade <= 6) {
                gratuidade++;
                alert(cadastro + ' cadastrada(o) com sucesso. E possui gratuidade')
            }
            else if (idade >= 60) {
                soma += diaria / 2
                meia++;
                alert(cadastro + ' cadastrada(o) com sucesso. E paga meia')
            }
            hospedes = hospedes + 1
            //falta corrigir quando mostrar o valor total



        }
    }

    //3) Com "S" ou com "Z"?


    function pesquisas() {

        let escolha = parseInt(prompt('Selecione uma opção \n - 1 cadastrar \n - 2 pesquisar; \n - 3 listar \n - 4 sair. '));

        switch (escolha) {
            case 1:
                cadastrar()
                break;
            case 2:
                pesquisa()
                break;
            case 3:
                lista()
                break;
            case 4:
                inicio()
                break;
        }
    }

    let hospedes = [];
    var maxHosped = 15;

    function cadastrar() {
        var cadastroHospedes = prompt(`Qual o nome do Hóspede?`);
        if (hospedes >= maxHosped) {
            alert('Máximo de cadastros atingido');

        } else {
            alert(cadastroHospedes + ' foi cadastrada(o) com sucesso!');
        } //colocar a volta pro inicio (pesquisas)
        hospedes.push(cadastroHospedes)
        pesquisas();
    }
    function pesquisa() {
        let hop2 = prompt('Qual o nome do Hóspede?')

        if (hospedes.includes(hop2)) {
            alert(`Hóspede ${hop2} foi encontrada(o)!`)
        } else {
            alert(`Hóspede ${hop2} não foi encontrada(o)!`)
        }
        pesquisas();
    }

    function lista() {
        alert('Hóspedes cadastrados: ' + hospedes);

        pesquisas();

    }


    var custo = 10.50;

    function eventos() {
        let horas = parseInt(prompt('Qual a duração do evento em horas?'));

        let garçom = parseInt(prompt('Quantos garçons serão necessários?'));

        let soma = (horas * custo) * garçom

        alert('Custo total: R$' + soma)

        var escolha = prompt('Gostaria de efetuar a reserva? S/N')
        if (escolha == "S") {
            alert(user + ',reserva efetuada com sucesso.')
            inicio();
        } else {
            inicio();
        }


    }


    function Buffet() {

        let cafe = 0.20;
        let agua = 0.50;
        let salgados = 7;
        let cafeP = 0.80;
        let aguaP = 0.40;
        let salgadosP = 1.55;

        let convidados = parseInt(prompt('Qual o número de convidados para o evento?'))

        if (convidados > 350) {

            alert("Quantidade de convidados superior à capacidade máxima.")

        } else {
            let cafeL = cafe * convidados;
            let aguaL = agua * convidados;
            let salgadosTOTAL = salgados * convidados;
            let Subtotal = (cafeP * convidados) + (aguaP * convidados) + (salgadosP * convidados);

            alert(`O evento precisará de ${cafeL} litros de café, ${aguaL} litros de água, ${salgadosTOTAL} salgados. O custo total do evento será de R$ ${Subtotal}`);
        }

        let escolha = prompt('Gostaria de efetuar a reserva? S/N')
        if (escolha == "S") {
            alert(user + ', reserva efetuada com sucesso.')
            inicio();
        } else {
            inicio();
        }


    }



    function auditorio() {
        let auditorio = parseInt(prompt('Qual o número de convidados para o seu evento?'));

        if (auditorio > 350 || auditorio < 0) {
            alert('Quantidade de convidados superior à capacidade máxima')
            inicio();
        }
        if (auditorio <= 150) {
            alert('Use o auditório Laranja')

            let escolha = prompt("Gostaria de efetuar a reserva? S/N")

            if (escolha === "S") {
                alert(user + ', reserva efetuada com sucesso.')
                inicio();
            }
            else if (escolha === "N") {
                alert(user + ', reserva não efetuada.')
                inicio();
            }
        }
        else if (auditorio <= 220) {
            alert(`Use o auditório Laranja (inclua mais ${220 - auditorio} cadeiras)`)

            let escolha = prompt("Gostaria de efetuar a reserva? S/N")

            if (escolha === "S") {
                alert(user + ', reserva efetuada com sucesso.')
                inicio();
            }
            else if (escolha === "N") {
                alert(user + ', reserva não efetuada.')
                inicio();
            }

        } else if (auditorio > 250) {
            alert('Use o auditório Colorado')


            let escolha = prompt("Gostaria de efetuar a reserva? S/N")

            if (escolha === "S") {
                alert(user + ', reserva efetuada com sucesso.')
                inicio();
            } else if (escolha === "N") {
                alert(user + ', reserva não efetuada.')
                inicio();
            }
        }
    }


    function restaurante() {

        var reserva = prompt("Qual o dia do seu evento?");
        if (reserva === "segunda") {
            horas();
        }
        if (reserva === "terça") {
            horas();
        }
        if (reserva === "quarta") {
            horas();
        }
        if (reserva === "quinta") {
            horas();
        }
        if (reserva === "sexta") {
            horas();
        }
        if (reserva === "sabado") {
            horas_fim();
        }
        if (reserva === "domingo") {
            horas_fim();
        }
        else if (reserva === "") {
            alert('Inválido.')
            restaurante();
        }

        function horas() {
            let hora = parseInt(prompt('Qual a hora do seu evento?'))
            if (hora < 7 || hora > 23) {
                alert('Restaurante indisponível')
                restaurante();
            } else {
                let empresa_nome = prompt('Qual o nome da empresa?')

                alert('Restaurante reservado para ' + empresa_nome + '. ' + reserva + ' às ' + hora + 'hs.')


            }
        }
        function horas_fim() {
            let hora = parseInt(prompt('Qual a hora do seu evento?'))
            if (hora < 7 || hora > 15) {
                alert('Restaurante indisponível')
                restaurante();
            } else {
                let empresa_nome = prompt('Qual o nome da empresa?')

                alert('Restaurante reservado para ' + empresa_nome + '. ' + reserva + ' às ' + hora + 'hs.')

                inicio();
            }
        }

    }

    function combustivel() {

        let posto1_alcool = parseFloat(prompt('Qual o valor do álcool no posto Wayne Oil?'));
        let posto1_gasolina = parseFloat(prompt('Qual o valor da gasolina no posto Wayne Oil?'));

        let posto2_alcool = parseFloat(prompt('Qual o valor do álcool no posto Stark Petrol?'));
        let posto2_gasolina = parseFloat(prompt('Qual o valor da gasolina no posto Stark Petrol?'));


        let result_gasolina1 = posto1_gasolina * 42 * (1 - 0.3);
        let result_gasolina2 = posto2_gasolina * 42 * (1 - 0.3);

        let result_alcool1 = posto1_alcool * 42;
        let result_alcool2 = posto2_alcool * 42;

        if (result_gasolina1 < result_gasolina2 && result_gasolina1 < result_alcool1 && result_alcool2) {
            alert('é mais barato abastecer com gasolina no posto Wayne Oil')
            inicio();
        }
        if (result_gasolina2 < result_gasolina1 && result_gasolina1 < result_alcool1 && result_alcool2) {
            alert('é mais barato abastecer com gasolina no posto Stark Petrol?')
            inicio();
        }
        if (result_alcool1 < result_gasolina1 && result_alcool1 < result_gasolina2 && result_alcool1 < result_alcool2) {
            alert('é mais barato abastecer com álcool no posto Wayne Oil')
            inicio();
        }
        if (result_alcool2 < result_gasolina1 && result_alcool2 < result_gasolina2 && result_alcool2 < result_alcool1) {
            alert('é mais barato abastecer com álcool no posto Wayne Oil')
            inicio();
        }

    }

    var Empresas = [];
    var MenorOrcamento = null;

    function servico() {
        let empresa = prompt('Qual o nome da empresa?');

        let valor_aparelho = parseFloat(prompt('Qual o valor por aparelho?'));

        let quantidade = parseInt(prompt('Qual a quantidade de aparelhos?'));

        let desconto = parseFloat(prompt('Qual a porcentagem de desconto?'));

        let minimo = parseInt(prompt('Qual o número mínimo de aparelhos para conseguir o desconto?'));

        let valor_final = valor_aparelho * quantidade;
        if (quantidade >= minimo) {
            let valor_desconto = (desconto / 100) * valor_final;
            valor_final -= valor_desconto;
        }

        let armazem_empresa = {
            nome: empresa,
            valor: valor_final
        };
        Empresas.push(armazem_empresa);

        if (MenorOrcamento === null || valor_final < MenorOrcamento.valor) {
            MenorOrcamento = armazem_empresa;
        }

        alert(`O serviço de ${empresa} custará R$ ${valor_final}`);
    }

    function executa() {
        while (true) {
            servico();

            let escolha = prompt('Deseja informar novos dados? (S/N)');
            if (escolha.toUpperCase() !== 'S') {
                break;
            }
        }

        alert(`O orçamento de menor valor é o de ${MenorOrcamento.nome} por R$ ${MenorOrcamento.valor}`);
    }

    function sair() {
        var confirma = confirm('Você deseja sair?');
        if (confirma) {
            window.close();
        } else {
            inicio();
        }
    }

    inicio();