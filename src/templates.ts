const WEBSITE_URL = "https://itsjustrosess.selim-altayev.workers.dev";
const COMPANY_NAME = "It's Just Roses";
const LOGO_URL = "https://itsjustrosess.selim-altayev.workers.dev/android-chrome-512x512.png";

interface AutoReplyTranslation {
  subject: string;
  title: string;
  greeting: string;
  body1: string;
  body2: string;
  regards: string;
  contactTitle: string;
  linksTitle: string;
  legalTitle: string;
  links: {
    about: string;
    events: string;
    contact: string;
  };
  legal: {
    privacy: string;
    terms: string;
    cookie: string;
  };
  rightsReserved: string;
}

export const autoReplyTranslations: Record<string, AutoReplyTranslation> = {
  en: {
    subject: "We received your message! 🌱 - It's Just Roses",
    title: "Message Received!",
    greeting: "Hi",
    body1:
      "Thanks for reaching out to us. Your message has been safely planted in our inbox, and we're thrilled to connect with people who care about our campus and community.",
    body2:
      "Our team will review your inquiry and get back to you as soon as it sprouts (usually within 24 hours).",
    regards: "Warmly",
    contactTitle: "Reach Us Directly",
    linksTitle: "Quick Links",
    legalTitle: "Legal",
    links: {
      about: "About Us",
      events: "Events",
      contact: "Contact",
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookie: "Cookie Policy",
    },
    rightsReserved: "All rights reserved.",
  },
  ro: {
    subject: "Am primit mesajul tău! 🌱 - It's Just Roses",
    title: "Mesaj Primit!",
    greeting: "Salut",
    body1:
      "Îți mulțumim că ne-ai contactat. Mesajul tău a fost „plantat” în siguranță în inbox-ul nostru și ne bucurăm să cunoaștem oameni cărora le pasă de campusul și comunitatea noastră.",
    body2:
      "Echipa noastră va citi mesajul tău și îți va răspunde imediat ce încolțește (de obicei în cel mult 24 de ore).",
    regards: "Cu prietenie",
    contactTitle: "Contact Direct",
    linksTitle: "Link-uri Rapide",
    legalTitle: "Legal",
    links: {
      about: "Despre Noi",
      events: "Evenimente",
      contact: "Contact",
    },
    legal: {
      privacy: "Confidențialitate",
      terms: "Termeni și Condiții",
      cookie: "Module Cookie",
    },
    rightsReserved: "Toate drepturile rezervate.",
  }
};

export const getOwnerEmailHtml = (
  firstName: string,
  lastName: string,
  company: string,
  email: string,
  department: string,
  eventName: string,
  message: string,
) => `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); border: 1px solid #f3f4f6;">
    
    <!-- Header -->
    <div style="padding: 40px 40px 30px; text-align: center; background-color: #f0fdf4; border-bottom: 1px solid #bbf7d0;">
      <img src="${LOGO_URL}" alt="${COMPANY_NAME}" style="display: inline-block; margin: 0 auto 20px; max-width: 80px; height: auto;">
      <p style="margin: 0 0 8px 0; color: #16a34a; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;">New Contact Form Submission</p>
      <h2 style="margin: 0; color: #111827; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
        Someone reached out!
      </h2>
    </div>

    <!-- Data Grid -->
    <div style="padding: 40px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px; border-collapse: separate; border-spacing: 12px;">
        <tr>
          <td width="50%" style="padding: 20px; background-color: #f9fafb; border-radius: 16px; border: 1px solid #f3f4f6;">
            <p style="margin: 0; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Full Name</p>
            <p style="margin: 8px 0 0 0; font-size: 15px; color: #111827; font-weight: 500;">${firstName} ${lastName}</p>
          </td>
          <td width="50%" style="padding: 20px; background-color: #f9fafb; border-radius: 16px; border: 1px solid #f3f4f6;">
            <p style="margin: 0; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Email Address</p>
            <p style="margin: 8px 0 0 0; font-size: 15px;">
              <a href="mailto:${email}" style="color: #16a34a; text-decoration: none; font-weight: 500;">${email}</a>
            </p>
          </td>
        </tr>
        <tr>
          <td width="50%" style="padding: 20px; background-color: #f9fafb; border-radius: 16px; border: 1px solid #f3f4f6;">
            <p style="margin: 0; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Organization</p>
            <p style="margin: 8px 0 0 0; font-size: 15px; color: #111827; font-weight: 500;">${company || "<em>Not provided</em>"}</p>
          </td>
          <td width="50%" style="padding: 20px; background-color: #f9fafb; border-radius: 16px; border: 1px solid #f3f4f6;">
            <p style="margin: 0; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Regarding</p>
            <p style="margin: 8px 0 0 0; font-size: 15px; color: #111827; font-weight: 500;">${department}</p>
          </td>
        </tr>
        ${eventName ? `
        <tr>
          <td colspan="2" style="padding: 20px; background-color: #f0fdf4; border-radius: 16px; border: 1px solid #bbf7d0;">
            <p style="margin: 0; font-size: 11px; font-weight: 700; color: #15803d; text-transform: uppercase; letter-spacing: 1px;">Target Event</p>
            <p style="margin: 8px 0 0 0; font-size: 15px; color: #166534; font-weight: 600;">${eventName}</p>
          </td>
        </tr>
        ` : ''}
      </table>

      <!-- Message Block -->
      <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
        <p style="margin: 0 0 16px 0; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Message Content</p>
        <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
      
      <div style="margin-top: 32px; text-align: center;">
        <a href="mailto:${email}" style="display: inline-block; padding: 14px 28px; background-color: #22c55e; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; border-radius: 50px;">Reply to ${firstName}</a>
      </div>
    </div>

  </div>
</body>
</html>
`;

