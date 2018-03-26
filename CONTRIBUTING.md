# Guia de Contribuição  

## Como contribuir?

Para contribuir com o projeto
contribuir com o projeto é muito fácil e cada pouquinho conta! Basta seguir os seguintes passos:

* *Fork* do repositório (apenas para usuários externos)
* Criar [*issues*](CONTRIBUTING.md#política-de-issues)
* Criar [*branchs*](CONTRIBUTING.md#política-de-branches)
* Seguir a política de [*commits*](CONTRIBUTING.md#política-de-commits)
* Submeter [*Pull Request*](CONTRIBUTING.md#política-de-merges-e-pull-requests)


### Política de Issues

As *issues* devem possuir título, descrição, no mínimo um assinante responsável, *labels*, e *milestone* e *estimated* para as *issues* pontuadas. Também deverá ser informada a *sprint* que ela deve ser concluída.

As Labels usadas no projeto estão descritas no tópico [Labels](https://github.com/fga-gpp-mds/AGR-APP-react-native/labels) no Github.

Para criação de issue o [template Issue](docs/ISSUE_TEMPLATE.md) deve ser seguido.

![Issue Example](/docs/img/issue_example.gif)
### Política de Branches  

#### *master*

A branch *master* é a branch de produção, onde ficará a versão estável do projeto. Ela estará bloqueada para commits e para pushs.
Veja a política de merges no tópico [Merges para *master*](CONTRIBUTING.md#merges-para-master).

#### *development*

A branch *development* é a branch de desenvolvimento, onde o trabalho das outras branchs será unificado e onde será criada uma versão estável para mesclar com a *master*.
Assim como a *master* ela está bloqueada para commits e pushs.
Veja a política de merges no tópico [Merges para development](CONTRIBUTING.md#merges-para-development)
merges para *development*</a> .

#### Nome das Branches  
As branchs de desenvolvimento de features serão criadas a partir da branch *development* com a nomenclatura padrão `x_nome_da_issue`, onde o `x` representa o código de rastreio da issue.

### Política de Commits
Os commits devem ser feitos usando o parâmetro `-s` para indicar sua assinatura no commit.

```
git commit -s
```
A issue em questão deve ser citada no commit, para isso, basta adicionar `#<numero_da_issue>`.

```
git commit -sm"#5 Fazendo guia de contribuição"
```

** \*\*Por padrão, o caracter `#` define uma linha de comentário no arquivo da mensagem do commit. Para resolver este problema, use o commando:**
```
git config --local core.commentChar '!'
```

Para commits em dupla deve ser usado o comando `-s` igualmente, e deve ser adicionado a assinatura da sua dupla.

```
git commit -s
```
Comentário do commit:
```
#5 Fazendo guia de contribuição

Signed-off-by: João Henrique Egewarth <egewarth@gmail.com>
Signed-off-by: Eliseu Egewarth <eliseuegewarth@gmail.com>
```

Para commits que encerram a resolução de uma issue, deve-se iniciar a mensagem do commit com `Fix #<numero_da_issue ao commit>`, para que a issue seja [encerrada automaticamente](https://help.github.com/articles/closing-issues-using-keywords/) quando mesclada na `master`.

Exemplo do comentário do commit:
```
git commit -sm"Fix #5 Finalizando guia de contribuição do projeto"
```

### Política de Merges e Pull Requests

#### Pull Requests

Os pull requests externos devem ser feitos apenas para a branch development seguindo as regras e os passos do tópico Merges para development. No conteúdo do pull request deve haver uma descrição clara do que foi feito.

Para a equipe interna, os pull requests seram realizados em duas situações, para *development* e para *master* seguindo as regras e passos de merge para ambas branchs.

Para ambos os casos deve ser seguido o [template Pull Request](docs/PULL_REQUEST_TEMPLATE.md).

##### Work in Progress

Caso haja a necessidade de atualizar a branch development antes de concluir a issue, o nome do pull request deve conter WIP:<X_nome_da_branch> para que a branch não seja deletada.

#### Merges para development
Os merges para development deverão ser feitos quando a funcionalidade ou refatoração estiverem de acordo com os seguintes aspectos:  
- Funcionalidade ou refatoração concluída;
- *Build* do Travis passando;
- Testes feitos;
- Funcionalidade revisada por algum outro membro.

Para fazer um merge para *development* os passos a serem seguidos são:  
- `git checkout branch_de_trabalho`;
- `git pull --rebase origin development`;
- `git push origin branch_de_trabalho`;
- Abrir pull request via interface GitHub;
- Aguardar Code Review

#### Merges para *master*
Os merges para *master* deveram ser feitos apenas após o término da sprint, quando todas as funcionalidades estiverem entregues. O merge deve ser feito a partir da *development* e apenas quando atingir os seguintes critérios:

- Build Travis passando;
- Sprint dada como concluída.  

##### Code Review
O code review deve ser feito por um ou mais membros da equipe que não participaram das modificações.
Após pelo menos uma aprovação de Code Review, Status Check (Travis, CodeClimate) o PullRequest poderá ser aceito;
