# Documentação Completa - PoTION

Essa documentação foi gerada com auxílio de IA e revisada por Nícolas Haas Soares na data de 12/11/2025

## Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura](#arquitetura)
3. [Componentes](#componentes)
4. [Páginas](#páginas)
5. [Roteamento](#roteamento)
6. [Estilização](#estilização)
7. [API e Backend](#api-e-backend)
8. [Build e Deploy](#build-e-deploy)
9. [Desenvolvimento](#desenvolvimento)
10. [Boas Práticas](#boas-práticas)

## Visão Geral

### Sobre o Projeto

Este é um aplicativo mobile desenvolvido com Ionic React, projetado para funcionar tanto na web quanto em dispositivos móveis (iOS/Android). O projeto utiliza tecnologias modernas como React 19, TypeScript, Vite e Tailwind CSS.

### Características Principais

- Interface responsiva e moderna
- Suporte a PWA (Progressive Web App)
- Build nativo para Android e iOS via Capacitor
- Tipagem forte com TypeScript
- Roteamento com React Router
- Estilização com Tailwind CSS
- Componentes reutilizáveis

## Arquitetura

### Estrutura de Pastas

```
my-ionic-app/
│
├── src/                          # Código fonte
│   ├── components/               # Componentes reutilizáveis
│   │   ├── Button.tsx           # Componente de botão customizado
│   │   ├── GlassForm.tsx        # Container com efeito glassmorphism
│   │   ├── GoogleIcon.tsx       # Ícone do Google
│   │   ├── Input.tsx            # Input customizado
│   │   ├── Logo.tsx             # Logo da aplicação
│   │   └── index.ts             # Exports dos componentes
│   │
│   ├── pages/                    # Páginas da aplicação
│   │   ├── Home.tsx             # Página inicial
│   │   ├── Login.tsx            # Página de login
│   │   └── SignIn.tsx           # Página de cadastro
│   │
│   ├── assets/                   # Assets estáticos
│   │
│   ├── App.tsx                   # Componente raiz
│   ├── App.css                   # Estilos globais
│   ├── main.tsx                  # Ponto de entrada
│   └── index.css                 # Estilos base e Tailwind
│
├── public/                       # Arquivos públicos
│   └── images/                   # Imagens
│
├── android/                      # Projeto Android nativo
│   ├── app/                      # Código Android
│   └── build.gradle              # Configuração Gradle
│
├── dist/                         # Build de produção (gerado)
│
├── capacitor.config.ts           # Configuração Capacitor
├── vite.config.ts                # Configuração Vite
├── tsconfig.json                 # Configuração TypeScript
├── tailwind.config.js            # Configuração Tailwind (implícito)
├── postcss.config.js             # Configuração PostCSS
├── package.json                  # Dependências e scripts
├── .env.example                  # Exemplo de variáveis de ambiente
└── README.md                     # Documentação básica
```

### Stack Tecnológico

#### Frontend

- **React 19.2.0** - Biblioteca UI com novas features
- **Ionic React 8.7.9** - Framework mobile cross-platform
- **TypeScript 5.9.3** - Superset JavaScript com tipagem estática
- **React Router** - Roteamento client-side
- **Tailwind CSS 4.1.17** - Framework CSS utility-first

#### Build & Dev Tools

- **Vite 6.4.1** - Build tool rápido e moderno
- **ESLint 9.39.1** - Linter JavaScript/TypeScript
- **PostCSS 8.5.6** - Processador CSS

#### Mobile

- **Capacitor 6.x** - Runtime nativo para iOS/Android
- Ionicons 8.0.13 - Biblioteca de ícones

## Componentes

### Button (`src/components/Button.tsx`)

Componente de botão customizado e reutilizável.

**Props:**

```typescript
{
  classes?: string;              // Classes CSS adicionais
  onClick?: () => void;          // Função ao clicar
  type?: "button" | "submit" | "reset";  // Tipo do botão
  style?: React.CSSProperties;   // Estilos inline
  children: React.ReactNode;     // Conteúdo do botão
}
```

**Exemplo de uso:**

```tsx
<Button
  type="submit"
  classes="w-full rounded-lg py-3"
  style={{ backgroundColor: "#667eea" }}
>
  Enviar
</Button>
```

### Input (`src/components/Input.tsx`)

Componente de input com label integrado.

**Props:**

```typescript
{
  type?: string;                 // Tipo do input (text, password, etc)
  name?: string;                 // Nome do campo
  placeholder?: string;          // Placeholder
  classes?: string;              // Classes CSS adicionais
  label?: string;                // Label do campo
  disableP?: boolean;            // Desabilita padding inferior
  value?: string;                // Valor controlado
  onChange?: (e) => void;        // Handler de mudança
}
```

**Exemplo de uso:**

```tsx
<Input
  name="email"
  type="email"
  label="E-mail"
  placeholder="Digite seu e-mail"
  value={formData.email}
  onChange={handleChange}
/>
```

### GlassForm (`src/components/GlassForm.tsx`)

Container com efeito glassmorphism (vidro fosco).

**Props:**

```typescript
{
  classes?: string;              // Classes CSS adicionais
  children: React.ReactNode;     // Conteúdo do form
}
```

**Características:**

- Background semitransparente
- Backdrop blur
- Sombra suave
- Bordas arredondadas

### Logo (`src/components/Logo.tsx`)

Componente para exibir o logo da aplicação.

**Props:**

```typescript
{
  position?: "left" | "right";   // Posição do logo
}
```

### GoogleIcon (`src/components/GoogleIcon.tsx`)

Ícone do Google em SVG com cores oficiais.

**Props:** Aceita todas as props de `SVGProps<SVGSVGElement>`

## Páginas

### Login (`src/pages/Login.tsx`)

Página de autenticação de usuários.

**Funcionalidades:**

- Login com credenciais (username/password)
- Login automático com novo usuário (Google)
- Validação de formulário
- Mensagens de erro animadas (toast)
- Redirecionamento após login bem-sucedido
- Armazenamento de sessão no localStorage

**Estado:**

```typescript
{
  formData: {
    username: string;
    password: string;
  }
  errMessage: string | null;
  isExiting: boolean; // Controle de animação do toast
}
```

**Fluxo de Login:**

1. Usuário preenche credenciais
2. Submete o formulário
3. Requisição POST para API
4. Em caso de sucesso:
   - Salva dados no localStorage
   - Redireciona para home
5. Em caso de erro:
   - Exibe mensagem de erro animada
   - Erro desaparece após 5 segundos

**Toast de Erro:**

- Animação de entrada: slide down (0.5s)
- Permanece visível por 4.5s
- Animação de saída: slide up (0.5s)
- Auto-destrutivo

### Home (`src/pages/Home.tsx`)

Página inicial da aplicação (implementação depende do projeto).

### SignIn (`src/pages/SignIn.tsx`)

Página de cadastro de novos usuários (implementação depende do projeto).

## Roteamento

### Configuração (`src/App.tsx`)

O roteamento é configurado usando `IonReactRouter` e `IonRouterOutlet`:

```tsx
<IonApp>
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/login" component={Login} />
    </IonRouterOutlet>
  </IonReactRouter>
</IonApp>
```

### Rotas Disponíveis

| Rota       | Componente | Descrição              |
| ---------- | ---------- | ---------------------- |
| `/`        | Home       | Página inicial         |
| `/login`   | Login      | Página de autenticação |
| `/sign-in` | SignIn     | Página de cadastro     |

### Navegação Programática

```typescript
import { useHistory } from "react-router-dom";

const history = useHistory();

// Navegar para outra página
history.push("/");

// Voltar
history.goBack();

// Substituir (sem adicionar no histórico)
history.replace("/login");
```

## Estilização

### Tailwind CSS

O projeto usa Tailwind CSS v4 com configuração via PostCSS.

**Classes personalizadas importantes:**

- `!text-[24px]` - Tamanho de texto com !important
- `bg-white/25` - Background branco com 25% opacidade
- `backdrop-blur-md` - Efeito blur no background
- `hover:bg-[#232ED1]` - Background no hover

### Glassmorphism

Efeito aplicado no componente `GlassForm`:

```css
background: rgba(255, 255, 255, 0.25);
backdrop-filter: blur(10px);
box-shadow: 2px 4px 10px 5px rgba(0, 0, 0, 0.25);
```

### Animações

**Toast de erro (Login):**

```css
@keyframes slideInFromTop {
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

**Transições Ionic:**

- iOS transition: deslizar da direita
- Material Design transition: fade + slide

### Fontes

- **Inter** - Pesos: 300, 400, 500, 700
- Roboto - Pesos: 300, 400, 500, 700

## API e Backend

### Configuração

As URLs da API são configuradas via variáveis de ambiente:

```env
VITE_SERVER_API=https://sua-api-url.com
```

Acesso no código:

```typescript
import.meta.env.VITE_SERVER_API;
```

### Endpoints Utilizados

#### POST `/login.php`

Autentica um usuário.

**Request:**

```json
{
  "username": "usuario@email.com",
  "password": "senha123"
}
```

**Response (sucesso):**

```json
{
  "token": "abc123...",
  "user": {
    "id": 1,
    "username": "usuario@email.com",
    "name": "Nome do Usuário"
  }
}
```

**Response (erro):**

```json
{
  "error": "Credenciais inválidas"
}
```

#### GET `/start-adventure.php`

Cria e retorna credenciais de um novo usuário.

**Response:**

```json
{
  "username": "novo_usuario@email.com",
  "password": "senha_gerada"
}
```

### Armazenamento Local

Dados de sessão são salvos no `localStorage`:

```typescript
// Salvar
localStorage.setItem("sessionData", JSON.stringify(userData));

// Recuperar
const session = JSON.parse(localStorage.getItem("sessionData"));

// Limpar
localStorage.removeItem("sessionData");
```

## Build e Deploy

### Build Web

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

### Build Android

#### 1. Preparar projeto

```bash
# Build web
npm run build

# Sincronizar com Android
npx cap sync android
```

#### 2. Build Debug APK

**Via Android Studio:**

```bash
npx cap open android
# Build → Build Bundle(s) / APK(s) → Build APK(s)
```

**Via linha de comando:**

```bash
cd android
./gradlew assembleDebug
```

APK gerado em: `android/app/build/outputs/apk/debug/app-debug.apk`

#### 3. Build Release APK

**Pré-requisitos:**

- Gerar keystore
- Configurar signing no `android/app/build.gradle`

```bash
cd android
./gradlew assembleRelease
```

### Deploy Web

O build web (`dist/`) pode ser implantado em:

- **Netlify**
- **Vercel**
- **GitHub Pages**
- **Firebase Hosting**
- Qualquer servidor web estático

### Deploy Play Store

1. Build release APK ou AAB (Android App Bundle)
2. Criar conta de desenvolvedor Google Play
3. Criar aplicativo no Console
4. Upload do APK/AAB
5. Preencher informações da Store
6. Submeter para revisão

## Desenvolvimento

### Configuração do Ambiente

#### 1. Variáveis de Ambiente

Crie `.env` baseado em `.env.example`:

```env
VITE_SERVER_API=http://localhost:3000/api
```

#### 2. Iniciar desenvolvimento

```bash
npm run dev
```

#### 3. Hot Reload

O Vite fornece hot reload automático. Mudanças no código são refletidas instantaneamente no navegador.

### Estrutura de Componentes

#### Criar novo componente

1. Crie o arquivo em `src/components/`

```tsx
// src/components/MeuComponente.tsx
import React from "react";

interface MeuComponenteProps {
  titulo: string;
}

const MeuComponente: React.FC<MeuComponenteProps> = ({ titulo }) => {
  return <div>{titulo}</div>;
};

export default MeuComponente;
```

2. Exporte em `src/components/index.ts`

```typescript
export { default as MeuComponente } from "./MeuComponente";
```

3. Use no código

```tsx
import { MeuComponente } from "../components";

<MeuComponente titulo="Olá" />;
```

### Criar Nova Página

1. Crie em `src/pages/`

```tsx
// src/pages/MinhaPage.tsx
import { IonContent, IonPage } from "@ionic/react";

const MinhaPage = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div>Conteúdo da página</div>
      </IonContent>
    </IonPage>
  );
};

export default MinhaPage;
```

2. Adicione rota em `src/App.tsx`

```tsx
<Route exact path="/minha-pagina" component={MinhaPage} />
```

### Debug

#### Web

```bash
# Chrome DevTools
F12 ou Cmd+Option+I

# React DevTools
# Instale a extensão no navegador
```

#### Android

```bash
# Conectar dispositivo via USB
adb devices

# Ver logs
adb logcat

# Chrome DevTools para WebView
chrome://inspect
```

### Testes

#### Estrutura (exemplo)

```bash
npm install --save-dev @testing-library/react vitest
```

```typescript
// src/components/__tests__/Button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

test("renderiza botão com texto", () => {
  render(<Button>Clique aqui</Button>);
  expect(screen.getByText("Clique aqui")).toBeInTheDocument();
});
```

## Boas Práticas

### TypeScript

```typescript
// Bom: tipos explícitos
interface UserData {
  username: string;
  password: string;
}

const handleLogin = async (data: UserData): Promise<void> => {
  // ...
};

// Evitar: tipos implícitos
const handleLogin = async (data) => {
  // ...
};
```

### Componentes

```typescript
// Bom: componentes pequenos e focados
const LoginForm = () => {
  /* ... */
};
const LoginButton = () => {
  /* ... */
};

// Evitar: componentes muito grandes
const LoginPage = () => {
  // 500 linhas de código...
};
```

### Estado

```typescript
// Bom: useState para estado local
const [count, setCount] = useState(0);

// Bom: useEffect para side effects
useEffect(() => {
  // side effect
  return () => {
    // cleanup
  };
}, [dependencies]);
```

### Estilização

```typescript
// Bom: Tailwind classes
<div className="flex items-center justify-center p-4">

// Bom: estilos inline quando necessário
<div style={{ background: 'linear-gradient(...)' }}>

// Evitar: inline styles extensivos
<div style={{
  width: '100%',
  padding: '16px',
  margin: '8px',
  // ... 20 mais propriedades
}}>
```

### Performance

```typescript
// Bom: memo para componentes pesados
const MeuComponente = React.memo(({ data }) => {
  return <div>{data}</div>;
});

// Bom: lazy loading para páginas
const MinhaPage = React.lazy(() => import("./pages/MinhaPage"));
```

### Segurança

```typescript
// Bom: validar inputs
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Bom: sanitizar dados
const sanitize = (input: string) => input.trim().toLowerCase();

// Evitar: confiar cegamente em inputs do usuário
```

### Git Commits

```bash
# Bom: mensagens claras
git commit -m "feat: adiciona página de login"
git commit -m "fix: corrige validação de email"
git commit -m "style: ajusta padding do botão"

# Evitar: mensagens vagas
git commit -m "mudanças"
git commit -m "fix"
```

## Recursos Adicionais

### Documentação Oficial

- [Ionic React](https://ionicframework.com/docs/react)
- [Capacitor](https://capacitorjs.com/docs)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite](https://vitejs.dev/guide)

### Comunidade

- [Ionic Forum](https://forum.ionicframework.com)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/ionic-framework)
- Discord Ionic](https://ionic.link/discord)

## Notas Finais

### Changelog

Mantenha um arquivo `CHANGELOG.md` para registrar mudanças importantes.

### Versionamento

Siga [Semantic Versioning](https://semver.org/):

- MAJOR.MINOR.PATCH
- Ex: 1.0.0 -> 1.1.0 -> 1.1.1

### Licença

Defina a licença apropriada no `package.json` e crie um arquivo `LICENSE`.

Última atualização: 12 de novembro de 2025
