import React from "react";

function WhatsAppButton() {
  const phoneNumber = "917876783042";

  const message =
    "Hi Nishant, I came across your portfolio and would like to connect.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Nishant on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        sm:bottom-8
        sm:right-8
        z-50
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        shadow-lg
        hover:scale-110
        active:scale-95
        transition-transform
        duration-300
      "
    >
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.001 3C8.832 3 3 8.832 3 16c0 2.295.6 4.536 1.74 6.51L3 29l6.68-1.71A12.94 12.94 0 0016 29c7.168 0 13-5.832 13-13S23.169 3 16.001 3zm0 23.66a10.6 10.6 0 01-5.4-1.48l-.387-.23-3.965 1.015 1.06-3.86-.252-.398A10.57 10.57 0 015.4 16C5.4 10.146 10.146 5.4 16 5.4S26.6 10.146 26.6 16 21.854 26.66 16.001 26.66zm5.814-7.91c-.318-.16-1.885-.93-2.177-1.036-.292-.106-.505-.16-.718.16-.212.318-.824 1.035-1.01 1.247-.185.213-.371.24-.69.08-.318-.16-1.344-.495-2.56-1.58-.946-.844-1.584-1.885-1.77-2.203-.185-.318-.02-.49.14-.648.144-.143.318-.371.478-.557.16-.186.212-.318.318-.53.106-.213.053-.398-.027-.558-.08-.16-.717-1.726-.983-2.362-.26-.62-.523-.536-.718-.546l-.61-.01c-.212 0-.557.08-.85.398-.292.318-1.116 1.09-1.116 2.656 0 1.566 1.143 3.08 1.302 3.293.16.212 2.25 3.435 5.45 4.817.76.328 1.353.523 1.815.67.763.243 1.457.209 2.006.127.612-.091 1.885-.77 2.151-1.514.265-.744.265-1.382.185-1.514-.08-.133-.292-.212-.61-.371z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;