# Caju Front End Teste

Você pode clicar [aqui](https://admission-form-seven.vercel.app/#/dashboard) para acessar a página do projeto

O `Dashboard` mostra todas as admissões criadas, com as opções de Aprovar, Reprovar, e Excluir.
Além disso, é possível filtrar um cadastro através do CPF, exibindo uma lista de sugestões para que o usuário possa selecionar um registro

https://github.com/user-attachments/assets/f0e96e7b-281a-4c53-9dc7-f5170a9f084c

O `Formulario` exibe um formulário que será utilizado para preencher o dashboard com os dados com as seguintes validações:

- Nome completo deve possuir ao menos um espaço, no mínimo duas letras e a primeira letra não deve ser número.
- O e-mail deve ser válido.
- Ao realizar o cadastro com sucesso, o usuário é redirecionado para o `Dashboard`

https://github.com/user-attachments/assets/9d4bcd9d-b4a1-4117-8944-212c49a8578d

## Como rodar o projeto localmente

Clone o repositório e instale as dependências.

```bash
git clone git@github.com:raqueltsato/admission-form.git
cd admission-form
yarn
```

Rode o projeto.

```bash
yarn dev
```

Rode o server em outro terminal no mesmo diretório.

```bash
yarn init:db
```

Se tudo tiver dado certo as seguintes portas estarão disponiveis:

**Aplicação:** [http://localhost:3001/](http://localhost:3001/)

**Json Web Server:** [http://localhost:3000/](http://localhost:3000/)

Rode os testes.

```bash
yarn test:dev
```

## Storybook

- Adição dos componentes para o storybook

Rode o storybook.

```bash
yarn storybook
```

Se tudo tiver dado certo a seguinte porta estará disponível:
[http://localhost:6006/ ](http://localhost:6006/)

## Automação no GitHub Actions

- Incremento automático de versão: Sempre que um novo código é mesclado em main, a versão do aplicativo é incrementada automaticamente.
- Versionamento Semântico: As versões são determinadas com base nas labels aplicadas aos Pull Requests, seguindo as práticas de versionamento semântico (`major`, `minor`, `patch`).
- Test Coverage em PRs: Ao abrir um pull request, o GitHub Actions executa testes e relata a cobertura de testes.

  ## Desempenho

  PageSpeed Insights
  ![Screenshot 2024-08-25 at 21 09 25](https://github.com/user-attachments/assets/f4b2a305-f096-4718-a021-81a3013bbdf1)

## Tecnologias utilizadas

- `React com Vite`
- `TypeScript`
- `React Query`
- `React Hook Form` e `Zod`
- `Context API`
- `Styled-Components`
- `Jest`
- `React Testing Library`
- `Vercel` Frontend
- `Glitch` Backend

## Melhorias futuras

- Acessibilidade
- SEO
- Drag and Drop no Dashboard
- Desacoplar o Storybook do projeto
