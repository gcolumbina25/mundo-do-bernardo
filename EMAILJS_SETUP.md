# Configuração do EmailJS para Envio de E-mails

## 📧 Como Configurar o EmailJS

### 1. Criar Conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu e-mail

### 2. Configurar Serviço de E-mail
1. No dashboard, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de e-mail:
   - **Gmail** (recomendado)
   - **Outlook**
   - **Yahoo**
   - **Outros**
4. Siga as instruções para conectar sua conta
5. **Anote o Service ID** (ex: `service_abc123`)

### 3. Criar Template de E-mail
1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Use este template:

```html
Subject: Nova Confirmação de Presença - {{from_name}}

Olá!

Você recebeu uma nova confirmação de presença para a Festa do Bernardo.

Detalhes:
- Nome: {{from_name}}
- Vai comparecer: {{attending}}
- Número de pessoas: {{guests}}
- Evento: {{event_name}}
- Data: {{event_date}}

Enviado em: {{sent_date}}

---
Festa do Bernardo - 22 de Novembro de 2025
```

4. **Anote o Template ID** (ex: `template_xyz789`)

### 4. Obter Chave Pública
1. Vá para "Account" → "General"
2. **Anote a Public Key** (ex: `user_abc123def456`)

### 5. Configurar o Código
1. Abra o arquivo: `src/services/emailService.ts`
2. Substitua as constantes:

```typescript
const EMAILJS_SERVICE_ID = 'SEU_SERVICE_ID_AQUI';
const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID_AQUI';
const EMAILJS_PUBLIC_KEY = 'SUA_PUBLIC_KEY_AQUI';
```

### 6. Testar
1. Salve o arquivo
2. Teste o formulário no site
3. Verifique se o e-mail chegou em `columbinagustavo@gmail.com`

## 🔧 Alternativas

### Opção 1: Webhook (Mais Simples)
Se preferir não usar EmailJS, você pode usar webhooks:

1. **Zapier**: https://zapier.com/
   - Crie um webhook
   - Configure para enviar e-mail
   - Use a URL do webhook no código

2. **IFTTT**: https://ifttt.com/
   - Crie um applet com webhook
   - Configure para enviar e-mail

3. **Make.com**: https://www.make.com/
   - Crie um cenário com webhook
   - Configure para enviar e-mail

### Opção 2: Formspree (Mais Fácil)
1. Acesse: https://formspree.io/
2. Crie um formulário
3. Use a URL do formulário no código

## 📱 Limites Gratuitos

- **EmailJS**: 200 e-mails/mês
- **Zapier**: 100 tarefas/mês
- **IFTTT**: Ilimitado (com limitações)
- **Formspree**: 50 envios/mês

## 🚀 Deploy

Após configurar, faça commit e push para o GitHub:

```bash
git add .
git commit -m "Add EmailJS service for RSVP emails"
git push
```

O site funcionará independentemente do Supabase!
