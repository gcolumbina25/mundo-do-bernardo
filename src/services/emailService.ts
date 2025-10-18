// Serviço de e-mail usando EmailJS
// Para configurar, você precisa:
// 1. Criar uma conta em https://www.emailjs.com/
// 2. Configurar um serviço de e-mail (Gmail, Outlook, etc.)
// 3. Criar um template de e-mail
// 4. Substituir as constantes abaixo com seus dados

const EMAILJS_SERVICE_ID = 'service_gd40wxn';
const EMAILJS_TEMPLATE_ID = 'template_9210n2p';
const EMAILJS_PUBLIC_KEY = 'Fn8VipqWffJloXBkf';

export interface RSVPData {
  name: string;
  attending: string;
  adults: number;
  children: number;
}

export const sendRSVPEmail = async (data: RSVPData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Importação dinâmica do EmailJS
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      to_email: 'columbinagustavo@gmail.com',
      from_name: data.name,
      attending: data.attending === 'yes' ? 'Sim, com certeza!' : 'Infelizmente, não poderei.',
      guests: (data.adults + data.children).toString(), // Campo temporário para compatibilidade
      adults: data.adults.toString(),
      children: data.children.toString(),
      total_guests: (data.adults + data.children).toString(),
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
        adults: data.adults,
        children: data.children,
        total_guests: data.adults + data.children,
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
