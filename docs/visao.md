## Sumário
___

>#### [1. Introdução](#introducao)
>###### &emsp;&emsp;[1.1 Propósito](#proposito)
>###### &emsp;&emsp;[1.2 Escopo](#escopo-intro)
>###### &emsp;&emsp;[1.3 Definições](#definicoes-intro)
>###### &emsp;&emsp;[1.4 Visão Geral do Documento](#visao-geral-intro)

>#### [2. Posicionamento](#posicionamento)
>###### &emsp;&emsp;[2.1 Oportunidade de negócio](#oportunidade)
>###### &emsp;&emsp;[2.2 Instrução do Problema](#instru-problema)
>###### &emsp;&emsp;[2.3 Instrução de Posição do Produto](#instru-produto)

>#### [3. Visão Geral do Produto](#visao)
>###### &emsp;&emsp;[3.1 Escopo do produto](#escopo-produto)
>###### &emsp;&emsp;[3.2 Propósito do produto](#proposito-produto)
>###### &emsp;&emsp;[3.3 Recursos do Produto](#recurso-produto)


>#### [4. Descrições das Partes Envolvidas](#envolvidos)
>###### &emsp;&emsp;[4.1 Perfis das Partes Interessadas](#perfis-partes-interessadas)
>###### &emsp;&emsp;[4.2 Perfis do Usuário](#perfis-usuario)
>###### &emsp;&emsp;[4.3 Alternativas e Concorrência](#alternativas)


>### [5. Restrições](#restricoes)

___

<br>

<h3 name="introducao"> 1. Introdução

<h4 name="proposito"> &emsp;1.1) Propósito:
</h3>
</h4>
<p align = "justify">&emsp;&emsp;Este artefato apresenta as justificativas para o desenvolvimento da aplicação mobile AGR-APP, auxiliando na compreensão do contexto em que a aplicação está inserida, assim como os objetivos e metas que a equipe das disciplinas de Métodos de Desenvolvimento de Software e Engenharia do Produto de Software procuram alcançar com o desenvolvimento deste sistema. Além destas descrições do sistema, serão apresentados esquemas e diagramas que garantem a visibilidade do funcionamento e de certas características do sistema para a equipe, permitindo que os mesmos possam trabalhar de uma maneira produtiva e sincronizada. </p>      

<h4 name="escopo-intro"> &emsp;1.2) Escopo:

</h4>
  &emsp;&emsp;O escopo deste documento se limita a fornecer a todos os envolvidos uma descrição compreensível da problematização, do propósito do produto, suas funcionalidades que serão atendidas e as partes envolvidas no projeto AGR-APP. Quando necessário este documento pode ser atualizado durante todo o ciclo de desenvolvimento da solução.


  <h4 name="definicoes-intro"> &emsp;1.3) Definições:

  </h4>

&emsp;Algumas definições são utilizadas neste projeto, como: <br>

&emsp;&emsp;SES-DF - Secretaria de Estado de Saúde do Distrito Federal; <br>

&emsp;&emsp;MDS - disciplina de Métodos de Desenvolvimento de Software; <br>

&emsp;&emsp;EPS - disciplina de Engenharia de Produto de Software; <br>

&emsp;&emsp;Android - Sistema operacional móvel suportado pela Google; <br>

&emsp;&emsp;iOS - Sistema operacional móvel da Apple Inc.; <br>

&emsp;&emsp;SO - Sistema Operacional; <br>

   </p>


  <h4 name="visao-geral-intro"> &emsp;1.4) Visão Geral do Documento:
  </h3>
  </h4>
  <p align = "justify">&emsp;O conteúdo deste documento, está organizado de forma a fornecer uma visão dos envolvidos no projeto, das necessidades apontadas por estes envolvidos, dos benefícios esperados pelos envolvidos, e das funcionalidades e suas características para atender a estes benefícios. Também são apresentados aqui requisitos importantes para o produto, não sendo, porém, realizado o detalhamento de cada funcionalidade de sistema, visto que esta atividade será realizada na especificação dos casos de uso. </p>



<h3 name="posicionamento"> 2. Posicionamento
<h4 name="oportunidade"> &emsp;2.1) Oportunidade de negócio:
  </h3>
  </h4>
  <p align = "justify">&emsp;&emsp; Com a implantação do AGR-APP, as áreas de gestão de pessoal, estrutura e material, na Secretaria de Saúde do DF, tenderão a se tornar mais eficientes. Assim, o atendimento da ampla demanda de pacientes que necessitam dos procedimentos hospitalares será aprimorada.
