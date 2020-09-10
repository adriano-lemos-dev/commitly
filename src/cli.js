import minimist from 'minimist';
import { help } from './help';
import { version } from './version';
import { feat } from './feat';
import fs from 'fs';
import { exit } from 'process';
import chalk from 'chalk';

export async function cli(argsArray) {
  console.log(minimist(argsArray.slice(2)));

  if (!fs.existsSync('.git')) {
    console.error(
      `${chalk.redBright(
        '[commitly]'
      )} – Este não é um projeto git! Verifique se o diretório de trabalho está correto. 🧐`
    );
    exit(1);
  }

  const args = minimist(argsArray.slice(2));
  let cmd = args._[0] || 'help';

  if (args.version || args.v) {
    cmd = 'version';
  }

  if (args.help || args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'version':
      version(args);
      break;

    case 'help':
      help(args);
      break;

    case 'feat':
      if (!args.m) {
        console.log(
          '[commitly] – Opção "-m <string>" é obrigatória com o comando "feat".'
        );
        break;
      }
      feat(args.m);
      break;

    default:
      console.error(`"${cmd}" não é um comando válido!`);
      break;
  }
}
