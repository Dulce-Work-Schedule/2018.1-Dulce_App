## Sumário


## 1. Introdução

<p align = "justify">&emsp;&emsp;O objetivo do presente documento é fornecer uma visão inicial do projeto ARG-APP. São listadas as informações priorizadas pelos gestores e <i>stakeholders</i>. </p>

## 2. Descrição

<p align = "justify">&emsp;&emsp;O AGR-APP é um sistema que visa gerenciar demandas por meio da análise e monitoramento de indicadores da saúde pública regional (DF) </p>

## 3. Propósito e Justificativa

<p align = "justify"> A atual situação da saúde pública do DF revela deficiências relacionadas a gerência de insumos. Medicamentos e recursos em falta, equipamentos carentes de manutenção, quantidade insuficeiente de leitos são apenas alguns problemas que causam incômodo à população brasiliense. </p>

<p align = "justify"> Os dados revelam essas ocorrências. Com base nas informações fornecidas é possível mapear as demandas de insumos de cada unidade pública de serviços de saúde e observar quais possíveis ações reativas devem ser aplicadas </p>

<p align = "justify">  A solução de <i>software</i> AGR-APP viabiliza o monitoramento das demandas e deficiencias de cada unidade pública de atendimento voltada para o sistema de saúde e por meio da análise dos dados coletados é pode-se avaliar ações preventivas e reativas que podem ser aplicadas.</p>

## 4. Objetivos

<p align = "justify"> O objetivo geral do projeto é fornecer um <i>software</i> que possibilite obtenção de dados relacionados a sáude pública do DF em tempo real, com uma interface de uso intuitivo</p>

<p align = "justify">Possibilita a população ter em mãos os dados relacionados a situação em tempo real dos recursos públicos de saúde, bem como gestores utilizarem esses dados para promover melhoria contínua na área </p>


## 5. Requisitos de Alto Nível

<p align = "justify">&emsp;&emsp; O AGR-APP será uma plataforma <i>mobile</i>. Entre os requisitos de alto nível elencados temos:</p>

* O sistema deve ser de fácil manuseio;

* As principais funcionalidades devem ser simples e realizadas de forma a economizar o máximo de tempo possível;

* O <i>design</i> deve ser simples e minimalista;

* Deve haver uma confidencialidade dos dados presentes no sistema, tendo as informações dos pacientes resguardadas.


## 6. Riscos

<p align = "justify">&emsp;&emsp;Os principais riscos do projeto são detalhados a seguir.</p>

| **Risco** |  **Plano de Ação** |
|:--------------:|:-------------------:|
|Adaptação da equipe  com as tecnologias| Realização de treinamentos sobre tecnologias.|
|Falta de equipamentos |Pareamento com disponibilidade de horário e Isolamento do ambiente do projeto com Docker.|
|Divergência de horários entre os membros do time| Os membros do time se reunirão presencialmente às terças-feiras, quintas-feiras e aos sábados, também será utilizada a ferramente slack para comunicação e atualização do time.|
|Dificuldade em configurar o ambiente| Automatizar o ambiente com a ferramenta Docker.|
|Dificuldades na interação do time| Realizar feedbacks constantes para minimizar a falta de comunicação e fazendo o acompanhamento constante dos membros.|
|Mudança no escopo | Planejar corretamente cada sprint e manter contato frequente com o cliente para ajustar o escopo.|


## 7. Entregas do produto

<p align = "justify">&emsp;&emsp;O Projeto tem como base duas entregas principais que são chamadas <i>Release</i>, as datas das <i>Releases</i> foram definidas pela professora para ajustar ao tempo e cronograma das disciplinas de Engenharia do Produto de <i>Software</i> (EPS) e Metodologias de Desenvolvimento de <i>Software</i> (MDS). As possíveis datas para as entregas são:</p>

<p align = "justify"> <b> <i>Release 1</i>  (10/04/2018) </b> -  .</p>
<p align = "justify"> <b> <i>Release 2</i>  (DD/MM/AAAA) </b> -  .</p>


## 8. Estimativa de custo

### Recusos Humanos

<p align = "justify">&emsp;&emsp;Segundo dados apresentados pelo ultimo relatório de gestão da Universidade de Brasília (ano de 2016) o custo anual de um estudante de Engenharia de software é de R$ 26.040,00. A quantidade média anual de créditos de um aluno é 48 e cada crédito representa 15 horas, totalizando 720 horas por aluno por ano. A partir desses dados podemos dizer que o custo por hora do aluno é de R$ 36,00. A quantidade de horas trabalhadas pelos estudantes é de aproximadamente 10 horas por semana. Considerando a duração do projeto de 18 semanas temos o calculo:
preço/aluno = ((26040,00/(48x15)x10)x18) = R$ 6.510,00 por aluno.</p>
Opreço total para os 10 integrantes é de R$ 65.100,00


### Estrutura

<p align = "justify">&emsp;&emsp;Para a analise de custos de estrurura, foi considerado o valor da taxa de condôminio do condôminio Village no Gama, onde são realizadas nossas reuniões semanais.</p>

