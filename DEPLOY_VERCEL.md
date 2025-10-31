# Guia de Deploy para Vercel

Este guia detalha as etapas e correções necessárias para realizar o deploy deste projeto na plataforma Vercel.

## 🔧 Correções Realizadas

As seguintes correções foram aplicadas para garantir a compatibilidade e o funcionamento correto no ambiente Vercel:

### 1. **Criado vercel.json**
   - Configuração de build para Vite.
   - Rewrites para SPA routing (client-side routing).
   - Headers de cache para assets.
   - Output directory correto: `dist/public`.

### 2. **Corrigido vite.config.ts**
   - Removido `import.meta.dirname` (não suportado no Vercel).
   - Substituído por `__dirname` com `fileURLToPath`.
   - Removidos plugins específicos da plataforma Manus (`@builder.io/vite-plugin-jsx-loc` e `vite-plugin-manus-runtime`).
   - Mantidos apenas plugins essenciais: React e Tailwind.

### 3. **Corrigido import no App.tsx**
   - Case-sensitivity no nome do arquivo: `Cyberpunkbackground` corrigido para `CyberpunkBackground`.

---

## 📦 Arquivos Modificados para Commit

Os seguintes arquivos devem ser comitados e enviados ao seu repositório GitHub para que o deploy no Vercel funcione:

| Arquivo | Ação |
| :--- | :--- |
| `vercel.json` | **NOVO** |
| `vite.config.ts` | **MODIFICADO** |
| `client/src/App.tsx` | **MODIFICADO** |
| `DEPLOY_VERCEL.md` | **NOVO** |

---

## 🚀 Como Fazer Deploy Agora

### Método 1: Via Dashboard (Recomendado)

1. **Commit das Alterações:**
   ```bash
   git add .
   git commit -m "Fix: Configurar projeto para deploy no Vercel"
   git push origin main
   ```
2. Acesse [vercel.com](https://vercel.com) e faça login.
3. Clique em **"Add New Project"**.
4. Selecione seu repositório.
5. Configure as variáveis de ambiente (se necessário).
6. Clique em **"Deploy"**.

### Método 2: Via CLI

1. Instale a CLI do Vercel:
   ```bash
   npm install -g vercel
   ```
2. Execute o comando de deploy no diretório raiz do projeto:
   ```bash
   vercel
   ```

---

## ⚠️ Avisos (Warnings) - Não Críticos

Os seguintes avisos podem aparecer, mas **não impedem o deploy**:

- **Variáveis de ambiente não definidas**: Configure-as no dashboard do Vercel.
- **@import em CSS**: Aviso de estilo.

**Status: PRONTO PARA DEPLOY** 🎉
