import { motion } from "framer-motion"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

const primarySponsors = [
  {
    id: "icmr",
    name: "Indian Council of Medical Research",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0v0582Y99VdAFl5xpsKRlG9mZrCkv.png",
    description: "Serving the nation since 1911",
  },
  {
    id: "dbt",
    name: "Department of Biotechnology",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0v0582Y99VdAFl5xpsKRlG9mZrCkv.png",
    description: "Government of India",
  },
  {
    id: "anrf",
    name: "Anusandhan National Research Foundation",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0v0582Y99VdAFl5xpsKRlG9mZrCkv.png",
    description: "Research & Innovation",
  },
]

export const goldSponsors = [
  {
    id: "industron",
    name: "INDUSTRON",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0v0582Y99VdAFl5xpsKRlG9mZrCkv.png",
    description: "Industrial Solutions Partner",
  },
  {
    id: "alfatek",
    name: "ALFATEK",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0v0582Y99VdAFl5xpsKRlG9mZrCkv.png",
    description: "Technology Excellence",
  },
]

const silverSponsors = [
  {
    id: "scanco",
    name: "SCANCO MEDICAL",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0v0582Y99VdAFl5xpsKRlG9mZrCkv.png",
    description: "Medical Technology",
  },
  {
    id: "spranktronics",
    name: "SPRANKTRONICS",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0v0582Y99VdAFl5xpsKRlG9mZrCkv.png",
    description: "Electronics & Automation",
  },
  {
    id: "pyro",
    name: "PYRO DYNAMICS",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0v0582Y99VdAFl5xpsKRlG9mZrCkv.png",
    description: "Innovation Partners",
  },
  {
    id: "acs",
    name: "ACS Publications",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0v0582Y99VdAFl5xpsKRlG9mZrCkv.png",
    description: "Scientific Publishing",
  },
  {
    id: "awadh",
    name: "AWaDH IIT Ropar-TIF",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0v0582Y99VdAFl5xpsKRlG9mZrCkv.png",
    description: "Academic Excellence",
  },
  {
    id: "rsc",
    name: "Royal Society of Chemistry",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-L0v0582Y99VdAFl5xpsKRlG9mZrCkv.png",
    description: "Chemistry & Science",
  },
]

function SponsorCard({ sponsor, tier }) {
  const [isHovered, setIsHovered] = useState(false)

  const tierStyles = {
    primary: {
      container: "bg-white border-slate-200",
      hover: "hover:border-slate-400 hover:shadow-xl",
      glow: "group-hover:shadow-slate-200/50",
    },
    gold: {
      container: "bg-gradient-to-br from-amber-50 to-white border-amber-200",
      hover: "hover:border-amber-400 hover:shadow-amber-100/50",
      glow: "group-hover:shadow-amber-200/50",
    },
    silver: {
      container: "bg-white border-slate-100",
      hover: "hover:border-slate-300 hover:shadow-lg",
      glow: "group-hover:shadow-slate-100/50",
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div
        className={`relative p-8 rounded-xl border ${tierStyles[tier].container} ${tierStyles[tier].hover} transition-all duration-300`}
      >
        <motion.div
          animate={isHovered ? { opacity: 1, scale: 1.05 } : { opacity: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl -z-10 blur-lg"
        />

        <div className="h-20 md:h-24 flex items-center justify-center mb-4">
          <motion.img
            src={sponsor.logo}
            alt={sponsor.name}
            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <h3 className="text-center font-semibold text-foreground text-sm md:text-base truncate">
          {sponsor.name}
        </h3>

        {sponsor.description && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-muted-foreground text-center mt-2 overflow-hidden"
          >
            {sponsor.description}
          </motion.p>
        )}

        {isHovered && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 300, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl pointer-events-none"
          />
        )}
      </div>
    </motion.div>
  )
}

function SponsorTier({ title, sponsors, tier, layout }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const tierStyles = {
    primary: "from-slate-50 to-background",
    gold: "from-amber-50/50 to-background",
    silver: "from-slate-100/30 to-background",
  }

  const titleColors = {
    primary: "from-slate-900 to-slate-700",
    gold: "from-amber-700 to-amber-600",
    silver: "from-slate-700 to-slate-600",
  }

  return (
    <section ref={ref} className={`pt-10 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl mb-3  bg-clip-text text-transparent bg-gradient-to-r from-red-800 from-50% to-black font-serif`}
          >
            {title}
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 100 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`h-1 mx-auto rounded-full ${
              tier === "primary"
                ? "bg-slate-400"
                : tier === "gold"
                ? "bg-amber-400"
                : "bg-slate-300"
            }`}
          />
        </motion.div>

        <motion.div
          className={layout}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} tier={tier} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function SponsorsPage() {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen border-t pb-16 border-gray-500 bg-gradient-to-br from-background via-background to-slate-50">
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative pt-20 pb-16 text-center"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          />
        </div>

        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="relative z-10 text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
            <span className="text-red-600 font-serif">Our{" "}</span>
          <span className="">
            Sponsors
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
          className="relative z-10 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Proudly supported by leading organizations and institutions
        </motion.p>
      </motion.div>

      {/* Primary Sponsors */}
      <SponsorTier
        title="Featured Partners"
        sponsors={primarySponsors}
        tier="primary"
        layout="flex justify-center items-center gap-12 flex-wrap"
      />

      {/* Gold Sponsors */}
      <SponsorTier
        title="Gold Sponsors"
        sponsors={goldSponsors}
        tier="gold"
        layout="grid grid-cols-1 md:grid-cols-2 gap-8"
      />

      {/* Silver Sponsors */}
      {/* <SponsorTier
        title="Silver Sponsors"
        sponsors={silverSponsors}
        tier="silver"
        layout="grid grid-cols-1 md:grid-cols-3 gap-6"
      /> */}
    </div>
  )
}
