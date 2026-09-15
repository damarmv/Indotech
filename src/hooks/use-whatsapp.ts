'use client';

import { useState, useEffect } from 'react';

export function useWhatsApp() {
  const phone = "6283190433681";
  const message = "Halo Indonesia Technology, saya tertarik dengan layanan solusi sistem keamanan. Bisa bantu saya?";
  const [whatsappLink, setWhatsappLink] = useState(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const encodedMessage = encodeURIComponent(message);
    if (isMobile) {
      setWhatsappLink(`whatsapp://send?phone=${phone}&text=${encodedMessage}`);
    } else {
      setWhatsappLink(`https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`);
    }
  }, []);

  return whatsappLink;
}