</p>

  <h4 name="instru-problema"> &emsp;2.2) Instrução do Problema:</h4>
    </h3>
  <p align = "justify">&emsp;&emsp;A Secretaria de Saúde do DF enfrenta dificuldades no gerenciamento e manutenção do serviço público . Cirurgias atrasadas, tratamentos cancelados e pacientes em fila de espera são acontecimentos recorrentes em hospitais da rede pública do Distrito Federal. Faltam materiais, médicos, remédios e vagas em Unidades de Terapia Intensiva (UTI). </p>

  <p align = "justify">&emsp;&emsp;Com tudo isso, o problema a ser tratado por este projeto é o gerenciamento e o controle das informações de pessoal qualificado, materiais, estrutura e demanda.
  </p>


| Tipo    | Descrição|
| --      |    --    |
| Problema| A dificuldade na gestão de pessoal, estrutura e material.    |
| Afeta| Recusos financeiros, profissionais da área, população em geral|  
| Impacto| Má alocação de recursos no sistema de saúde   |  
| Solução|  Aplicativo AGR-APP para monitorar as informações do SES-DF e sugerir soluções para o gerenciamento e manutenção de recursos  |

<br>

#### Diagrama de Fishbone

![Fishbone](https://imgur.com/J9CH7UL.png)

<br>

  <h4 name="instru-produto"> &emsp;2.3) Instrução de Posição do Produto:
  </h3>
  </h4>
  <p align = "justify">&emsp;&emsp;O site da SES-DF permite que o cidadão tenha acesso a transparência de informações sobre disponibilidades de estoque de medicamentos, leitos, escala de médicos, lista da fila de espera para algum serviço da área da saúde, entre outros atendimentos acessíveis, porém, essa coleta de dados e análise, ainda é realizada de forma manual ou digital sem um sistema de software para auxílio. O AGR-APP é um aplicativo que oferecerá suporte à esses gestores da SES-DF, para estes terem o controle dos recursos hospitalares, por intermédio de um dispositivo móvel.</p>


<h3 name="visao"> 3. Visão Geral do Produto

  <h4 name="escopo-produto"> &emsp;3.1) Escopo do produto:

  </h3>
  <p align = "justify">&emsp;&emsp;A Secretaria de Saúde do DF é um serviço essencial em nossa sociedade que através do serviços dos profissionais dos quais lá trabalham(médicos, enfermeiros e demais profissionais) permitem uma maior qualidade de vida para todos. Entretanto, a saúde ainda apresenta problemas como falta de materiais, estrutura, alta demanda e falta de profissionais para suprí-la. O objetivo do AGR-APP é fornecer informações aos gestores  para auxiliá-los nas decisões de remanejamento e manutenção de profissionais, materiais e demandas</p><h2></h2>

  <h4 name="proposito-produto"> &emsp;3.2) Propósito do produto:
  </h4>
  </h3>
  <p align = "justify">&emsp;&emsp;O aplicativo AGR-APP tem como propósito oferecer um sistema que seja capaz de auxiliar no gerenciamento para os gestores da secretaria de saúde do Distrito Federal, referente à escala de profissionais, materiais, demanda e estrutura disponíveis nos hospitais do DF.</p>

  <h4 name="recursos-produto"> &emsp;3.3) Recursos do produto:
  </h3>
  </h4>
<p align = "justify">&emsp;&emsp;O principal recurso ou funcionalidade, do produto após a obtenção das informações, é analisar os dados obtidos e promover uma alternativa de melhora para os gestores.</p>

