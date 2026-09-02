# 🚀 Portfólio — Tiago Araújo Francisco

> **Desenvolvedor Full-Stack JS/TS | Certified Scrum Master (CSM®)**

Website de portfólio profissional com design minimalista dark mode, inspirado no estilo visual de [lucasmontano.com](https://lucasmontano.com). Construído com foco em performance, acessibilidade WCAG AA e conversão.

---

## ✨ Demo

Acede ao portfólio ao vivo: portfólio-lilás-seis-37.vercel.app

---

## 🛠️ Tech Stack

| Camada       | Tecnologias                                      |
| ------------ | ------------------------------------------------ |
| **Frontend** | Next.js 14, React 18, TypeScript                 |
| **Styling**  | Tailwind CSS, Framer Motion                      |
| **Icons**    | Lucide React                                     |
| **Deploy**   | Vercel (recomendado)                             |

---

## 📁 Estrutura do Projeto

```
tiago-portfolio/
├── app/                    # App Router (Next.js)
│   ├── globals.css         # Estilos globais + utilities
│   ├── layout.tsx          # Layout principal (SEO, fonts)
│   └── page.tsx            # Página principal
├── components/             # Componentes React
│   ├── ui/                 # Componentes UI reutilizáveis
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   ├── TechStackSection.tsx
│   ├── ExperienceTimeline.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── data/                   # Dados centralizados
│   ├── content.ts          # Textos, skills, certificações
│   └── projects.ts         # Projetos em destaque
├── types/                  # Interfaces TypeScript
│   └── index.ts
└── public/assets/          # Assets estáticos
```

---

## 🚀 Executar Localmente

### Pré-requisitos
- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Setup

```bash
# Clonar repositório
git clone https://github.com/tiagodearaujo13-lab/portfolio-tiago.git
cd portfolio-tiago

# Instalar dependências
npm install

# Copiar variáveis de ambiente
cp .env.example .env.local

# Executar em modo de desenvolvimento
npm run dev
```

Acede a **http://localhost:3000** no browser.

### Build de Produção

```bash
npm run build
npm start
```

---

## 🎨 Design System

- **Paleta**: Dark mode nativo (`zinc-950` / `zinc-900`) com acentos emerald
- **Tipografia**: Inter (Google Fonts) com antialiasing
- **Componentes**: Glass-card, badges com variantes, botões com micro-animações
- **Acessibilidade**: WCAG AA — contraste, `focus-visible`, `aria-labels`, HTML semântico

---

## 📜 Licença

Este projeto é de uso pessoal. Todos os direitos reservados © 2024 Tiago Araújo Francisco.

---

## 📫 Contato

- **Email**: tiagodearaujo13@gmail.com
- **LinkedIn**: [Tiago Araújo Francisco](https://www.linkedin.com/in/tiago-araújofrancisco/)
- **GitHub**: [tiagodearaujo13-lab](https://github.com/tiagodearaujo13-lab)
