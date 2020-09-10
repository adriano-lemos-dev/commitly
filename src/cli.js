import minimist from 'minimist';
import { help } from './help';
import { version } from './version';
import { commit } from './commit';
import fs from 'fs';
import { exit } from 'process';
import util from 'util';
import { exec } from 'child_process';
import chalk from 'chalk';

const execp = util.promisify(exec);

function checksForGitRepo() {
  if (!fs.existsSync('.git')) {
    console.error(
      `${chalk.redBright(
        '[commitly]'
      )} – Este não é um projeto git! Verifique se o diretório de trabalho está correto. 🧐`
    );
    exit(1);
  }
}

async function checksForGitInstallation() {
  const { stdout } = await execp('whereis git');
  if (stdout === '') {
    console.error(
      `${chalk.redBright(
        '[commitly]'
      )} – É necessário ter o git instalado na máquina. ⚠️`
    );
    exit(1);
  }
}

export async function cli(argsArray) {
  await checksForGitInstallation();
  checksForGitRepo();

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

    case 'feat' || 'docs' || 'fix':
      if (!args.m) {
        console.log(
          '[commitly] – Opção "-m <string>" é obrigatória com o comando "feat".'
        );
        break;
      }
      commit(cmd, args.m, args.d);
      break;

    default:
      console.error(`"${cmd}" não é um comando válido!`);
      break;
  }
}
