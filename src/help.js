import chalk from 'chalk';

const menus = {
  main: `
    ${chalk.greenBright('cmtly [comando] <opções>')}

    ${chalk.underline(chalk.yellow('Comandos:'))}

    ${chalk.blueBright(
      'feat'
    )} .......... Auxilia na criação de uma mensagem de commit para um nova funcionalidade
    ${chalk.blueBright(
      'docs'
    )} .......... Auxilia na criação de uma mensagem de commit de uma documentação
    ${chalk.blueBright(
      'fix'
    )} ........... Auxilia na criação de uma mensagem de commit para uma correção
    ${chalk.blueBright('version')} ....... Exibe a versão atual do commitly
    ${chalk.blueBright('help')} .......... Exibe essa mensagem de ajuda

    ${chalk.underline(chalk.yellow('Opções:'))}

    ${chalk.blueBright('-h --help')} ......... Equivalente ao comando "help"
    ${chalk.blueBright('-v --version')} ...... Equivalente ao comando "version"
    ${chalk.blueBright(
      '-m'
    )} ................ Precede a mensagem principal do commit cercada por aspas duplas ("")
    ${chalk.blueBright(
      '-d'
    )} ................ Precede a mensagem de detalhamento do commit cercada por aspas duplas ("")
    
  `,
  feat: `
    ${chalk.blueBright(
      'feat'
    )} .......... Auxilia na criação de uma mensagem de commit para um nova funcionalidade
  `,
  docs: `
    ${chalk.blueBright(
      'docs'
    )} .......... Auxilia na criação de uma mensagem de commit de uma documentação
  `,
  fix: `
    ${chalk.blueBright(
      'fix'
    )} ........... Auxilia na criação de uma mensagem de commit para uma correção
  `,
};

export async function help(args) {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0];
  console.log(menus[subCmd] || menus.main);
}
