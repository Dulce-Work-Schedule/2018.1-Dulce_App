## Sumário

<ul>
 <li><a href="#1">1. Introdução</li>
 <li><a href="#1.1">1.1 Propósito</li>
 <li><a href="#1.2">1.2 Escopo</li>
 <li><a href="#1.3">1.3 Visão Geral do Documento</li>
</ul>

<ul>
  <li><a href="#2">2. Posicionamento</li>
  <li><a href="#2.1">2.1 Oportunidade de negócio</li>
  <li><a href="#2.2">2.2 Instrução do Problema</li>
  <li><a href="#2.3">2.3 Instrução de Posição do Produto</li>
</ul>

<ul>
  <li><a href="#3">3. Visão Geral do Produto</li>
  <li><a href="#3.1">3.1 Escopo do Produto</li>
  <li><a href="#3.2">3.2 Propósito do produto</li>
  <li><a href="#3.3">3.3 Recursos do produto</li>
</ul>

<ul>
  <li><a href="#4">4. Visão Geral do Produto</li>
  <li><a href="#4.1">4.1 Perfis das Partes Interessadas</li>
  <li><a href="#4.2">4.2 Perfis do Usuário</li>
</ul>

<ul>
  <li><a href="#5">5. Restrições </li>
</ul>

<ul>
  <li><a href="#6">6. Referências </li>
</ul>




 <div name = "1" id = "1"></div>

# 1. Introdução

<div name = "1.1" id = "1.1"></div>

### 1.1) Propósito:

<p align = "justify">Este artefato apresenta as justificativas para o desenvolvimento da aplicação mobile  Dulce (<strong>D</strong>ispositivo <strong>U</strong>nificado de Co<strong>l</strong>aboração para <strong>C</strong>onstrução de <strong>E</strong>scala) auxiliando na compreensão do contexto em que a aplicação está inserida, assim como os objetivos e metas que a equipe das disciplinas de Métodos de Desenvolvimento de Software e Engenharia do Produto de Software procuram alcançar com o desenvolvimento deste sistema. Além destas descrições do sistema, serão apresentados esquemas e diagramas que garantem a visibilidade do funcionamento e de certas características do sistema para a equipe, permitindo que os mesmos possam trabalhar de uma maneira produtiva e sincronizada. </p>      

<div name = "1.2" id = "1.2"></div>

### 1.2) Escopo:


  <p align = "justify">O Documento de Visão tem o objetivo de informar aos envolvidos a problematização a ser resolvida e as funcionalidades do produto que serão atendidas pelo projeto Dulce. Tendo em vista que este documente será atualizado durante a produção do aplicativo.</p>

  <div name = "1.3" id = "1.3"></div>  


### 1.3) Visão Geral do Documento:


  <p align = "justify">O conteúdo deste documento, está organizado de forma a fornecer uma visão dos envolvidos no projeto, das necessidades apontadas por estes envolvidos, dos benefícios esperados pelos envolvidos, e das funcionalidades e suas características para atender a estes benefícios. Também são apresentados aqui requisitos importantes para o produto, não sendo, porém, realizado o detalhamento de cada funcionalidade de sistema, visto que esta atividade será realizada na especificação dos casos de uso. </p>


  <div name = "2" id = "2"></div>

# 2. Posicionamento

<div name = "2.1" id = "2.1"></div>

### 2.1) Oportunidade de negócio:


  <p align = "justify"> Com a implantação do Dulce, as áreas de gestão de pessoal, na Secretaria de Saúde do DF, tenderão a se tornar mais eficientes. Dulce será um aplicativo voltado para gestão e gerenciamento de escalas. com a implementação de Dulce a saúde pública tende a ter uma grande melhoria em sua gestão , principalmente na relação entre o gestor e os servidores de um determinado setor, ganhando agilidade para criar e remanejar escalas.  
</p>

<div name = "2.2" id = "2.2"></div>

