import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getServerConfig } from "../config.server";

export const sendBookingEmail = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1, "Név megadása kötelező"),
      phone: z.string().min(1, "Telefonszám megadása kötelező"),
      email: z.string().email("Érvénytelen e-mail cím"),
      car: z.string().optional().or(z.literal("")),
      service: z.string().min(1, "Szolgáltatás kiválasztása kötelező"),
      message: z.string().optional().or(z.literal("")),
    })
  )
  .handler(async ({ data }) => {
    const config = getServerConfig();
    const apiKey = process.env.BREVO_API_KEY || config.brevoApiKey;

    if (!apiKey) {
      console.error("Missing Brevo API key in server config. Checked process.env.BREVO_API_KEY and config.");
      throw new Error("A szerver e-mail küldési beállítása hiányos. Kérjük, próbálkozzon később!");
    }

    const sendEmail = async (body: any) => {
      const res = await fetch("https://api.brevo.com/v3/smtp/emails", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "content-type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error(`Brevo SMTP request failed: ${res.status} - ${errText}`);
        throw new Error(`Brevo API error: ${res.status}`);
      }
      return res.json();
    };

    // 1. Internal Notification (to: ronaldo02149@gmail.com)
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: sans-serif; background-color: #f4f4f5; color: #18181b; padding: 20px; margin: 0; }
          .card { background-color: #ffffff; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto; border-top: 4px solid #eab308; }
          h2 { color: #09090b; margin-top: 0; font-size: 20px; border-bottom: 1px solid #e4e4e7; padding-bottom: 12px; }
          table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          td { padding: 12px 8px; border-bottom: 1px solid #e4e4e7; vertical-align: top; }
          .label { font-weight: bold; color: #71717a; width: 35%; }
          .value { color: #18181b; }
          .message-box { background-color: #f4f4f5; padding: 12px; border-radius: 6px; border-left: 3px solid #d4d4d8; font-style: italic; white-space: pre-wrap; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>ÚJ AJÁNLATKÉRÉS ÉRKEZETT - Patkó Car</h2>
          <p>A weboldalon új ajánlatkérés / időpontfoglalás űrlapot küldtek be:</p>
          <table>
            <tr>
              <td class="label">Név:</td>
              <td class="value"><strong>${data.name}</strong></td>
            </tr>
            <tr>
              <td class="label">Telefonszám:</td>
              <td class="value"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>
            <tr>
              <td class="label">E-mail cím:</td>
              <td class="value"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td class="label">Autó típusa:</td>
              <td class="value">${data.car || "Nincs megadva"}</td>
            </tr>
            <tr>
              <td class="label">Szolgáltatás:</td>
              <td class="value"><strong>${data.service}</strong></td>
            </tr>
            <tr>
              <td class="label">Megjegyzés / Üzenet:</td>
              <td class="value">
                <div class="message-box">${data.message ? data.message : "Nem adott meg üzenetet."}</div>
              </td>
            </tr>
          </table>
        </div>
      </body>
      </html>
    `;

    const adminEmailPayload = {
      sender: { name: "Patkó Car Weboldal", email: "ronaldo02149@gmail.com" },
      to: [{ email: "ronaldo02149@gmail.com" }],
      subject: "ÚJ AJÁNLATKÉRÉS ÉRKEZETT - Patkó Car",
      htmlContent: adminEmailHtml,
    };

    // 2. Customer Confirmation (to: data.email)
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: sans-serif; background-color: #0c0a09; color: #f5f5f4; padding: 40px 20px; margin: 0; }
          .card { background-color: #1c1917; border: 1px solid #2e2a24; border-radius: 16px; padding: 32px; max-width: 600px; margin: 0 auto; text-align: center; }
          .logo { color: #eab308; font-size: 24px; font-weight: 800; letter-spacing: 0.1em; margin-bottom: 24px; text-transform: uppercase; }
          h2 { color: #ffffff; font-size: 20px; margin-top: 0; font-weight: 700; }
          p { color: #d6d3d1; font-size: 15px; line-height: 1.6; margin: 16px 0; text-align: left; }
          .highlight-box { background-color: #2e2a24; border-left: 4px solid #eab308; padding: 16px; border-radius: 8px; margin: 20px 0; text-align: left; }
          .highlight-box p { margin: 4px 0; font-size: 14px; color: #e4e4e7; }
          .footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid #2e2a24; color: #78716c; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="logo">Patkó Car</div>
          <h2>Kedves ${data.name}!</h2>
          <p>Köszönjük a megkeresést! Értesítünk, hogy az ajánlatkérésedet sikeresen fogadtuk.</p>
          <p>Kollégánk hamarosan átnézi a részleteket, és a megadott telefonszámon (<strong style="color: #eab308;">${data.phone}</strong>) keresni fog az időpont véglegesítésével kapcsolatban.</p>
          
          <div class="highlight-box">
            <p><strong>A megadott adatok:</strong></p>
            <p>• Szolgáltatás: ${data.service}</p>
            <p>• Autó típusa: ${data.car || "Nincs megadva"}</p>
          </div>

          <p>Üdvözlettel,<br><strong style="color: #ffffff;">Patkó Car csapata</strong></p>
          
          <div class="footer">
            Ez egy automatikus visszaigazoló e-mail. Kérjük, ne válaszolj rá közvetlenül.<br>
            Patkó Car Vásárosnamény
          </div>
        </div>
      </body>
      </html>
    `;

    const customerEmailPayload = {
      sender: { name: "Patkó Car", email: "ronaldo02149@gmail.com" },
      to: [{ email: data.email }],
      subject: "Sikeres időpontfoglalás / ajánlatkérés – Patkó Car Vásárosnamény",
      htmlContent: customerEmailHtml,
    };

    try {
      await Promise.all([
        sendEmail(adminEmailPayload),
        sendEmail(customerEmailPayload),
      ]);
      return { success: true };
    } catch (error: any) {
      console.error("Error sending emails through Brevo SMTP:", error);
      throw new Error("Sikertelen e-mail küldés. Kérjük, vegye fel velünk a kapcsolatot telefonon!");
    }
  });
