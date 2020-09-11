import { exec } from 'child_process';
import util from 'util';

const execp = util.promisify(exec);

export async function commit(tipo = 'feat', mensagem, detalhe) {
  try {
    const response = await execp(
      `git commit -a -m "${tipo}: ${mensagem}" -m " " -m "${
        detalhe ? detalhe : 'commitly'
      }"`
    );
  } catch (error) {
    console.error(`[commitly] : Commit falhou! 😞`);
    process.exit(1);
  }
}
