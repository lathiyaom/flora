import { brand } from "@/data/brand";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${brand.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export function collectionInquiry(name: string): string {
  return whatsappUrl(`Hi! I want to learn more about the '${name}' collection.`);
}

export function commissionInquiry(name: string): string {
  return whatsappUrl(`Hi! I want to start a custom order for '${name}'.`);
}

export function galleryInquiry(name: string, src: string): string {
  return whatsappUrl(`Hi! I am interested in this piece: '${name}' (${src})`);
}

export function corporateInquiry(fields: {
  name: string;
  email: string;
  occasion: string;
  quantity: string;
  message: string;
}): string {
  const body = [
    "Corporate / bulk enquiry",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Occasion: ${fields.occasion}`,
    `Quantity: ${fields.quantity}`,
    `Message: ${fields.message}`
  ].join("\n");
  return whatsappUrl(body);
}