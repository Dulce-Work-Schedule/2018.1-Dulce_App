# Política de uso de repositório  

### Política de Branches  

#### <i>master</i>

<p align="justify">&emsp;&emsp;A branch <i>master</i> é a branch de produção, onde ficará a versão estável do projeto. Ela estará bloqueada para commits e para pushs.
Veja a política de merges no tópico <a href="https://github.com/fga-gpp-mds/AGR-APP-react-native/blob/5_guia_de_contribuicao/CONTRIBUTING.md#merges-para-master">merges para <i>master</i></a>. </p>

#### <i>development</i>

<p align="justify">&emsp;&emsp;A branch <i>development</i> é a branch de desenvolvimento, onde o trabalho das outras branchs será unificado e onde será criada uma versão estável para mesclar com a <i>master</i>.
Assim como a <i>master</i> ela está bloqueada para commits e pushs.
Veja a política de merges no tópico <a href="https://github.com/fga-gpp-mds/AGR-APP-react-native/blob/5_guia_de_contribuicao/CONTRIBUTING.md#merges-para-development">merges para <i>development</i></a> .</p>

#### Nome das Branches  

##### X_descricao_da_issue

<p align="justify">&emsp;&emsp;As branchs de desenvolvimento de features serão criadas a partir da branch <i>development</i> com a nomenclatura padrão “X_descricao_da_issue”.</p>

<p align="justify">&emsp;&emsp;Em casos de issues de features de produção, o nome da  branch deve ser “X_nome_da_issue”.</p>

<p align="justify">&emsp;&emsp;X representa o código de rastreio da issue.
Para criar a branch, vá para a <i>development</i>:</p>

```
git checkout development
```

<p align="justify">&emsp;&emsp;Depois é só criar a branch e está pronto para produzir!</p>

```
git checkout -b X_nome_da_issue
```

### Política de Commits

Todos os commits devem ser feitos usando o comando `-s` para indicar sua assinatura no commit.

```
git commit -s
```

A issue em questão deve ser citada no commit, para isso, basta adicionar `#`+numero_da_issue ao commit.

```
git commit -sm"#5 Fazendo guia de contribuição"
```

<img src="https://github.com/fga-gpp-mds/AGR-APP-react-native/blob/5_guia_de_contribuicao/docs/img/commit-individual.png" alt="Commit individual">

<p align="justify">&emsp;&emsp;Para commits em dupla deve ser usado o comando `-s` igualmente, e deve ser adicionado a assinatura da sua dupla.</p>

```
git commit -s
```
Comentário do commit:
```
#5 Fazendo guia de contribuição

Signed-off-by: João Henrique Egewarth <egewarth@gmail.com>
Signed-off-by: Eliseu Egewarth <eliseuegewarth@gmail.com>
```

<img src="https://github.com/fga-gpp-mds/AGR-APP-react-native/blob/5_guia_de_contribuicao/docs/img/commit-dupla.png" alt="Commit pareamento">


### Política de Merges e Pull Requests

#### Pull Requests

<p align="justify">&emsp;&emsp;Os pull requests externos devem ser feitos apenas para a branch development seguindo as regras e os passos do tópico Merges para development. No conteúdo do pull request deve haver uma descrição clara do que foi feito.</p>

<p align="justify">&emsp;&emsp;Para a equipe interna, os pull requests seram realizados em duas situações, para <i>development</i> e para <i>master</i> seguindo as regras e passos de merge para ambas branchs.</p>

Para ambos os casos deve ser seguido o [template Pull Request](https://github.com/fga-gpp-mds/AGR-APP-react-native/blob/2_template_issue_pull_request/docs/PULL_REQUEST_TEMPLATE.md).

##### Labels

| Label name | Description
| --- | --- |
| `em-progresso` | Pull requests que ainda estão em andamento, mais modificações estão por vir. |
| `para-revisao` | Pull requests que precisam de revisão de código. |
| `em-revisao` | Pull requests em revisão de código. |
| `mudanca-requerida` | Pull requests que precisam de modificações e devem ser revisadas de novo. |
| `teste-requerido` | Pull requests que precisam ser testados. |


#### Merges para development
Os merges para development deverão ser feitos quando a funcionalidade ou refatoração estiverem de acordo com os seguintes aspectos:  
- Funcionalidade ou refatoração concluída;
- *Build* do Travis passando;
- Testes feitos;
- Funcionalidade revisada por algum outro membro.

Para fazer um merge para <i>development</i> os passos a serem seguidos são:  
- Atualizar a *branch development* local usando o comando `git pull --rebase origin <i>development</i>`;
- Mudar para branch que deseja mesclar para <i>development</i> `git checkout X_nome_da_branch`;
- Na branch a ser mesclada usar o comando `git rebase --preserve-merges development`;
- A branch será mesclada com a <i>development</i> local;
- Subir a branch para o repositório do git `git push origin X_nome_da_branch`;
- Abrir *merge request* ou *pull request* para <i>development</i>;
- O *merge request* ou *pull request* deve ser revisado por algum membro da equipe ou o P.O..

#### Merges para <i>master</i>
<p align="justify">&emsp;&emsp;Os merges para <i>master</i> deveram ser feitos apenas após o término da sprint, quando todas as funcionalidades estiverem entregues. O merge deve ser feito a partir da <i>development</i> e apenas quando atingir os seguintes critérios:</p>

- Build Travis passando;
- Sprint dada como concluída.  
