import { exec } from 'child_process';

export async function feat(mensagem) {
  exec(`git commit -a -m "feat: ${mensagem}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
}
