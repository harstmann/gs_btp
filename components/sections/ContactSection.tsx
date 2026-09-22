'use client'

import React, { useState } from 'react'
import Button from '../ui/Button'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nom: '', email: '', tel: '', sujet: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-white border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Info panel */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber/10 border border-amber/25 text-amber font-bold text-xs tracking-wider uppercase mb-4">
              Contactez-nous
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-deep-green mb-3">
              Votre projet mérite{' '}
              <span className="italic font-normal text-amber">une expertise sérieuse.</span>
            </h2>
            <p className="text-sm text-surface-500 leading-relaxed mb-8">
              Envoyez-nous vos éléments. Un ingénieur G.S.BTP vous répond sous 24 heures avec une première estimation chiffrée.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📍', label: 'Adresse', value: "Cocody Riviera Palmeraie, Abidjan – Côte d'Ivoire" },
                { icon: '📞', label: 'Téléphone', value: '+225 07 49 09 65 72' },
                { icon: '✉️', label: 'Email', value: 'contact@gsbtp-ci.com' },
                { icon: '🕐', label: 'Horaires', value: 'Lun–Sam : 08h00–18h30' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-surface-50 border border-surface-200 hover:border-amber/30 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-white border border-surface-200 flex items-center justify-center shrink-0 shadow-card-subtle text-base">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-deep-green">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantees */}
            <div className="mt-8 p-5 rounded-xl bg-deep-green text-white border border-amber/20">
              <h4 className="font-bold text-sm text-amber uppercase tracking-wider mb-3">Nos garanties</h4>
              <div className="space-y-2">
                {['Garantie décennale sur toutes nos constructions', 'Délais contractuels respectés', 'Pas de sous-traitance non supervisée', 'Reporting chantier hebdomadaire'].map(g => (
                  <div key={g} className="flex items-center gap-2 text-xs text-white/80">
                    <span className="text-amber">✓</span>
                    {g}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-50 rounded-xl border border-surface-200 shadow-card-subtle p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-3xl">✓</div>
                  <h3 className="font-serif font-bold text-2xl text-deep-green mb-2">Message envoyé</h3>
                  <p className="text-sm text-surface-500 max-w-xs">Un ingénieur G.S.BTP vous contactera dans les 24 heures.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-xs text-amber font-bold underline">Envoyer un autre message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="text-center mb-6">
                    <h3 className="font-serif font-bold text-xl text-deep-green">Demande de devis ou d&apos;étude</h3>
                    <p className="text-xs text-surface-500 mt-1">Réponse sous 24h garanti · Première consultation gratuite</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-nom" className="block text-xs font-bold text-deep-green mb-1.5">Nom complet *</label>
                      <input
                        id="contact-nom" name="nom" type="text" required
                        placeholder="Koua Jean-Baptiste"
                        value={form.nom} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-surface-200 text-sm text-deep-green placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-tel" className="block text-xs font-bold text-deep-green mb-1.5">Téléphone *</label>
                      <input
                        id="contact-tel" name="tel" type="tel" required
                        placeholder="+225 07 xx xx xx xx"
                        value={form.tel} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white border border-surface-200 text-sm text-deep-green placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-deep-green mb-1.5">Email</label>
                    <input
                      id="contact-email" name="email" type="email"
                      placeholder="vous@email.com"
                      value={form.email} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-surface-200 text-sm text-deep-green placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-sujet" className="block text-xs font-bold text-deep-green mb-1.5">Sujet de votre demande *</label>
                    <select
                      id="contact-sujet" name="sujet" required
                      value={form.sujet} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-surface-200 text-sm text-deep-green focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition"
                    >
                      <option value="">Sélectionnez un domaine…</option>
                      <option>Construction de villa ou maison</option>
                      <option>Immeuble résidentiel ou commercial</option>
                      <option>Génie civil & voirie</option>
                      <option>Forage hydraulique</option>
                      <option>Acquisition foncière</option>
                      <option>Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-deep-green mb-1.5">Description du projet *</label>
                    <textarea
                      id="contact-message" name="message" required rows={5}
                      placeholder="Décrivez votre projet : localisation, superficie souhaitée, délai, budget indicatif…"
                      value={form.message} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-surface-200 text-sm text-deep-green placeholder-surface-400 resize-none focus:outline-none focus:ring-2 focus:ring-amber/50 focus:border-amber transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber hover:bg-amber-dark text-white font-bold text-sm transition-colors shadow-sm"
                  >
                    Envoyer ma demande
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
