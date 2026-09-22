'use client'

import React, { useState } from 'react'
import { projectTypes, contactSchema, ContactFormData } from '../lib/validations/contact'
import Button from './ui/Button'

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    type: 'Bâtiment & Construction',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState<string>('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for field on change
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setServerMessage('')

    // Client-side Zod validation
    const validation = contactSchema.safeParse(formData)
    if (!validation.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {}
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message
        }
      })
      setErrors(fieldErrors)
      setStatus('error')
      setServerMessage('Veuillez corriger les informations signalées ci-dessous.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setServerMessage(
          'Votre demande a été transmise avec succès à notre direction technique. Un ingénieur vous contactera sous 24h.'
        )
        setFormData({
          name: '',
          phone: '',
          type: 'Bâtiment & Construction',
          message: '',
        })
      } else {
        setStatus('error')
        setServerMessage(
          'Une erreur est survenue lors de la transmission. Vous pouvez également nous contacter directement par téléphone ou WhatsApp.'
        )
      }
    } catch {
      setStatus('error')
      setServerMessage(
        'Impossible de contacter le serveur pour l’instant. Veuillez vérifier votre connexion ou joindre notre équipe par téléphone.'
      )
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold uppercase tracking-wider text-sand/80 mb-2"
        >
          Nom complet / Entreprise <span className="text-amber">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Ex. Jean-Luc Touré ou Société Civile"
          className={`w-full px-4 py-3.5 bg-panel/60 border text-sand placeholder:text-sand/30 rounded-sm transition-colors duration-200 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber ${
            errors.name ? 'border-red-500' : 'border-white/15'
          }`}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.name}</p>
        )}
      </div>

      {/* Phone / WhatsApp Input */}
      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-semibold uppercase tracking-wider text-sand/80 mb-2"
        >
          Numéro de téléphone / WhatsApp <span className="text-amber">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="+225 07 00 00 00 00"
          className={`w-full px-4 py-3.5 bg-panel/60 border text-sand placeholder:text-sand/30 rounded-sm transition-colors duration-200 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber ${
            errors.phone ? 'border-red-500' : 'border-white/15'
          }`}
        />
        {errors.phone && (
          <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.phone}</p>
        )}
      </div>

      {/* Project Type Select */}
      <div>
        <label
          htmlFor="type"
          className="block text-xs font-semibold uppercase tracking-wider text-sand/80 mb-2"
        >
          Type de projet envisagé <span className="text-amber">*</span>
        </label>
        <div className="relative">
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-[#1C2921] border border-white/15 text-sand rounded-sm appearance-none transition-colors duration-200 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber cursor-pointer"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-[#14201B] text-sand py-2">
                {type}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-amber">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {errors.type && (
          <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.type}</p>
        )}
      </div>

      {/* Message Textarea */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold uppercase tracking-wider text-sand/80 mb-2"
        >
          Description de votre besoin / Localisation du site <span className="text-amber">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Ex. Construction d’une villa R+1 à Bingerville sur terrain de 600m² avec besoin de forage d’eau potable..."
          className={`w-full px-4 py-3.5 bg-panel/60 border text-sand placeholder:text-sand/30 rounded-sm transition-colors duration-200 focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber ${
            errors.message ? 'border-red-500' : 'border-white/15'
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.message}</p>
        )}
      </div>

      {/* Submit Button & Interactive Feedback Status */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          showArrow={status !== 'loading'}
          disabled={status === 'loading'}
          className="w-full sm:w-auto"
        >
          {status === 'loading' ? 'Transmission en cours...' : 'ENVOYER MA DEMANDE →'}
        </Button>
      </div>

      {/* Notification banners for success and error states */}
      {status === 'success' && (
        <div className="p-4 rounded-sm bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-sm flex items-start gap-3">
          <span className="text-emerald-400 text-lg">✓</span>
          <p className="leading-relaxed">{serverMessage}</p>
        </div>
      )}

      {status === 'error' && serverMessage && (
        <div className="p-4 rounded-sm bg-red-950/60 border border-red-500/50 text-red-200 text-sm flex items-start gap-3">
          <span className="text-red-400 text-lg">⚠</span>
          <p className="leading-relaxed">{serverMessage}</p>
        </div>
      )}
    </form>
  )
}
