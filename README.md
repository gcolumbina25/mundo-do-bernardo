# Mundo do Bernardo - Site de Festa de Aniversário

Site responsivo para festa de aniversário do Bernardo, desenvolvido com React e otimizado para dispositivos móveis.

## 🎉 Sobre o Projeto

Este é um site especial criado para a festa de aniversário do Bernardo, com design lúdico e funcionalidades interativas. O site inclui:

- **Design responsivo** otimizado para mobile
- **Formulário de confirmação** de presença (RSVP)
- **Contador de dias** para a festa
- **Música de fundo** opcional
- **Animações** e elementos visuais divertidos
- **Integração com mapas** para localização
- **Sistema de e-mail** para confirmações

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/gcolumbina25/bernardos-big-bash.git
   ```

2. **Navegue para o diretório:**
   ```bash
   cd bernardos-big-bash
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Abra no navegador:**
   ```
   http://localhost:8080
   ```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework de CSS
- **shadcn/ui** - Componentes de interface
- **EmailJS** - Serviço de envio de e-mails
- **Lucide React** - Ícones

## 📧 Configuração do E-mail

Para que o formulário de confirmação funcione, é necessário configurar o EmailJS:

1. Siga as instruções no arquivo `EMAILJS_SETUP.md`
2. Configure suas credenciais no arquivo `src/services/emailService.ts`
3. Teste o formulário para garantir que os e-mails chegam

## 🎨 Personalização

O site pode ser facilmente personalizado:

- **Cores:** Edite o arquivo `src/index.css`
- **Conteúdo:** Modifique `src/pages/Index.tsx`
- **Assets:** Substitua as imagens na pasta `src/assets/`
- **Data da festa:** Altere no arquivo `src/pages/Index.tsx`

## 📱 Deploy

O projeto pode ser deployado em qualquer plataforma que suporte React:

- **Netlify** (recomendado)
- **Vercel**
- **GitHub Pages**
- **Heroku**

### Deploy no Netlify

1. Conecte seu repositório GitHub ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`
4. Faça o deploy!

## 📄 Licença

Este projeto foi desenvolvido por **Columbina Creative Designer**.

## 🤝 Contribuição

Este é um projeto privado para a festa do Bernardo. Para dúvidas ou sugestões, entre em contato através do link no rodapé do site.

---

**Desenvolvido com ❤️ para a festa do Bernardo**