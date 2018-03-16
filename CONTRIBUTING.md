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