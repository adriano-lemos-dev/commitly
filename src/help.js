import chalk from 'chalk';

const menus = {
  main: `
    ${chalk.greenBright('cmtly [comando] <opções>')}

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
