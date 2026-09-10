import { WaitlistProvider } from './WaitlistContext.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import CoreProducts from './components/CoreProducts.jsx'
import Connector from './components/Connector.jsx'
import WhatCanYouDo from './components/WhatCanYouDo.jsx'
import WhyBuilding from './components/WhyBuilding.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Security from './components/Security.jsx'
import AfricaFirst from './components/AfricaFirst.jsx'
import EarlyAccess from './components/EarlyAccess.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <WaitlistProvider>
      <div className="font-sans text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
        >
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">
          <Hero />
          <CoreProducts />
          <Connector />
          <div className="relative z-10">
            <WhatCanYouDo />
            <WhyBuilding />
            <HowItWorks />
            <Security />
            <AfricaFirst />
            <EarlyAccess />
            <FAQ />
            <FinalCTA />
          </div>
        </main>
        <Footer />
      </div>
    </WaitlistProvider>
  )
}
