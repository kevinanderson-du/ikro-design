import { CONFIG } from "../data/config";

/* Link do WhatsApp com mensagem já preenchida.
   Passe um texto para personalizar por botão. */
export function linkWhatsapp(mensagem = CONFIG.whatsappMsg) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export function linkEmail(assunto = "Contato pelo site") {
  return `mailto:${CONFIG.email}?subject=${encodeURIComponent(assunto)}`;
}
