 "use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

const fadeInUpDelayed = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  },
})

const heroStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <>
      {showIntro && (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: [1, 1, 1, 0], y: [-10, 0, -6, -80] }}
          transition={{ duration: 6, ease: [0.22, 1, 0.36, 1], times: [0, 0.45, 0.8, 1] }}
          onAnimationComplete={() => setShowIntro(false)}
        >
          <motion.div
            className="intro-overlay-inner"
            initial={{ scale: 0.96 }}
            animate={{ scale: [0.96, 1, 1.02, 1] }}
            transition={{ duration: 6, ease: "easeOut", times: [0, 0.35, 0.8, 1] }}
          >
            <img
              src="/Banque d_images/PIXaura-soft white.png"
              alt="Logo Pixaura"
              className="intro-logo"
            />
            <p className="intro-tagline">Marques ambitieuses. Lancement en approche.</p>
          </motion.div>
        </motion.div>
      )}
      <main className="page-root">
      <div className="page-shell">
        <div
          className="mouse-glow"
          style={{
            transform: `translate3d(${mousePos.x - 200}px, ${mousePos.y - 200}px, 0)`,
          }}
        />
        {/* HERO PRINCIPAL */}
        <motion.section
          className="hero-section"
          aria-labelledby="landing-title"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="hero-logo-wrap" aria-hidden="true">
            <img
              src="/Banque d_images/PIXaura-soft white.png"
              alt="Pixaura"
              className="hero-logo-img"
            />
          </div>
          
          <motion.div className="hero-inner" initial="hidden" animate="visible" variants={heroStagger}>
            <div className="hero-layout">
              <div className="hero-main">
                <motion.h1 id="landing-title" className="heading" variants={heroItem}>
                  <span>Bientôt en ligne.</span>
                  <span className="heading-strong">Et cette fois, ça va se voir…!</span>
                </motion.h1>

                <motion.div className="body-text" variants={heroItem}>
                  <p>Le temps de la mise en ligne approche…</p>
                  <p>Plus qu&apos;une agence, un nouveau regard sur vos ambitions.</p>
                  <p>
                    Un nouveau chapitre s&apos;écrit. Nous finalisons un lieu pensé pour vous exposer l&apos;écosystème
                    Pixaura, nos méthodes et la manière dont nous portons votre marque au niveau supérieur.
                  </p>
                </motion.div>

                <motion.div className="cta-row" variants={heroItem}>
                  <button
                    className="cta-button cta-button-primary"
                    type="button"
                    onClick={() => {
                      const el = document.getElementById("contact")
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                    }}
                  >
                    <span>Me prévenir au lancement</span>
                    <span className="cta-icon">↗</span>
                  </button>
                </motion.div>

                <motion.p className="sub-text" variants={heroItem}>
                  Réponse sous 48h pour toute demande urgente.
                </motion.p>
              </div>

            </div>

            <div className="marquee-shell" aria-hidden="true">
              <div className="marquee-track">
                <span>Branding & Identité</span>
                <span>Films de marque</span>
                <span>Teasers social-first</span>
                <span>Activations live</span>
                <span>Événements sportifs</span>
                <span>Social media</span>
                <span>Stratégie créative</span>
              </div>
              <div className="marquee-track marquee-track--ghost">
                <span>Branding & Identité</span>
                <span>Films de marque</span>
                <span>Teasers social-first</span>
                <span>Activations live</span>
                <span>Événements sportifs</span>
                <span>Social media</span>
                <span>Stratégie créative</span>
              </div>
            </div>
          </motion.div>

        </motion.section>
      </div>
    </main>
    </>
  )
}

