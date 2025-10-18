# Configuração do EmailJS para Envio de E-mails

## 📧 Como Configurar o EmailJS

> **🆕 Atualização:** O formulário agora separa adultos e crianças para melhor organização da festa!

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

<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
  
  <!-- Cabeçalho -->
  <div style="text-align: center; background: linear-gradient(135deg, #4A90E2, #7B68EE); padding: 30px; border-radius: 15px 15px 0 0; color: white;">
    <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🎉 Nova Confirmação!</h1>
    <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Festa do Bernardo</p>
  </div>

  <!-- Conteúdo Principal -->
  <div style="background: white; padding: 30px; border-radius: 0 0 15px 15px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    
    <p style="font-size: 18px; color: #333; margin-bottom: 25px;">
      Olá! Você recebeu uma nova confirmação de presença para a festa do Bernardo. 🎂
    </p>

    <!-- Card de Informações -->
    <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; border-left: 4px solid #4A90E2; margin: 20px 0;">
      
      <h2 style="color: #4A90E2; margin: 0 0 20px 0; font-size: 20px;">👤 Informações do Convidado</h2>
      
      <div style="display: flex; align-items: center; margin-bottom: 15px;">
        <span style="background: #4A90E2; color: white; padding: 8px 12px; border-radius: 20px; font-weight: bold; margin-right: 15px; min-width: 80px; text-align: center;">Nome</span>
        <span style="font-size: 16px; color: #333;">{{from_name}}</span>
      </div>

      <div style="display: flex; align-items: center; margin-bottom: 15px;">
        <span style="background: #28a745; color: white; padding: 8px 12px; border-radius: 20px; font-weight: bold; margin-right: 15px; min-width: 80px; text-align: center;">Status</span>
        <span style="font-size: 16px; color: #333;">{{attending}}</span>
      </div>
    </div>

    <!-- Card de Quantidade -->
    <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; border-left: 4px solid #28a745; margin: 20px 0;">
      
      <h2 style="color: #28a745; margin: 0 0 20px 0; font-size: 20px;">👥 Quantidade de Pessoas</h2>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
        <div style="text-align: center; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="font-size: 24px; font-weight: bold; color: #4A90E2;">{{adults}}</div>
          <div style="font-size: 14px; color: #666; margin-top: 5px;">Adultos</div>
        </div>
        <div style="text-align: center; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="font-size: 24px; font-weight: bold; color: #ff6b6b;">{{children}}</div>
          <div style="font-size: 14px; color: #666; margin-top: 5px;">Crianças</div>
        </div>
      </div>

      <div style="text-align: center; background: linear-gradient(135deg, #4A90E2, #7B68EE); color: white; padding: 15px; border-radius: 8px; margin-top: 15px;">
        <div style="font-size: 20px; font-weight: bold;">Total: {{total_guests}} pessoas</div>
      </div>
    </div>

  </div>

  <!-- Rodapé -->
  <div style="text-align: center; margin-top: 20px; padding: 15px; color: #666; font-size: 12px;">
    <p style="margin: 0;">Desenvolvido com ❤️ para a festa do Bernardo</p>
    <p style="margin: 5px 0 0 0;">Email enviado via EmailJS</p>
  </div>

</div>
```

4. **Anote o Template ID** (ex: `template_xyz789`)

**📋 Campos Disponíveis no Template:**
- `{{from_name}}` - Nome do convidado
- `{{attending}}` - "Sim, com certeza!" ou "Infelizmente, não poderei."
- `{{adults}}` - Número de adultos (acima de 8 anos)
- `{{children}}` - Número de crianças (até 7 anos)
- `{{total_guests}}` - Total de pessoas (adultos + crianças)

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
2. Teste o formulário no site:
   - Preencha o nome
   - Selecione "Sim, com certeza!"
   - Ajuste os contadores de adultos e crianças
   - Envie o formulário
3. Verifique se o e-mail chegou em `columbinagustavo@gmail.com` com:
   - Nome do convidado
   - Quantidade separada de adultos e crianças
   - Total de pessoas

**📧 Exemplo de E-mail Recebido (Design Final):**
```
Subject: Nova Confirmação de Presença - João Silva

🎉 Nova Confirmação!
Festa do Bernardo

Olá! Você recebeu uma nova confirmação de presença para a festa do Bernardo. 🎂

👤 Informações do Convidado
[Nome] João Silva
[Status] Sim, com certeza!

👥 Quantidade de Pessoas
[2] Adultos    [1] Crianças
Total: 3 pessoas

Desenvolvido com ❤️ para a festa do Bernardo
Email enviado via EmailJS
```

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
