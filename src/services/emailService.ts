// Serviço de e-mail usando EmailJS
// Para configurar, você precisa:
// 1. Criar uma conta em https://www.emailjs.com/
// 2. Configurar um serviço de e-mail (Gmail, Outlook, etc.)
// 3. Criar um template de e-mail
// 4. Substituir as constantes abaixo com seus dados

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export interface RSVPData {
  name: string;
  attending: string;
  guests: number;
}

export const sendRSVPEmail = async (data: RSVPData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Importação dinâmica do EmailJS
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      to_email: 'columbinagustavo@gmail.com',
      from_name: data.name,
      attending: data.attending === 'yes' ? 'Sim, com certeza!' : 'Infelizmente, não poderei.',
      guests: data.guests.toString(),
      event_date: '22 de Novembro de 2025',
      event_name: 'Festa do Bernardo'
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', result);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Erro desconhecido' 
    };
  }
};

// Função alternativa usando fetch para um webhook (se você preferir)
export const sendRSVPWebhook = async (data: RSVPData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Você pode usar serviços como:
    // - Zapier Webhooks
    // - IFTTT Webhooks
    // - Make.com (antigo Integromat)
    // - Webhook.site para testes
    
    const webhookUrl = 'YOUR_WEBHOOK_URL'; // Substitua pela sua URL de webhook
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        attending: data.attending,
        guests: data.guests,
        timestamp: new Date().toISOString(),
        event: 'Festa do Bernardo - 22 de Novembro de 2025'
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending webhook:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Erro desconhecido' 
    };
  }
};