<p align = "justify">&emsp;&emsp;A taxa de condôminio é de aproximadamente R$ 400,00 por mês, logo multiplicando esse valor por 4 meses temos: R$ 1.600,00.</p>

### Materiais
<p align = "justify">&emsp;&emsp;Os custos de materiais contam com consumo de internet para 10 pessoas por 4 meses, 10 Notebooks, energia para 10 computadores. .</p>

#### Notebooks
10 x Notebook Samsung Expert X22s Intel Core i5 8GB 1TB Tela Led HD 14

Valor do notebook = R$ 1.994,99
Valor final = R$ 19.949,90

#### Energia
Energia = (((consumo_pc)x(horas_trabalhadas/mes)x(quantidade_pessoas)/1000)x(valor_KWh))x(duração_projeto)

consumo_pc = 43wh
horas_trabalhadas = 60
valor_KWh = R$ 0,61
quantidade_pessoas = 10
duração_projeto = 4 meses

Valor final = ((43Wh)x(60h/m)x(10)/1000)x(R$0,61)x4 = R$ 62,95.

#### Internet
Internet = ((link_internet)x(quantidade_pessoas)x(duração_projeto))

link_internet = R$ 120,00
quantidade_pessoas = 10
duração_projeto = 4

Valor final = ((120)x(10)x(4)) = R$ 4800,00

#### Valor final
  | Recurso | Valor |
|:--------------:|:-------------------:|
|Recursos Humanos|R$ R$ 65.100,00|
|Estrutura|R$ 1.600,00|
|Internet|R$ 4.800,00|
|Energia|R$ 62,95|
|Notebooks| R$ R$ 19.949,90|
| **Total** |**R$ 91.512,95**|

Para acessar as informações e calculos de custo ajustado durante o projeto está disponível no (documento de custo).



## 9. Partes Interessadas
* Cliente
  * Cliente e idealizador da ideia do projeto.
* Usuários
  * Usuários

* Equipe
  * A equipe é composta graduandos em Engenharia de Software pela Universidade de Brasília, Campus Gama, discentes das disciplinas de Engenharia de Produto de Software, cursando em semestres próximos ao período de conclusão do curso, e Métodos de Desenvolvimento de Software que encontram-se em semestres iniciais.   

|     Membro     |        GitHub       |        E-mail       |
|:--------------:|:-------------------:|:-------------------:|
| Eliseu Egewarth | [eliseuegewarth](https://github.com/eliseuegewarth) | eliseuegewarth@gmail.com
| Gabriela Alves da Gama | [gag2502](https://github.com/gag2502)  |gabrielaalvesdagama@gmail.com  |
| Isaque Alves de Lima | [alvesisaque](https://github.com/alvesisaque)  |isaquealvesdl@gmail.com  |
| João Henrique Egewarth | [egewarth](https://github.com/egewarth)  |egewarth@gmail.com  |
| Beatriz Hanae Fujimoto | [BeatrizHanae](https://github.com/BeatrizHanae)  |beatriz.hanae@gmail.com  |
| Ezequiel De Oliveira Dos Reis  | [EzequielDeOliveira](https://github.com/EzequielDeOliveira)  |ezequiel1de1oliveira@gmail.com  |
| Felipe Campos | [fepas](https://github.com/fepas)  | fepascampos@gmail.com  |
| Gabriela Barrozo Guedes | [gabibguedes](https://github.com/gabibguedes)  |gabrielabguedes@gmail.com  |
| Guilherme Deusdará | [gdeusdara](https://github.com/gdeusdara)  |guibanci@gmail.com  |
| Vitor Leal dos Santos | [vitorl-s](https://github.com/vitorl-s)  |vitinho2201@gmail.com  |


* PO


|     Membro     |        E-mail       |
|:--------------:|:-------------------:|
| Iza |  iza@gmail.com |


* Orientadora

|     Membro     |        E-mail       |
|:--------------:|:-------------------:|
| Carla |  Carla@gmail.com |

## 10. Requisitos para a aprovação

Para o projeto ser aprovado pelo cliente deve atingir as seguintes metas:

- Implementação das funcionalidades definidas pelo escopo de modo estável;
- Produto guiado pelos requisitos acordados;
- Aprovação das ferramentas de análise de código.


## 11. Referências

<p align = "justify"> Referência</p>

Relatório de Gestão 2016, Universidade de Brasília, pag. 155:
<http://www.dpo.unb.br/index.php?option=com_phocadownload&view=file&id=558&Itemid=816>  
Acesso em: 20/03/2018, 22:03, Horário de Brasília.

Notebook pesquisado:
<https://www.submarino.com.br/produto/132568845/notebook-samsung-expert-x22s-intel-core-i5-8gb-1tb-tela-led-hd-14-windows-10-cinza?WT.srch=1&epar=bp_pl_00_go_pla_inf_geral_1p&gclid=Cj0KCQjwqM3VBRCwARIsAKcekb0CYvmxkiETCJSRZF3ya-62r-CshYwK9xefGaJ_FFDdo-ILrOHHT2oaAvtoEALw_wcB&opn=XMLGOOGLE&sellerId=00776574000660>  
Acesso em 23/03/2018, 00:21, Horário de Brasília.
