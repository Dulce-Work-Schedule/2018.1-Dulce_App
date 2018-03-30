# Metodologia

### Metodologia adotada no projeto
<p align="justify">&emsp;&emsp;Foi adotado como base o <i>framework scrum</i> onde empregamos diversos processos e técnicas adaptando às necessidades da equipe. </p>
<p align="justify">&emsp;&emsp;O papel do Scrum no projeto é fazer transparecer a eficácia relativa das práticas de desenvolvimento para que a equipe possa melhorá-las, enquanto provê um framework adaptado para o desenvolvimento do produto. Também emprega uma abordagem iterativa e incremental para otimizar a previsibilidade e controlar riscos.</p>


### Papeis
|Papel|Membro|
|-|-|
| Scrum Master | Isaque Alves |
| Product Owner | João Egewarth |
| Software Architect | Gabriela Alves |
| DevOps | Eliseu Egewarth |
| Developers | Beatriz Hanae, Gabriela Guedes, Vitor Leal, Felipe Campos, Ezequiel Oliveira, Guilherme Deusdara |

#### Scrum Master

- Responsável por garantir que o Time Scrum esteja aderindo aos valores do Scrum, às práticas e às regras;
- Ajuda o Time Scrum e a organização a adotarem o Scrum;
- Educa o Time Scrum treinando-o e levando-o a ser mais produtivo e a desenvolver produtos de maior qualidade;
- Ajuda o Time Scrum a entender e usar autogerenciamento e interdisciplinaridade;
- Resolver impedimentos;
- Fazer a gestão de riscos e custos;
- Documentar as sprints;
- Preparar as reuniões e conduzir-las para que não passe do tempo determinado.
- Não gerencia o Time Scrum; o Time Scrum é auto-organizável.

#### Product Owner

- Responsável pelo gerenciamento do Backlog do Produto e por garantir o valor do trabalho realizado pelo Time.
- Manter o Backlog do Produto e garante que ele está visível para todos.
- Informar a todos quais itens têm a maior prioridade, de forma que todos sabem em que se irá trabalhar.
- Definir e priorizar os itens do Backlog do Produto.
- Somente o PO tem a permissão de dizer ao Time para
trabalhar em um outro conjunto de prioridades.
- As decisões do Product Owner devem ser visíveis no conteúdo e na priorização do Backlog do Produto.

#### DevOps
- Garantir que todas as alterações de código e configurações sejam feitas usando mecanismos automatizados, rastreáveis ​​e repetíveis.
- Automatizar a Infraestrutura.
- Automatizar e garantir a integração continua
- Autmatizar e garantir o deploy continuo
- Facilitar o processo de desenvolvimento
- Organizar os pipeline do produto.

#### Arquiteta
- Definir padrões de projeto a usar
- Certificar que os membros estão seguindo a arquitetura definida.
- Determinar qual a arquitetura deverá ser utilizada.

#### Time de Desenvolvimento
- Transformam o Backlog do Produto em incrementos
de funcionalidades potencialmente entregáveis em cada Sprint.
- Os conhecimentos que os membros do Time devem compartilhar é a habilidade de pegar um
requisito e transformá-lo em um produto utilizável;
- Todos contribuem, mesmo que isso exija aprender novas habilidades ou lembrar-se de antigas;
- Não há títulos em Times, e não há exceções a essa regra;
- Times também são auto-organizáveis.
- Ninguém - nem mesmo o ScrumMaster - diz ao time como transformar o Backlog do Produto em incrementos de
funcionalidades entregáveis.
- Cada membro do Time aplica seu conhecimento  a todos os problemas.

### Ritos Adotados

#### Planejamento da sprint
Duração máxima: 2:00

 A reunião de planejamento da sprint é realizado aos sábados com a participação de todos os integrantes do time. A reunião de planejamento segue os seguintes passos:

1 - O Product Owner apresenta ao Time o que é mais prioritário no Backlog do Produto;  
2 - O time decide o que vai ser implementado do Backlog do Produto. (Somente o Time pode avaliar o que ele é capaz de realizar na próxima Sprint);  
3 - O Product Owner deve explicá-la e tirar as dúvidas da equipe sobre os itens selecionados do Backlog do produto, para que todos possam ter uma melhor base para a pontuação;  
4 - O time etima o esforço para concluir cada atividade utilizando o planning pocker;  
5 - Apresentar o pareamento da semana;
6 - Determinar como será realizado a atividade;  

**Entradas**
- Backlog do produto;  
- Ultimo Incremento do produto;
- Desempenho na ultima sprint.

**Saída**
- Backlog da Sprint.

#### Sprint
Início: domingo  
Fim: sábado  
Duração: 7 dias  

Periodo de produção do time.

