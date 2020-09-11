import prompts from 'prompts';
import { commit } from './commit';

const questions = [
  {
    type: 'select',
    name: 'type',
    message: 'Que tipo de commit você deseja realizar?',
    choices: [
      { title: 'feat', description: 'Nova funcionalidade', value: 'feat' },
      {
        title: 'fix',
        description: 'Correção de bug',
        value: 'fix',
      },
      {
        title: 'docs',
        description: 'Um alteração do tipo documentação',
        value: 'docs',
      },
      {
        title: 'build',
        description:
          'Mudanças que afetam o processo de construção do software ou dependências externas',
        value: 'build',
      },
      {
        title: 'ci',
        description:
          'Mudanças nas configurações ou scripts de integração contínua',
        value: 'ci',
      },
      {
        title: 'refactor',
        description:
          'Mudanças no código que nem corrigem bugs nem adicionam funcionalidade',
        value: 'refactor',
      },
      {
        title: 'perf',
        description: 'Melhorias de performance no software',
        value: 'perf',
      },
      {
        title: 'test',
        description: 'Inclusão de ou mudanças nos testes',
        value: 'test',
      },
    ],
    initial: 1,
  },
  {
    type: 'text',
    name: 'messageheader',
    message:
      'Escreva o cabeçalho da mensagem de commit. (importante: até 100 caracteres!)',
    validate: (text) =>
      text.length > 100 ? 'Não pode ter mais que 100 caracteres!' : true,
  },
  {
    type: 'text',
    name: 'messagebody',
    message:
      'Escreva agora os detalhes do commit. Esse é o texto do corpo do commit.',
    initial: null,
  },
];

export async function questioning() {
  const { type, messageheader, messagebody } = await prompts(questions);
  commit(type, messageheader, messagebody);
}
