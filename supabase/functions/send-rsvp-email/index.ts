import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface RSVPRequest {
  name: string;
  attending: string;
  guests: number;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, attending, guests }: RSVPRequest = await req.json();

    console.log("Processing RSVP:", { name, attending, guests });

    const emailResponse = await resend.emails.send({
      from: "Festa do Bernardo <onboarding@resend.dev>",
      to: ["ari17arthur@gmail.com"],
      subject: `Confirmação de Presença - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #4A90E2; text-align: center;">Nova Confirmação de Presença</h1>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px; margin-top: 20px;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Vai comparecer:</strong> ${attending === "yes" ? "Sim, com certeza!" : "Infelizmente, não poderei."}</p>
            <p><strong>Número de pessoas:</strong> ${guests}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="text-align: center; color: #666; font-size: 12px;">
            Confirmação recebida para a festa do Bernardo - 22 de Novembro de 2025
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-rsvp-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
