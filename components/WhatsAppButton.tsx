'use client'

import React from 'react'

export default function WhatsAppButton() {
  const phoneNumber = '2250749096572'
  const defaultMessage = encodeURIComponent(
    'Bonjour G.S.BTP, je souhaite des informations concernant un projet de construction / immobilier à Abidjan.'
  )
  const href = `https://wa.me/${phoneNumber}?text=${defaultMessage}`

  return (
    <aside aria-label="Assistance directe WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter G.S.BTP directement sur WhatsApp au +225 07 49 09 65 72"
        className="group flex items-center bg-deep-green border border-amber/50 text-sand shadow-2xl hover:border-amber rounded-full p-3.5 sm:px-4 sm:py-3 transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
      >
        {/* WhatsApp Vector Icon */}
        <div className="relative flex items-center justify-center flex-shrink-0">
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-deep-green" />
          <svg
            className="w-5 h-5 text-amber group-hover:text-emerald-400 transition-colors"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.86.51 3.606 1.402 5.115L2.1 21.9l4.908-1.282A9.957 9.957 0 0 0 12.004 22c5.524 0 10.004-4.48 10.004-9.996C22.008 6.48 17.528 2 12.004 2zm5.727 14.175c-.24.672-1.392 1.284-1.92 1.344-.504.06-1.152.084-3.708-.96-3.264-1.332-5.352-4.668-5.52-4.884-.156-.216-1.308-1.74-1.308-3.324 0-1.584.828-2.364 1.116-2.676.288-.312.636-.384.852-.384.216 0 .432.002.624.012.204.01.48-.077.744.564.288.696.972 2.376 1.056 2.544.084.168.144.372.024.588-.108.228-.168.372-.336.564-.168.204-.36.444-.516.6-.168.156-.348.324-.144.672.204.348.9 1.488 1.944 2.412 1.332 1.188 2.46 1.56 2.808 1.728.348.168.552.144.756-.096.204-.24.876-1.02 1.116-1.368.24-.348.48-.288.804-.168.324.12 2.052.972 2.4 1.152.348.168.576.252.66.396.084.144.084.84-.156 1.512z" />
          </svg>
        </div>

        {/* Text on Desktop with subtle expansion */}
        <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold tracking-wider text-sand ml-0 group-hover:ml-2.5">
          Échanger sur WhatsApp
        </span>
      </a>
    </aside>
  )
}