<h3 name="envolvidos"> 4. Descrição das Partes Envolvidas
</h3>

  <h4 name="perfis-partes-interessadas"> &emsp;4.1) Perfis das Partes Interessadas:
  </h4>
  * Cliente <br>
    * Cliente e idealizador da ideia do projeto. <br>
  * Usuários <br>
    * Usuários <br>

  * Equipe <br>
    * A equipe é composta por graduandos em Engenharia de Software pela Universidade de Brasília, Campus Gama, discentes das disciplinas de Engenharia de Produto de Software, cursando em semestres próximos ao período de conclusão do curso, e Métodos de Desenvolvimento de Software, que encontram-se em semestres iniciais. <br>

  #### Engenharia Do Produto de software


  |     Membro     |        GitHub       |        E-mail       |
  |:--------------:|:-------------------:|:-------------------:|
  | Eliseu Egewarth | [eliseuegewarth](https://github.com/eliseuegewarth) | eliseuegewarth@gmail.com
  | Gabriela Alves da Gama | [gag2502](https://github.com/gag2502)  |gabrielaalvesdagama@gmail.com  |
  | Isaque Alves de Lima | [alvesisaque](https://github.com/alvesisaque)  |isaquealvesdl@gmail.com  |
  | João Henrique Egewarth | [egewarth](https://github.com/egewarth)  |egewarth@gmail.com  |

  #### Metodos de Desenvolvimento de Software

  |     Membro     |        GitHub       |        E-mail       |
  |:--------------:|:-------------------:|:-------------------:|
  | Beatriz Hanae Fujimoto | [BeatrizHanae](https://github.com/BeatrizHanae)  |beatriz.hanae@gmail.com  |
  | Ezequiel De Oliveira Dos Reis  | [EzequielDeOliveira](https://github.com/EzequielDeOliveira)  |ezequiel1de1oliveira@gmail.com  |
  | Felipe Campos | [fepas](https://github.com/fepas)  | fepascampos@gmail.com  |
  | Gabriela Barrozo Guedes | [gabibguedes](https://github.com/gabibguedes)  |gabrielabguedes@gmail.com  |
  | Guilherme Deusdará | [gdeusdara](https://github.com/gdeusdara)  |guibanci@gmail.com  |
  | Vitor Leal dos Santos | [vitorl-s](https://github.com/vitorl-s)  |vitinho2201@gmail.com  |


<h4 name="perfis-usuario"> &emsp;4.2 Perfis do Usuário:
</h4>
<p align = "justify">&emsp;&emsp;Os Usuários serão os gestores da Secretaria de Saúde. A Secretaria de Saúde é o órgão do Poder Executivo do Distrito Federal responsável pela organização e elaboração de planos e políticas públicas voltados para a promoção, prevenção e assistência à saúde. É função da Secretaria de Saúde dispor de condições para a proteção e recuperação da saúde da população, reduzindo as enfermidades, controlando as doenças endêmicas e parasitárias e melhorando a vigilância à saúde, dando, assim, mais qualidade de vida aos moradores do Distrito Federal.

<h4 name="alternativas"> &emsp;4.3 Alternativas e Concorrência
</h4>
* TrakCare
  * O sistema eletrônico atual da Secretaria de Saúde do DF. O qual reúne todos os dados de consultas, alergias, exames e histórico médico da rede pública de saúde do Distrito Federal.
  <br>
  <br>
  <img src='https://pbs.twimg.com/media/CpWQyfaUMAIjufI.jpg' width=460 height=160>


  <br>

* ERP Radar Empresarial
  * É um software integrado para gestão de empresas. Ele busca cobrir todas as áreas gerenciáveis de empresa: vendas, finanças, materiais, produção, custos, serviços, controladoria, RH, GED, BI e qualidade, adaptável às necessidades e à realidade de empresas de todos os portes e segmentos.
  <br>
  <br>
  <img src='https://static.wixstatic.com/media/5b9da9_b4f89355f7ae481b86a982b5c32e1df6~mv2.png/v1/crop/x_0,y_109,w_740,h_724/fill/w_638,h_623,al_c,usm_0.66_1.00_0.01/5b9da9_b4f89355f7ae481b86a982b5c32e1df6~mv2.png' width=550 height=510>


  <br>

* ContaAzul
  * É um software feito para realização de toda a gestão de um negócio com um único sistema de controle financeiro, com uma visão de relatórios em tempo real, das contas a vencer à situação do fluxo de caixa; com controle de estoque de produtos, facilita a elaboração de relatórios gerenciais

  <br>

  &emsp;&emsp;&emsp;<img src='http://www.informant.com.br/arquivos/cases/foto_1320842073.jpg' width=530 height=340>
  <br>
  <br>

* Gestão Plus
  * Este software de gestão facilita a organização de informações fiscais e contábeis, além dos dados relativos aos clientes e às vendas, cadastro de produtos etc.



  &emsp;&emsp;&emsp;&emsp;&emsp;![Gestaoplus](http://4.bp.blogspot.com/-Ixw8as5lZ4Q/TeTvhln318I/AAAAAAAABZ8/0ToGxJGdf6c/s1600/Cabe%25C3%25A7alho_gestaoplus_blog_novo5.jpg)

<br>

<h3 name="restricoes"> 5. Restrições:
</h3>

 1. O sistema necessita de informações que serão fornecidas pela SES-DF; <br>
 2. O sistema deverá estar acessível até julho de 2018; <br>
 3. O sistema deverá funcionar tanto em Android como em iOS;
<br>
<h3 name="restricoes"> 6. Referências: </h3>
 &emsp;
[O Globo: Saúde  Pública do país sofre de ma gestão.](https://oglobo.globo.com/opiniao/saude-publica-do-pais-sofre-de-ma-gestao-12010246)

 &emsp;
[Secretaria de Estado de Saúde do Distrito Federal](  http://www.saude.df.gov.br/component/content/article/254-sobre-a-secretaria/772-transparencia-na-saude.html)

 &emsp;
[IBM Knowledge Center](https://www.ibm.com/support/knowledgecenter/pt-br/SSYMRC_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html)

&emsp; [Projeto Receituário Médico - Documento de visão](https://github.com/fga-gpp-mds/2017.2-Receituario-Medico)



<br></br>
