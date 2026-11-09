import emailjs from "@emailjs/browser";
import type { EmailJSResponseStatus } from "@emailjs/browser";

/* ------------------------------------------------------------------ */
/* EmailJS delivery                                                   */
/* ------------------------------------------------------------------ */

/* Service enquiry template (template_ietfrgi) — credentials from env. */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "service_o9a88tu";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "template_ietfrgi";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL ?? "";

/* Marketplace buy/sell template (template_j0x5vrv) — credentials provided. */
const MARKETPLACE_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_MARKETPLACE_SERVICE_ID ?? "service_o9a88tu";
const MARKETPLACE_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_MARKETPLACE_TEMPLATE_ID ?? "template_j0x5vrv";
const MARKETPLACE_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_MARKETPLACE_PUBLIC_KEY ?? "mKbH7pfGtE8I3NzAv";
const MARKETPLACE_TO_EMAIL =
  import.meta.env.VITE_EMAILJS_MARKETPLACE_TO_EMAIL ?? "shahzoonn@gmail.com";

/* Generic low-level sender. Re-inits EmailJS with the given public key so
   multiple templates / accounts can be used from the same page. */
export async function sendEmail({
  serviceId,
  templateId,
  publicKey,
  templateParams,
}: {
  serviceId: string;
  templateId: string;
  publicKey: string;
  templateParams: Record<string, string | File | Blob>;
}): Promise<void> {
  if (typeof window === "undefined") return;
  emailjs.init(publicKey);
  const response = (await emailjs.send(
    serviceId,
    templateId,
    templateParams,
  )) as EmailJSResponseStatus;

  if (response.status !== 200 && response.status !== 204) {
    throw new Error(`EmailJS failed (status ${response.status})`);
  }
}

/* ------------------------------------------------------------------ */
/* Service enquiry form                                               */
/* ------------------------------------------------------------------ */

export type EnquiryValues = {
  name: string;
  phone: string;
  email: string;
  service: string;
  propertyType?: string;
  preferredDate?: string;
  preferredTime?: string;
  message: string;
};

export async function sendEnquiryEmail(values: EnquiryValues): Promise<void> {
  if (!PUBLIC_KEY) {
    throw new Error("EmailJS public key is not configured.");
  }

  const templateParams: Record<string, string> = {
    from_name: values.name,
    phone: values.phone,
    from_email: values.email,
    service: values.service,
    property_type: values.propertyType ?? "Not specified",
    preferred_date: values.preferredDate ?? "Not specified",
    preferred_time: values.preferredTime ?? "Not specified",
    message: values.message,
    reply_to: values.email,
    to_email: TO_EMAIL,
  };

  await sendEmail({
    serviceId: SERVICE_ID,
    templateId: TEMPLATE_ID,
    publicKey: PUBLIC_KEY,
    templateParams,
  });
}

/* ------------------------------------------------------------------ */
/* Marketplace buy / sell form                                        */
/* ------------------------------------------------------------------ */

export type MarketplaceValues = {
  from_name: string;
  phone: string;
  category: string;
  condition: string;
  item: string;
  area: string;
  details: string;
};

export async function sendMarketplaceEmail(values: MarketplaceValues): Promise<void> {
  const templateParams: Record<string, string> = {
    from_name: values.from_name,
    phone: values.phone,
    category: values.category,
    condition: values.condition,
    item: values.item,
    area: values.area,
    details: values.details.replace(/\n/g, "<br>"),
    photo_1: "",
    photo_2: "",
    photo_3: "",
    photo_4: "",
  };

  await sendEmail({
    serviceId: MARKETPLACE_SERVICE_ID,
    templateId: MARKETPLACE_TEMPLATE_ID,
    publicKey: MARKETPLACE_PUBLIC_KEY,
    templateParams,
  });
}
