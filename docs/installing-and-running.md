# Installation

---

## Table of Contents <!-- omit in toc -->

- [Development](#development)
- [Production build](#production-build)

---

## Development

1. Clone repository

   ```bash
   git clone --depth 1 https://github.com/xxx.git my-app
   ```

1. Install dependencies

   ```bash
   cd my-app
   pnpm install
   ```

1. Copy example environment file

   ```bash
   cp example.env.local .env.local
   ```

1. Run development server

   ```bash
   pnpm run dev
   ```

## Production build

1. Clone repository

   ```bash
   git clone --depth 1 https://github.com/xxx.git my-app
   ```

1. Install dependencies

   ```bash
   cd my-app
   pnpm install
   ```

1. Copy example environment file

   ```bash
   cp example.env.local .env.local
   ```

1. Build application

   ```bash
   pnpm run build
   ```

1. Run production server

   ```bash
    pnpm run start
   ```

---

Previous: [Introduction](introduction.md)

Next: [Architecture](architecture.md)
