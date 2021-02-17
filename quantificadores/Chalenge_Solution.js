const text = `CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-23 ...`;
const phone = `Lista telefônica:
    - (11) 98756-1212
    -98765-4321
    *(032)98802-9459
    (32)99416575Central de Atendimento	2102-5800 Arquivo de Processos	2102-5852
2102-5917
2102-5894
Caixa de Assistência dos Advogados

2125-6300

Central de Apoio ao PJE

2103-0107

Central de Cópias	2102-5936
Comissão de Seleção e Inscrição	2102-5800
Comissão de Admissibilidade e Instrução do Processo Ético Disciplinar	2102-5893
2102-5845
2102-5849
Comissão de Defesa,
Assistência e Prerrogativas	2102-5997
0800-2831651(Plantão 24 horas)
97121-5246(Whatsapp)
Comissão de Estágio / Credenciamento de Escritório	2102-5865
Comissão de Ensino Jurídico	2102-5904
Comissão de Sociedade de Advogados	2102-5971
2102-5980
Comissões	2102-5800
Compras	2102-5805
Contabilidade	2102-5836
Contas a Pagar (de Fornecedores)	2102-5840
Controladoria	2102-5859
Corregedoria-Geral do Processo Disciplinar	2102-5800
DAAC(Rua Paracatu, 472, Barro Preto)	3295-1190
DAAT(Avenida Augusto de Lima, 1224, Barro Preto)

3295-1902

DAATRI(Avenida Raja Gabaglia, 1686, Luxemburgo)

2551-5820

Defensoria Dativa Administrativa	2102-5804
Defensoria Dativa Jurídica	2102-5922
Departamento de Comunicação	2102-5853
2102-5906
Departamento de Eventos	2102-5835
Escola Superior de Advocacia	2102-8282
Exame de Ordem	2102-5800
Ouvidoria Geral	2102-5957
Órgão Especial	2102-5866
Primeira e Segunda Câmaras	2102-5862
Presidência (recepção)	2102-5930
Recursos Humanos	Telefone(s)
Férias	2102-5860
Folha	2102-5929
Benefícios	2102-5959
Segurança do Trabalho	2102-5897
Admissão	2102-5889
Sala OAB - Fórum(Avenida Augusto de Lima, 1549, Barro Preto)	3295-3892
Sala OAB TJMG(Avenida Afonso Pena, 4001, Serra)

3224-3296

Secretaria Geral	2102-5800
Tesouraria	2102-5800
Tesouraria - Anuidades	2102-5970
2102-5968
2102-5837
Tribunal de Ética e Disciplina	2102-5925
2102-5883
2102-5939
Administração	2102-5820
2102-5819
Almoxarifado

2102-5882`;
const email = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico32@gmail.com
    - davidwbraga@gmail.com
    - david.teodoro@fazenda.mg.gov.br
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa+sampaio@yahoo.com.br.ue.....`;
const site = `http://www.site.info www.escola.ninja.br google.com.ag`;

const regexCPF = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
const regexPhone = /(\(\d{2,3}\))?\s?(\d{4,5})\-?(\d{4})/g;
const regexEmail = /[\w.+]{4,50}@(\w+\.)(\w+)(\.\w+)*/g;

const regexSite = /(http:\/\/)?(www\.)?(\w)+\.(\w)+(\.\w+)?(\.\w+)?/g;

// console.log(text.match(regexCPF));
console.log(phone.replace(/[\t\n]/g, '').match(regexPhone));
// console.log(email.match(regexEmail));
// console.log(site.match(regexSite));
