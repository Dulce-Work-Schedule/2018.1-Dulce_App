# Documento de Arquitetura

### Sumário
<ul>
<li><a href="#Introdução">Introdução</a></li>
<li><a href="#Finalidade">Finalidade</a></li>
<li><a href="#Escopo">Escopo</a></li>
<li><a href="#Definições">Definições, Acrônimos e abreviações</a></li>
<li><a href="#Referências">Referências</a></li>
<li><a href="#Visão">Visão Geral</a></li>
<li><a href="#Representação">Representação da Arquitetura</a></li>
<li><a href="#Metas">Metas Restrições de Arquitetura</a></li>
<li><a href="#Implementação">Visão de implementação</a></li>
<li><a href="#Referencia">Referências</a></li>
</ul>

<div name = "Introdução" id = "Introdução"></div>

 <div name= "Finalidade" id= "Finalidade"></div>

## 1. Introdução

### 1.1 Finalidade
<div style ="text-align: justify">
  <p>
      O documento de arquitetura tem a função de específicar decisões arquiteturais relevantes na produção e implementação do projeto AGR, produzido em react native, descrevendo seus aspectos e funcionalidades do sistema de forma clara e objetiva.
  </p>
</div>


<div name= "Escopo" id= "Escopo"></div>

### 1.2 Escopo
<div style ="text-align: justify">
  <p>
      Este documento se aplica à produção do aplicativo AGR, implementado nas plataformas IOS e Android, representando a arquitetura utilizada.
  </p>
</div>

<div name= "Definições" id= "Definições"></div>

### 1.3 Definições, Acrônimos e abreviações
<div style ="text-align: justify">
  <p>
    Este são alguns dos termos e abreviações ultilizados no projeto:
  </p>
</div>

* MDS = "Métodos de Desenvolvimento de Software";
* EPS = "Engenharia de Produtos de Software";
* API = "Application Programming Interface" ou Interface de Programação de Aplicativos;

<div name= "Referências" id= "Referências"></div>

### 1.4 Referências

* <a href= "https:///github.com/fga-gpp-mds/AGR-APP-react-native/blob/master/docs/visao.md"> Documento de Visão;</a>

<div name= "Visão" id= "Visão"></div>

### 1.5 Visão Geral
<div style ="text-align: justify">
  <p>
    Este documento é estruturado da seguinte forma:
  </p>
</div>

* <b>Introdução:</b> Visualização da composição basica do documento de arquitetura;

* <b>Representação da Arquitetura:</b> Noções básicas da forma da arquitetura do projeto em relação a API e o banco de dados;

* <b>Metas e Restrições de Arquitetura:</b> Descrição dos objetivos do software de grande importancia e as restrições encontradas no desenvolvimento;

* <b>Visão de implementação:</b> Descreve de forma geral a implementação e como as classes devem se comportar por meio do diagrama de classes.


<div name= "Representação" id= "Representação"></div>

## 2. Representação da Arquitetura

<div style ="text-align: justify">
  <p>
    <img src ="img/diagrama.png">
    </p>
  <p>
    <img src ="img/reactdiagrama.png">
  </p>
</div>

<div name= "Metas" id= "Metas"></div>

## 3. Metas Restrições de Arquitetura

<div style ="text-align: justify">
  <p>
    Para o desenvolvimento deste projeto serão ultilizadas as seguintes tecnologias:
  </p>
</div>

* <a href ="https://facebook.github.io/react-native/"> React-native</a>: Utilizado para a construção do aplicativo em IOS e Android;

* <a href ="https://nodejs.org/en/">Node.js</a>: Plataforma de desenvolvimento da API;

* Base de dados fornecida pela <a href ="http://www.saude.df.gov.br/index.php">Secretaria de Saúde</a>;

* Manutenibilidade: O código deve ser facilmente modificado e corrigido;

<div name= "Implementação" id= "Implementação"></div>

## 4. Visão de Implementação
* #### Diagrama de Classes
<div style ="text-align: justify">
  <p>
    <img src="img/D_Classe.png">
  </p>
</div>


<div name= "Referencia" id= "referencia"></div>

## 5. Referências

<div style ="text-align: justify">
  <p>
    Secretaria de Estado de Saúde do Distrito Federal, http://www.saude.df.gov.br/index.php Acesso em: 23/03/2018, 11:36, Horário de Brasília.
  </p>
  <p>
    React-native, https://facebook.github.io/react-native/ Acesso em: 23/03/2018, 11:20, Horário de Brasília.
  </p>
  <p>
    Node.js, https://nodejs.org/en/ Acesso em: 23/03/2018, 11:56, Horário de Brasília.
  </p>
  <p>
    React Native Architecture: Explained! https://www.logicroom.co/react-native-architecture-explained/ Acesso em: 22/03/2018, 12:05, Horário de Brasília.
  </p>
</div>
