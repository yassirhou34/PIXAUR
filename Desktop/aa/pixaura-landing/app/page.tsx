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

              <aside className="hero-preview" aria-label="Aperçu de l&apos;univers Pixaura">
                <div className="hero-preview-header">
                  <span>marques ambitieuses</span>
                  <span className="hero-preview-chip">
                    <span className="hero-preview-dot" />
                    scène 01
                  </span>
                </div>
                <div className="hero-preview-title">
                  <span>marques</span>
                  <span className="hero-preview-title-strong">ambitieuses</span>
                </div>
                <p className="hero-preview-tagline">film • social • activation</p>
                <p className="bottom-item-text">
                  Un halo cinématographique, des volumes de lumière violette et bleue, un regard assumé sur les marques
                  qui veulent se faire remarquer.
                </p>
                <div className="hero-preview-footer">
                  <span className="hero-preview-badge">écosystème pixaura</span>
                  <span className="hero-preview-pill">
                    <span className="hero-preview-pill-dot" />
                    Enregistrement des premiers spectateurs
                  </span>
                </div>
              </aside>
            </div>

            <div className="bottom-strip" aria-label="Aperçu du futur site Pixaura">
              <div>
                <p className="bottom-item-label">Branding & territoire</p>
                <p className="bottom-item-text">
                  Un espace pensé pour aligner identité, ton, motion et contenus, afin de donner une aura cohérente à
                  chaque prise de parole.
                </p>
              </div>
              <div>
                <p className="bottom-item-label">Production vidéo</p>
                <p className="bottom-item-text">
                  Teasers, films de marque, capsules social-first : le site dévoilera un portfolio intégral, du concept
                  à la diffusion.
                </p>
              </div>
              <div>
                <p className="bottom-item-label">Activation digitale</p>
                <p className="bottom-item-text">
                  Un guichet unique pour orchestrer campagnes, tunnels d&apos;acquisition et expériences live, en France
                  et à l&apos;international.
                </p>
              </div>
            </div>

            <p className="tiny-caption">
              Cette page est indépendante du site principal Pixaura et sert de teaser dédié avant le lancement officiel.
            </p>

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

          <div className="scroll-indicator" aria-hidden="true">
            <span className="scroll-indicator-line" />
            <span className="scroll-indicator-label">Scroll</span>
          </div>
        </motion.section>

        {/* SECTION 2 */}
        <motion.section
          className="section-grid"
          aria-label="Ce que vous découvrirez sur le site"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
        >
          <div className="section-title-block">
            <h2 className="section-title">Ce que le site va révéler</h2>
            <p className="section-subtitle">
              Une scène centrale où découvrir, en un seul lieu, comment l&apos;écosystème Pixaura fait grandir les
              marques ambitieuses&nbsp;: de la première idée jusqu&apos;aux résultats concrets.
            </p>
          </div>
          <div className="section-cards">
            <motion.article
              className="section-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUpDelayed(0.05)}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3>Films & teasers</h3>
              <p>
                Séquences cinématographiques, teasers social-first et formats ultra courts pensés pour capter l&apos;œil
                dès la première seconde sur vos canaux clés.
              </p>
            </motion.article>
            <motion.article
              className="section-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUpDelayed(0.15)}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3>Études de cas</h3>
              <p>
                Du brief aux performances&nbsp;: des cas concrets qui détaillent objectifs, dispositifs créatifs,
                diffusion et résultats obtenus pour chaque marque.
              </p>
            </motion.article>
            <motion.article
              className="section-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUpDelayed(0.25)}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <h3>Parcours d&apos;accompagnement</h3>
              <p>
                Comment nous embarquons vos équipes, vos partenaires et vos audiences dans un même récit de marque,
                en France et à l&apos;international, avant, pendant et après vos lancements.
              </p>
            </motion.article>
          </div>
        </motion.section>

        {/* SECTION 3 */}
        <motion.section
          className="section-timeline"
          aria-label="Timeline de lancement"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">Avant le décollage</h2>
          <div className="timeline">
            <motion.div
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUpDelayed(0.05)}
              whileHover={{ y: -4 }}
            >
              <div className="timeline-badge">Étape 01</div>
              <div className="timeline-content">
                <h3>Cadrage du lancement</h3>
                <p>
                  Sélection des marques pilotes, définition des enjeux de visibilité et construction du parcours
                  de lancement avec l&apos;équipe Pixaura.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUpDelayed(0.15)}
              whileHover={{ y: -4 }}
            >
              <div className="timeline-badge">Étape 02</div>
              <div className="timeline-content">
                <h3>Production & teasers</h3>
                <p>
                  Création des films, capsules social-first et assets de lancement, puis diffusion progressive des
                  premiers teasers autour de votre marque.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUpDelayed(0.25)}
              whileHover={{ y: -4 }}
            >
              <div className="timeline-badge">Étape 03</div>
              <div className="timeline-content">
                <h3>Mise en ligne & amplification</h3>
                <p>
                  Lancement public de l&apos;écosystème Pixaura, activation des campagnes et suivi des performances
                  pour nourrir les prochaines prises de parole.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* SECTION 4 */}
        <motion.section
          id="contact"
          className="section-bottom-cta"
          aria-label="Contact rapide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
        >
          <div className="bottom-cta-text">
            <h2>Prendre une longueur d&apos;avance sur votre lancement</h2>
            <p>
              Partagez-nous votre e-mail professionnel et quelques lignes sur votre projet. L&apos;équipe Pixaura revient
              vers vous sous 48h pour imaginer ensemble votre prochaine mise en lumière.
            </p>
            <ul className="contact-highlights">
              <li>Un échange exploratoire pour comprendre vos enjeux de visibilité.</li>
              <li>Des premières idées d&apos;angles, de formats et de timing de lancement.</li>
              <li>Un plan de suite clair : étapes, délais et prochaines décisions.</li>
            </ul>
          </div>
          <form
            className="form form-inline"
            onSubmit={(event) => {
              event.preventDefault()
            }}
          >
            <input
              className="input"
              type="email"
              name="email-bottom"
              placeholder="Votre e-mail professionnel"
              required
            />
            <button className="submit" type="submit">
              <span>Envoyer</span>
            </button>
          </form>
        </motion.section>
      </div>
    </main>
    </>
  )
}

