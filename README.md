# COMMITLY

Um CLI simples para auxiliar na escrita de mensagens de _commit_ seguindo as convenções do projeto Angular.

## Uso

Como é uma CLI escrita em JavaScript (Node), há a opção de instalar globalmente:

```shell
npm i -g commitly

cmtly --help
```

Ou executar sem instalar usando o `npx`:

```shell
npx -p commitly cmtly --help
```

### Comandos e Opções

Seguindo a [convenção de mensagens de _commit_ do time do Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit). Desta forma, esse utilitário possui comandos para registrar mensagens usando os prefixos mais conhecidos dessa convenção.

Veja a própria ajuda do `commitly`:

```
    cmtly [comando] <opções>

    Sem parâmetro algum o modo interativo é acionado!

    Comandos:

    feat .......... Auxilia na criação de uma mensagem de commit para um nova funcionalidade
    docs .......... Auxilia na criação de uma mensagem de commit de uma documentação
    fix ........... Auxilia na criação de uma mensagem de commit para uma correção
    version ....... Exibe a versão atual do commitly
    help .......... Exibe essa mensagem de ajuda

    Opções:

    -h --help ......... Equivalente ao comando "help"
    -v --version ...... Equivalente ao comando "version"
    -m ................ Precede a mensagem principal do commit cercada por aspas duplas ("")
    -d ................ Precede a mensagem de detalhamento do commit cercada por aspas duplas ("")
```
