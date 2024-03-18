
### A Next.js SaaS Lemonsqueezy Boilerplate

This repository serves as a starting point (or boilerplate) for any Next.js SaaS project that requires user authentication, management, and subscription payments. It currently uses Prisma with a Postgres database and is built using shadcn/ui components as well as custom sass components as needed.

## Live: [https://nextjs-lemonsqueezy-boilerplate.vercel.app/](https://nextjs-lemonsqueezy-boilerplate.vercel.app/)

## The stack
> Changes or additions to teh stack will be updated here

- Next.js
- Tailwind
- Radix UI
- NextAuth
- Typescript
- Prisma
- Postgresql
- LemonSqueezy (Subscriptions)
- Sass
- shadcn/ui
- Resend
- Lucide icons

## Features
> Features are developed in no specific order

- [x] App directory
- [x] Route Groups
- [x] Intercepting & Parallel Routes
- [x] CSR/SSR
- [x] Subscriptions with Lemon Squeezy
- [x] Basic SEO
- [x] User Profiles
- [x] Account Pages
- [x] Custom Components
- [x] Toast Message
- [ ] Light/Dark Modes
- [x] Responsive Design
- [ ] Dasboard layouts
- [ ] Cookies
- [ ] Intl
- [ ] Custom errors

## Setup
Create a `.env` file and generate NextAuth secret using:

```bash
openssl rand -base64 32
```


## Getting Started
```bash
npx prisma migrate dev --name init
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.