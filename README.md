# Barbearia Studio

Site institucional da barbearia em **Next.js**, pronto para deploy na **Vercel**.

## Stack

- Next.js 15 + React 19
- TypeScript + Tailwind CSS
- Dados estáticos migrados do sistema PHP original

## Páginas

- `/` — home com serviços, produtos, sobre, contato e depoimentos
- `/agendamentos` — formulário de agendamento (confirmação via WhatsApp)
- `/servicos` — catálogo de serviços
- `/produtos` — catálogo de produtos

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Conecte o repositório GitHub `abarakus11/barbearia-modelo`
2. Framework: **Next.js** (detectado automaticamente)
3. Deploy

Não é necessário configurar PHP nem MySQL na Vercel.

## Sistema PHP original

O código PHP + MySQL antigo ficou em `legacy/` para uso local com XAMPP.
O dump do banco continua em `barbearia.sql`.

### XAMPP (opcional)

1. Importe `barbearia.sql` no MySQL
2. Copie `legacy/` para `htdocs/barbearia-legacy`
3. Acesse `http://localhost/barbearia-legacy/sistema/`
4. Login: `admin@admin` / senha `123`

## Personalização

Edite `src/data/site.ts` para alterar textos, preços, profissionais e imagens.
