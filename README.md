# Let me ask - Web

Projeto desenvolvido durante o evento **NLW Agents** da Rocketseat. Uma aplicação de perguntas e respostas em tempo real, construída com tecnologias modernas do ecossistema React.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server rápido
- **React Router DOM** - Roteamento para aplicações React
- **TanStack Query** - Gerenciamento de estado e cache para requisições
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes acessíveis e estilizados
- **Lucide React** - Biblioteca de ícones
- **Biome** - Linter e formatter (com Ultracite rules)

## 🏗️ Padrões de Projeto

- **Component Composition**: Uso do shadcn/ui para composição de componentes
- **Atomic Design**: Estrutura de componentes organizados em `/components/ui`
- **Custom Hooks**: Abstrações reutilizáveis para lógica de estado
- **Path Mapping**: Aliases configurados (`@/` aponta para `src/`)
- **Type Safety**: Uso completo do TypeScript para tipagem
- **Query State Management**: TanStack Query para gerenciamento de estado assíncrono

## 🛠️ Setup e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório
```bash
git clone git@github.com:emanueltavecia/letmeask-ai-web.git
cd letmeask-ai-web
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera o build de produção
- `npm run preview` - Visualiza o build de produção

### Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── ui/             # Componentes base (shadcn/ui)
├── lib/                # Utilitários e configurações
├── pages/              # Páginas da aplicação
│   ├── create-room/    # Página de criação de sala
│   └── room/           # Página da sala de perguntas
└── app.tsx             # Componente raiz da aplicação
```

### Configurações

- **Tailwind CSS**: Configurado com variáveis CSS e tema customizado
- **shadcn/ui**: Componentes configurados no estilo "new-york"
- **TypeScript**: Configuração otimizada para React e Vite
- **Biome**: Linting e formatting com regras Ultracite para acessibilidade
- **Path Aliases**: `@/` configurado para apontar para `src/`

## 📝 Notas de Desenvolvimento

O projeto utiliza as melhores práticas de desenvolvimento React moderno, incluindo:

- Componentes funcionais com hooks
- Tipagem estrita com TypeScript
- Gerenciamento de estado com TanStack Query
- Estilização utility-first com Tailwind CSS
- Componentes acessíveis com Radix UI
- Code quality garantida pelo Biome/Ultracite