#### Revisão da Sprint
Duração: 45 min

Missão: Inspecionar o incremento e adaptar o Backlog.

1 - O Product Owner esclareçe quais itens do Backlog do Produto foram concluidas e quais não;  
2 - O time discute o que foi bem e o que não foi, o que deu certo e o que não deu;  
3 - O Product Owner discute o Backlog do Produto atual e se o time conseguirá atingir a meta das entregas;  
4 - O grupo colabora com as soluções;  
5 - É feita uma análise do mercado para definir o que é mais importante para fazer a seguir.

#### Retrospectiva
Duração: 45 min  


1 - Revisar, dentro do modelo de trabalho e das práticas do processo do Scrum, o processo de desenvolvimento, de forma a torná-lo mais eficaz e gratificante para a próxima
Sprint;  
2 - Inspecionar como correu a última Sprint em se tratando de pessoas, das relações entre elas, dos processos e das ferramentas.
3 - Priorizar os principais itens que correram bem e aqueles que, se feitos de modo diferente, poderiam ter deixado as coisas ainda melhores;
1 - Auto avaliação dos membros;  

### Indicadores
**Gráfico de Burndown**  
Mede o processo da sprint e indica o processo de trabalho da equipe.

**Commits individuais**  
Apresenta o rendimento individual de cada integrante do time na sprint.

**Burndown de risco**  
Apresenta como o time está lidando com os riscos durante o projeto.

**Velocity**  
Apresenta a quantidade de story points entregue por sprint.

**Quadro de conhecimento**  
Apresenta o crescimento individual e da equipe sobre o conhecimento das tecnologias.

**Frequência de commits**  
Indica se o time está seguindo as técnicas de trabalho constante.

### Definição de Pronto
**História**  
Uma história é definida como pronta quando a funcionalidade está feita, testada, e validada pelo PO e a cobertura do código superior ou igual a 90%.

**Feature**  
Uma feature é considerada pronta quando todas as histórias derivadas estão prontas e testadas com cobertura de no mínimo 90%.

**Sprint**  
Uma sprint está pronta quando as histórias foram concluídas e mescladas na master, caso contrário a sprint falhou e o que não foi feito deve ser alocado para a próxima Sprint.

**Artefato**  
Um artefato é considerado pronto quando for finalizado e feito o pull request com as validações presentes no guia de contribuição.
### Ferramentas

<img src="/docs/img/logos/codeclimate.png" width="100" height="100"> <img src="/docs/img/logos/telegram.png" width="100" height="100"><img src="/docs/img/logos/travis.gif" width="110" height="100"> <img src="/docs/img/logos/slack.gif" width="115" height="100"><img src="/docs/img/logos/GitHub.gif" width="110" height="100"> <img src="/docs/img/logos/drive.gif" width="110" height="100">
<img src="/docs/img/logos/atom.png" width="100" height="100"> <img src="/docs/img/logos/docker.gif" width="100" height="100"> <img src="/docs/img/logos/protoio.png" width="100" height="100">


### Comunicação

##### Telegram
Comunicação com os colaboradores externos ao projeto.

##### Slack
No Slack é realizada a comunicação necessária e a integração com outras ferramentas utilizadas como o GitHub, ZenHub, Code Climate e Travis. Outro fator importante para a decisão do uso do Slack foi a possibilidade de configurar um bot para as Daily Meetings(GeekBot) que nem sempre podem ser pessoais.

##### GitHub
O GitHub é essencial na transparência interna da equipe e externa junto ao cliente, a orientadora do projeto (Carla Rocha) e a comunidade em geral. Foi feito um uso extensivo das issues para comunicação entre os membros da equipe, para dúvidas sobre a issue e para mostrar o andamento do projeto.


### Pontuação das histórias e tarefas
A pontuação foi baseada no esforço necessário para concluir as tarefas. O esforço foi contabilizado como horas trabalhadas para a realização de uma determinada tarefa.

|Pontuação|Duração|Risco|Máximo|
|-|-|-|-|
| 0 | 30 minutos | 30 minutos | 1 hora |
| 1 | 1 hora | 1 hora | 2 horas |
| 2 | 3 horas | 1 hora | 4 horas |
| 3 | 4 horas | 2 horas | 6 horas |
| 5 | 8 horas | 2 horas | 10 horas |
| 8 | 12 horas | 4 horas | 16 horas |
| 13 | 20 horas | 6 horas | 26 horas |
| 21 | 30 horas | 10 horas | 40 horas |

** \*Tarefas com pontuação de 13 ou 21 devem ser quebradas em uma ou mais tarefas**

### Referências Bibliográficas

SCHWABER. Ken. **The Scrum Guide**, maio de 2009.