export const getAutoReplyHtml = (firstName: string, lang: string = "en") => {
  const baseLang = lang.split("-")[0];
  const t = autoReplyTranslations[baseLang] || autoReplyTranslations["en"];
  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 32px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05); border: 1px solid #f3f4f6;">
    
    <!-- Header -->
    <div style="padding: 40px; text-align: center;">
      <img src="${LOGO_URL}" alt="${COMPANY_NAME} Logo" width="100" style="display: inline-block; border: none; outline: none; margin-bottom: 24px;" />
      <h2 style="margin: 0; color: #111827; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">
        ${t.title}
      </h2>
    </div>

    <!-- Body -->
    <div style="padding: 0 48px 40px; text-align: center;">
      <p style="margin: 0 0 20px 0; color: #374151; font-size: 18px; font-weight: 600;">
        ${t.greeting} ${firstName},
      </p>
      
      <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 16px; line-height: 1.6;">
        ${t.body1}
      </p>
      
      <div style="background-color: #f0fdf4; border-radius: 20px; padding: 24px; margin-bottom: 32px;">
        <p style="margin: 0; color: #166534; font-size: 15px; line-height: 1.6;">
          ${t.body2}
        </p>
      </div>
      
      <p style="margin: 0; color: #6b7280; font-size: 15px; line-height: 1.6;">
        ${t.regards},<br/>
        <strong style="color: #111827;">The ${COMPANY_NAME} Team</strong>
      </p>
    </div>

    <!-- Footer -->
    <div style="background-color: #f9fafb; padding: 40px 48px; border-top: 1px solid #f3f4f6;">
      
      <!-- Links Grid -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
        <tr>
          <td valign="top" width="50%">
            <p style="margin: 0 0 16px 0; font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px;">${t.linksTitle}</p>
            <a href="${WEBSITE_URL}/about" style="display: block; color: #4b5563; text-decoration: none; font-size: 14px; font-weight: 500; margin-bottom: 12px;">${t.links.about}</a>
            <a href="${WEBSITE_URL}/events" style="display: block; color: #4b5563; text-decoration: none; font-size: 14px; font-weight: 500; margin-bottom: 12px;">${t.links.events}</a>
            <a href="${WEBSITE_URL}/contact" style="display: block; color: #4b5563; text-decoration: none; font-size: 14px; font-weight: 500;">${t.links.contact}</a>
          </td>
          <td valign="top" width="50%">
            <p style="margin: 0 0 16px 0; font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px;">${t.legalTitle}</p>
            <a href="${WEBSITE_URL}/privacy" style="display: block; color: #4b5563; text-decoration: none; font-size: 14px; font-weight: 500; margin-bottom: 12px;">${t.legal.privacy}</a>
            <a href="${WEBSITE_URL}/terms" style="display: block; color: #4b5563; text-decoration: none; font-size: 14px; font-weight: 500; margin-bottom: 12px;">${t.legal.terms}</a>
            <a href="${WEBSITE_URL}/cookie-policy" style="display: block; color: #4b5563; text-decoration: none; font-size: 14px; font-weight: 500;">${t.legal.cookie}</a>
          </td>
        </tr>
      </table>

      <!-- Copyright & Direct Contact -->
      <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; text-align: center;">
        <p style="margin: 0 0 8px 0; font-size: 13px; color: #6b7280;">
          ${t.contactTitle}: <a href="mailto:hello@itsjustroses.org" style="color: #16a34a; text-decoration: none; font-weight: 600;">hello@itsjustroses.org</a>
        </p>
        <p style="margin: 0; color: #9ca3af; font-size: 12px;">
          &copy; ${currentYear} ${COMPANY_NAME}. ${t.rightsReserved}
        </p>
      </div>

    </div>

  </div>
</body>
</html>
`;
};