import { exec } from 'child_process';
import util from 'util';

const execp = util.promisify(exec);

export async function feat(mensagem) {
  const { error, stdout } = await execp(`git commit -a -m "feat: ${mensagem}"`);
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
}
