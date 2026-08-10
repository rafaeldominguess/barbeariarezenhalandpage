# Barbearia ReZenha

Landing page institucional desenvolvida para uma barbearia premium, com foco em conversão, presença visual forte e experiência mobile-first. O projeto foi construído com Next.js e estrutura em componentes para facilitar manutenção, evolução e deploy na Vercel.

## Visão Geral

A aplicação apresenta a barbearia de forma objetiva e estratégica, com seções de impacto para:

- destacar a marca e a proposta de valor;
- apresentar serviços e preços;
- exibir profissionais e diferenciais;
- reforçar prova social com depoimentos;
- facilitar contato via WhatsApp, e-mail e mapa.

O objetivo é combinar estética, clareza de comunicação e navegação simples para gerar confiança e conversão.

## Stack Utilizada

- Next.js 16
- React 19
- Tailwind CSS 4
- Lucide React para ícones
- ESLint para qualidade de código
- Next Image para otimização de imagens

## Principais Recursos

- Layout responsivo para desktop e mobile
- Navegação por âncoras entre seções da landing page
- Hero section com chamada clara para agendamento
- Blocos de conteúdo modularizados por componente
- Cards visuais com destaque para serviços e profissionais
- Integração com WhatsApp e mapa incorporado
- Imagens estáticas otimizadas via pasta `public`
- Estrutura pronta para deploy na Vercel

## Arquitetura do Projeto

A aplicação segue uma abordagem simples e escalável baseada em componentes:

- `src/app/page.jsx` concentra a composição da home
- `src/app/layout.jsx` define a estrutura global da aplicação
- `src/app/globals.css` centraliza estilos globais e tokens visuais
- `src/app/components/*` organiza cada seção em seu próprio componente

Essa separação reduz acoplamento, melhora a leitura do código e facilita ajustes futuros sem quebrar a página inteira.

## Práticas Aplicadas

- Componentização por responsabilidade única
- Uso de imagens locais para melhor performance e previsibilidade
- Sem dependência de estado desnecessário nas seções estáticas
- Semântica de HTML com títulos, seções e links claros
- Classes utilitárias do Tailwind para consistência visual
- Estrutura preparada para manutenção por time
- Organização voltada para escala de conteúdo e iteratividade

## Estrutura de Pastas

```text
barbearia/
├── public/
│   ├── fotos e imagens da marca
├── src/
│   └── app/
│       ├── components/
│       │   ├── About/
│       │   ├── Container/
│       │   ├── Contato/
│       │   ├── Depoimentos/
│       │   ├── Header/
│       │   ├── Hero/
│       │   ├── Professionals/
│       │   └── Servicos/
│       ├── globals.css
│       ├── layout.jsx
│       └── page.jsx
├── next.config.mjs
├── package.json
└── README.md
```

## Como Rodar Localmente

### Pré-requisitos

- Node.js instalado
- npm instalado

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

### Build de Produção

```bash
npm run build
```

### Executar em Produção Local

```bash
npm start
```

## Deploy na Vercel

O projeto foi desenhado para deploy direto na Vercel.

### Passo a passo recomendado

1. Suba o código para um repositório GitHub.
2. Acesse a Vercel e clique em New Project.
3. Importe o repositório.
4. Mantenha as configurações padrão para Next.js.
5. Faça o deploy.

### Configuração esperada

- Framework preset: Next.js
- Build command: `next build`
- Output: automático pela Vercel
- Environment variables: não utilizadas neste projeto no estado atual

## Observações Técnicas

- As imagens devem permanecer na pasta `public` para funcionar corretamente no deploy.
- O componente de contato usa ícones do `lucide-react`, que já está na dependência do projeto.
- A seção de contato está referenciada por `#contato`, permitindo navegação interna consistente.
- O projeto não depende de backend para funcionar no estado atual.

## Próximos Passos Sugeridos

- publicar o repositório no GitHub;
- conectar o projeto na Vercel;
- configurar domínio personalizado, se desejado;
- integrar formulário real de contato ou agendamento;
- adicionar metadados SEO mais completos para ranqueamento local.

## Licença

Projeto institucional criado para fins de portfólio e apresentação comercial.