### 2.2) Instrução do Problema:

  <p align = "justify">A Secretaria de Saúde do DF enfrenta dificuldades no gerenciamento do pessoal dos hospitais públicos.
  </p>

  <p align = "justify">As escalas dos setores dos hospitais são feitas manualmente no Exel colocadas mensalmente no Software TrakCare, onde os profissionais podem visualizar a própria escala e colocar as consultas/trabalhos realizados. Além do TrakCare, há também o sistema de ponto eletrônico, em que os servidores o utilizam a fim de marcar presença.
  </p>

  <p align = "justify">
  Esses dois sistemas são independentes, e muitas vezes as informações entre os dois não coicidem.
  </p>


| Tipo    | Descrição|
| --      |    --    |
| Problema| A dificuldade na gestão de pessoal e no gerenciamento das escalas    |
| Afeta| Recusos financeiros, profissionais da área, população em geral|  
| Impacto| alocação e remanejamento de profissionais no sistema de saúde requer muito trabalho manual  |  
| Solução|  Aplicativo Dulce para  aprimorar o gerenciamento das escalas dos profissionais do SES-DF  |

<br>

#### Diagrama de Fishbone

<br></br>

<div align="center">

<img src="img/fishbone.png">

</div>

<br></br>

<div name = "2.3" id = "2.3"></div>

### 2.3) Instrução de Posição do Produto:


  <p align = "justify"> Dulce é um aplicativo que oferecerá suporte aos gestores da SES-DF, para estes terem maior controle sobre as escalas e o remajamento de pessoal. Além disso, o servidor poderá consultar sua escala, pedir alteração ou remanejamento, e se for preciso, enviar para o gestor do seu devido setor um atestado nos casos de problemas de saúde, tudo isso por meio do dispositivo móvel.</p>

<div name = "3" id = "3"></div>

# 3. Visão Geral do Produto

<div name = "3.1" id = "3.1"></div>

### 3.1) Escopo do produto:


  <p align = "justify">A Secretaria de Saúde do DF é essencial em nossa sociedade, através dos serviços dos profissionais da área, há uma maior qualidade de vida para todos. Entretanto, a saúde ainda apresenta dificuldades de gerenciamento, o que pode afetar a qualidade do sistema. O objetivo do Dulce é fornecer informações aos gestores para auxiliá-los nas decisões de remanejamento e servir para auxiliar no contato entre gestão e servidores do seu devido setor.</p>

<div name = "3.2" id = "3.2"></div>

### 3.2) Propósito do produto:

  <p align = "justify">O aplicativo Dulce tem como propósito oferecer um sistema que seja capaz de auxiliar no gerenciamento para os gestores da secretaria de saúde do Distrito Federal, referente à escala de profissionais, remanejamentos nos hospitais do DF.</p>

<div name = "3.3" id = "3.3"></div>

### 3.3) Recursos do produto:

<p align = "justify">O principal recurso ou funcionalidade, do produto após a obtenção das informações, é analisar os dados obtidos e promover uma alternativa de melhora para os gestores.</p>

<div name = "4" id = "4"></div>

# 4. Descrição das Partes Envolvidas

<div name = "4.1" id = "4.1"></div>

### 4.1) Perfis das Partes Interessadas:


   * Cliente

    * Cliente e idealizador da ideia do projeto.


  * Usuários

    * Secretaria de Saúde do DF


  * Equipe
    * A equipe é composta por graduandos em Engenharia de Software pela Universidade de Brasília, Campus Gama, discentes das disciplinas de Engenharia de Produto de Software, cursando em semestres próximos ao período de conclusão do curso, e Métodos de Desenvolvimento de Software, que encontram-se em semestres iniciais.

    * <a href="https://github.com/fga-gpp-mds/agr-react-native/blob/master/docs/equipe.md">Documento de Equipe</a>


<div name = "4.2" id = "4.2"></div>

## 4.2 Perfis do Usuário:


<p align = "justify">Os Usuários serão os gestores da Secretaria de Saúde. A Secretaria de Saúde é o órgão do Poder Executivo do Distrito Federal responsável pela organização e elaboração de planos e políticas públicas voltados para a promoção, prevenção e assistência à saúde. É função da Secretaria de Saúde dispor de condições para a proteção e recuperação da saúde da população, reduzindo as enfermidades, controlando as doenças endêmicas e parasitárias e melhorando a vigilância à saúde, dando, assim, mais qualidade de vida aos moradores do Distrito Federal.</p>

<div name = "4.3" id = "4.3"></div>

