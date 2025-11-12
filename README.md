# PoTION

Aplicativo mobile desenvolvido com Ionic React, TypeScript e Tailwind CSS.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (normalmente vem com o Node.js)
- Git (opcional, para clonar o repositório)

Para desenvolvimento mobile:

- Android Studio (para Android)
- JDK 17+ (para build Android)

## Como Rodar o Projeto

### 1. Clone o repositório (se aplicável)

```bash
git clone <url-do-repositorio>
cd my-ionic-app
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure sua URL da API:

```env
VITE_SERVER_API=https://sua-api-url.com
```

### 4. Execute o projeto em modo de desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

## Build para Produção

### Build Web

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Build Android (APK)

1. Build do projeto web:

```bash
npm run build
```

2. Sincronizar com Android:

```bash
npx cap sync android
```

3. Abrir no Android Studio:

```bash
npx cap open android
```

4. No Android Studio, vá em: **Build → Build Bundle(s) / APK(s) → Build APK(s)**

Ou via linha de comando:

```bash
cd android
./gradlew assembleDebug
```

O APK será gerado em: `android/app/build/outputs/apk/debug/app-debug.apk`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run lint` - Executa o linter
- `npm run preview` - Preview do build de produção

## Instalação no Smartphone

### Via USB (ADB)

1. Ative as **Opções de Desenvolvedor** no seu celular
2. Ative a **Depuração USB**
3. Conecte o celular via USB
4. Execute:

```bash
cd android
./gradlew installDebug
```

### Via Transferência de Arquivo

1. Transfira o arquivo `app-debug.apk` para seu celular
2. Abra o arquivo no celular
3. Permita instalação de fontes desconhecidas (se solicitado)
4. Instale o aplicativo

## Estrutura do Projeto

```
my-ionic-app/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── assets/         # Imagens, fontes, etc.
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Ponto de entrada
├── public/             # Arquivos estáticos
├── android/            # Projeto Android nativo
├── dist/               # Build de produção (gerado)
└── capacitor.config.ts # Configuração Capacitor
```

## Tecnologias Utilizadas

- Ionic React - Framework mobile
- React 19 - Biblioteca UI
- TypeScript - Tipagem estática
- Vite - Build tool
- Tailwind CSS - Framework CSS
- Capacitor - Runtime nativo
- React Router - Roteamento

## Documentação Adicional

Para documentação completa do projeto, consulte [DOCUMENTACAO.md](./DOCUMENTACAO.md).

Para instruções detalhadas de build Android, consulte [BUILD_APK.md](./BUILD_APK.md).

## Troubleshooting

### Erro: "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro ao sincronizar Android

```bash
npm run build
npx cap sync android
```

### Erro de permissão no Gradle

```bash
cd android
chmod +x gradlew
```

## Licença

Este projeto está sob a licença MIT.

## Contribuindo

Contribuições são bem-vindas.
