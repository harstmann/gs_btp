import React from 'react'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import ExpertiseSection from '../components/sections/ExpertiseSection'
import ApproachSection from '../components/sections/ApproachSection'
import WhyUs from '../components/sections/WhyUs'
import RealEstate from '../components/sections/RealEstate'
import ProjectsGallery from '../components/sections/ProjectsGallery'
import CTASection from '../components/sections/CTASection'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <>
      {/* 01. Cinematic Architectural Hero */}
      <Hero />

      {/* 02. Measured Technical Key Figures */}
      <Stats />

      {/* 03. Asymmetric Editorial Expertises */}
      <ExpertiseSection />

      {/* 04. Single Partner Integrated Blueprint Workflow */}
      <ApproachSection />

      {/* 05. The Pillars of Excellence & Local Expertise */}
      <WhyUs />

      {/* 06. Distinct Light-Stone Real Estate & Secure Land Showcase */}
      <RealEstate />

      {/* 07. Architectural Portfolio Gallery */}
      <ProjectsGallery />

      {/* 08. Immersive Transition to Consultation */}
      <CTASection />

      {/* 09. Structured Engineering Contact & Quote Form */}
      <ContactSection />
    </>
  )
}