## 4.3 Alternativas e Concorrência

* TrakCare

  * O sistema eletrônico atual da Secretaria de Saúde do DF. O qual reúne todos os dados de consultas, alergias, exames e histórico médico da rede pública de saúde do Distrito Federal.
  <br>
  <br>
  <img src='https://pbs.twimg.com/media/CpWQyfaUMAIjufI.jpg' width=300 height=100>

  <br>

* Mobi Saúde

  *  É um aplicativo que facilita a administração hospitalar e de unidades de saúde, controlando a escala de funcionários e agilizando a comunicação com o corpo clínico.
  <br>
  <br>
  <img src='img/mobi_saude.png'>

* ERP Radar Empresarial

  * É um software integrado para gestão de empresas. Ele busca cobrir todas as áreas gerenciáveis de empresa: vendas, finanças, materiais, produção, custos, serviços, controladoria, RH, GED, BI e qualidade, adaptável às necessidades e à realidade de empresas de todos os portes e segmentos.
  <br>
  <br>
  <img src='http://brasaosistemas.com.br/blog/wp-content/uploads/2017/01/Radar-IRPJ-LALUR-780x371.png' width=300 height=100>


  <br>

* ContaAzul

  * É um software feito para realização de toda a gestão de um negócio com um único sistema de controle financeiro, com uma visão de relatórios em tempo real, das contas a vencer à situação do fluxo de caixa; com controle de estoque de produtos, facilita a elaboração de relatórios gerenciais

  <br>

 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVAX33cpC1_94miUaHWB4XD8QQAAZGEbgnD_sNnDBQi6Xct0n'>
  <br>
  <br>

* Gestão Plus

  * Este software de gestão facilita a organização de informações fiscais e contábeis, além dos dados relativos aos clientes e às vendas, cadastro de produtos etc.

<img src= 'http://4.bp.blogspot.com/-Ixw8as5lZ4Q/TeTvhln318I/AAAAAAAABZ8/0ToGxJGdf6c/s1600/Cabe%25C3%25A7alho_gestaoplus_blog_novo5.jpg' />

<br>
</br>

<div name = "5" id = "5"></div>

<h2>5. Restrições:</h2>

  <ul>
    <li> O sistema necessita de informações que serão fornecidas pela    SES-DF;</li>
    <li>O sistema deverá estar acessível até julho de 2018;</li>
    <li> O sistema deverá funcionar tanto em Android como em iOS;</li>
  </ul>


<div name = "6" id = "6"></div>

<h2>6. Referências:</h2>

<div style ="text-align: justify">
  <p>
    Vision – Scaled Agile Framework, https://www.scaledagileframework.com/vision/ Acesso em: 19/03/2018, 21:10, Horário de Brasília.
  </p>

  <p>
    O Globo Saúde Pública do país sofre de má gestão, https://oglobo.globo.com/opiniao/saude-publica-do-pais-sofre-de-ma-gestao-12010246 Acesso em: 20/03/2018, 20:09, Horário de Brasília.
  </p>
  <p>
    Secretaria de Estado de Saúde do Distrito Federal, http://www.saude.df.gov.br/component/content/article/254-sobre-a-secretaria/772-transparencia-na-saude.html Acesso em: 20/03/2018, 20:16, Horário de Brasília.
  </p>

  <p>
    Projeto Receituário Médico - Documento de visão, https://github.com/fga-gpp-mds/2017.2-Receituario-Medico Acesso em: 20/03/2018, 20:54, Horário de Brasília.
  </p>

  <p>
    Radar Empresarial Segurança nos processos, https://www.wk.com.br/solucoes/erp Acesso em: 22/03/2018, 17:30, Horário de Brasília.
  </p>

  <p>
    Aplicativo de gestao Hospitalar, https://g1.globo.com/bemestar/noticia/aplicativo-de-gestao-hospitalar-monitora-equipe-medica-e-promete-reduzir-custos.ghtml Acesso em: 22/03/2018, 18:50, Horário de Brasília.
  </p>

  <p>
    TrakCare Sistema de informação em Saude, http://www.intersystems.com/br/produtos/trakcare/trakcare-overview-2/ Acesso em: 22/03/2018, 20:54, Horário de Brasília.
  </p>
</div>
