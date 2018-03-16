# Política de uso de repositório  

### Política de Branches  

#### master

<p align="justify">&emsp;&emsp;A branch master é a branch de produção, onde ficará a versão estável do projeto. Ela estará bloqueada para commits e para pushs.
Veja a política de merges no tópico POLITICA_DE_MERGES-MASTER.</p>

#### development

<p align="justify">&emsp;&emsp;A branch development é a branch de desenvolvimento, onde o trabalho das outras branchs será unificado e onde será criada uma versão estável para mesclar com a master.
Assim como a master ela está bloqueada para commits e pushs.
Veja a política de merges no tópico POLITICA_DE_MERGES-DEVELOPMENT.</p>

#### Nome das Branches  

##### X_descricao_da_issue

<p align="justify">&emsp;&emsp;As branchs de desenvolvimento de features serão criadas a partir da branch development com a nomenclatura padrão “X_descricao_da_issue”.</p>

<p align="justify">&emsp;&emsp;Em casos de issues de features de produção, o nome da  branch deve ser “X_nome_da_issue”.</p>

<p align="justify">&emsp;&emsp;X representa o código de rastreio da issue.
Para criar a branch, vá para a <u>development</u>:</p>

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

[[docs/img/commit-individual.png|Commit individual]]

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

[[docs/img/commit-dupla.png|Commit dupla]]

### Política de Merges e Pull Requests

#### Pull Requests

<p align="justify">&emsp;&emsp;Os pull requests externos devem ser feitos apenas para a branch development seguindo as regras e os passos do tópico Merges para development. No conteúdo do pull request deve haver uma descrição clara do que foi feito.</p>

[IMAGEM PULL REQUEST EXEMPLO]

<p align="justify">&emsp;&emsp;Para a equipe interna, os pull requests seram realizados em duas situações, para development e para "master" seguindo as regras e passos de merge para ambas branchs.</p>

##### Labels

| Label name | Description
| --- | --- |
| `work-in-progress` | Pull requests que ainda estão em andamento, mais modificações estão por vir. |
| `needs-review` | Pull requests que precisam de revisão de código. |
| `under-review` | Pull requests em revisão de código. |
| `requires-changes` | Pull requests que precisam de modificações e devem ser revisadas de novo. |
| `needs-testing` | Pull requests que precisam ser testados. |


#### Merges para development
Os merges para development deverão ser feitos quando a funcionalidade ou refatoração estiverem de acordo com os seguintes aspectos:  
- Funcionalidade ou refatoração concluída;
- *Build* do Travis passando;
- Testes feitos;
- Funcionalidade revisada por algum outro membro.

Para fazer um merge para development os passos a serem seguidos são:  
- Atualizar a branch development local usando o comando `git pull --rebase origin development`;
- Mudar para branch que deseja mesclar para development;
- Na branch a ser mesclada usar o comando `git rebase --preserve-merges development`;
- A branch será mesclada com a development local;
- Abrir `merge request` ou `pull request` para development.


#### Merges para master
<p align="justify">&emsp;&emsp;Os merges para master deveram ser feitos apenas após o término da sprint, quando todas as funcionalidades estiverem entregues. O merge deve ser feito a partir da development e apenas quando atingir os seguintes critérios:</p>

- Build Travis passando;
- Sprint dada como concluída.  
