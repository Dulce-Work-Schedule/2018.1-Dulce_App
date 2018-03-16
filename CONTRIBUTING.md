# Política de uso de repositório  

### Política de Branches  

#### master
A branch master é a branch de produção, onde ficará a versão estável do projeto. Ela estará bloqueada para commits e para pushs.
Veja a política de merges no tópico POLITICA_DE_MERGES-MASTER.  

#### development
A branch development é a branch de desenvolvimento, onde o trabalho das outras branchs será unificado e onde será criada uma versão estável para mesclar com a master.
Assim como a master ela está bloqueada para commits e pushs.
Veja a política de merges no tópico POLITICA_DE_MERGES-DEVELOPMENT.  

#### Nome das Branches  

X_descricao_da_issue

As branchs de desenvolvimento de features serão criadas a partir da branch development com a nomenclatura padrão “X_descricao_da_issue”.

Em casos de issues de features de produção, o nome da  branch deve ser “X_nome_da_issue”.

X representa o código de rastreio da issue.

```
git checkout development
git checkout -b X_nome_da_issue
```

### Política de Commits

[[docs/img/commit-dupla.png|Commit individual]]

[[docs/img/commit-dupla.png|Commit dupla]]

### Política de Merges
#### Merges para development
Os merges para development deverão ser feitos quando a funcionalidade ou refatoração estiverem de acordo com os seguintes aspectos:  
· Funcionalidade ou refatoração concluída  
· Build do Travis passando  

Para fazer um merge para development os passos a serem seguidos são:  
· Atualizar a branch “development” local usando o comando “git pull --rebase origin development”  
· Mudar para branch que deseja mesclar para development  
· Na branch a ser mesclada usar o comando git rebase --preserve-merges development  
· A branch será mesclada com a development local  
· Abrir merge request ou pull request para development  


#### Merges para master
Os merges para master deveram ser feitos apenas após o término da sprint, quando todas as funcionalidades estiverem entregues. O merge deve ser feito a partir da development e apenas quando atingir os seguintes critérios:
· Build Travis passando  
· Sprint dada como concluída  
