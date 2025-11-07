import { useState } from "react"
import david from "../plenaryspeakersImages/David.png"
import ralph from "../plenaryspeakersImages/Ralph.png"
import amit from "../plenaryspeakersImages/Amit.png"
import huinan from "../plenaryspeakersImages/Huinan.png"
import roger from "../plenaryspeakersImages/Roger.png"
import sanjeev from "../plenaryspeakersImages/Sanjeev.png"
import ashok from "../plenaryspeakersImages/Ashok.png"
import dhirendra from "../plenaryspeakersImages/Dhirendra.png"
import jitendra from "../plenaryspeakersImages/Jitendra.png"
import ketul from "../plenaryspeakersImages/Ketul.png"
import ashutosh from "../plenaryspeakersImages/Ashutosh.png"
import bikramjit from "../plenaryspeakersImages/Bikramjit.png"
import chandan from "../plenaryspeakersImages/Chandan.png"
import prashant from "../plenaryspeakersImages/Prashant.png"
import gilson from "../plenaryspeakersImages/Gilson.png"
import savyasachi from "../plenaryspeakersImages/Savyasachi.png"
import vinoy from "../plenaryspeakersImages/Vinoy.png"

const speakers = {
  plenary: [
    {
      name: "Prof. David B. Burr",
      title: "Professor",
      affiliation: "Indiana University, USA",
      image: david,
      category: "Keynote",
    },
    {
      name: "Prof. (Dr.) Ralph Müller",
      title: "Professor",
      affiliation: "ETH Zurich, Switzerland",
      image: ralph,
      category: "Keynote",
    },
    {
      name: "Prof. Amit Bandyopadhyay",
      title: "Chair, Professor",
      affiliation: "Washington State University, USA",
      image: amit,
      category: "Keynote",
    },
    {
      name: "Prof. Huinan Hannah Liu",
      title: "Professor",
      affiliation: "University of California at Riverside (UCR), USA",
      image: huinan,
      category: "Keynote",
    },
    {
      name: "Prof. Roger Jagdish Narayan",
      title: "Distinguished Professor of BME",
      affiliation: "NC State University, USA",
      image: roger,
      category: "Keynote",
    },
    {
      name: "Prof. Sanjeev Shroff",
      title: "Chair of Bioengineering",
      affiliation: "University of Pittsburgh, USA",
      image: sanjeev,
      category: "Keynote",
    },
    {
      name: "Prof. Ashok Kumar ",
      title: "Professor, President (SBAOI)",
      affiliation: "IIT Kanpur, India ",
      image: ashok,
      category: "Keynote",
    },
    {
      name: "Prof. Dhirendra S Katti",
      title: "Professor, President (STERMI), Director",
      affiliation: "IIT Goa, India",
      image: dhirendra,
      category: "Keynote",
    },
    {
      name: "Dr. Jitendra Sharma",
      title: "Professor",
      affiliation: "Managing Director, Founder, and CEO of AMTZ, India",
      image: jitendra,
      category: "Keynote",
    },
    {
      name: "Prof. Ketul C. Popat",
      title: "Chair , Professor",
      affiliation: "George Mason University, USA",
      image: ketul,
      category: "Keynote",
    },
    {
      name: "Prof. Ashutosh Khandha",
      title: "Professor ",
      affiliation: "University of Delaware, USAA",
      image: ashutosh,
      category: "Keynote",
    },
    {
      name: "Prof. Bikramjit Basu",
      title: " Professor",
      affiliation: "Director, CSIR-CGCRI",
      image: bikramjit,
      category: "Keynote",
    },
    {
      name: "Prof. Chandan K. Sen",
      title: "Professor, Asso. Vice Chancellor",
      affiliation: "University of Pittsburgh, USA",
      image: chandan,
      category: "Keynote",
    },
    {
      name: "Dr. Prashant N. Kumta",
      title: "Chair Professor",
      affiliation: "University of Pittsburgh, USA",
      image: prashant,
      category: "Keynote",
    },
    {
      name: "Prof. Gilson Khang",
      title: "Professor",
      affiliation: "Jeonbuk National University, Korea",
      image: gilson,
      category: "Keynote",
    },
    {
      name: "Prof. Savyasachi C. Thakkar",
      title: "Chair of Orthopaedic Surgery",
      affiliation: "Johns Hopkins University, USA",
      image: savyasachi,
      category: "Keynote",
    },
    {
      name: "Prof. Vinoy Thomas",
      title: "Professor",
      affiliation: "University of Alabama , USA",
      image: vinoy,
      category: "Keynote",
    },

  ],

  international: [
    {
      name: "Dr. Deepankar DeMazumder",
      title: "Researcher",
      affiliation: "University of Pittsburgh, USA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      category: "International",
    },
    {
      name: "Prof. Anamika Prasad",
      title: "Professor",
      affiliation: "Florida International University, USA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      category: "International",
    },
    {
      name: "Prof. Manishkumar Kumar",
      title: "Professor",
      affiliation: "University of Pittsburgh, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      category: "International",
    },
    {
      name: "Prof. Pranav Soman",
      title: "Professor",
      affiliation: "Syracuse University, USA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      category: "International",
    },
    {
      name: "Prof. Finosh G Thankam",
      title: "Researcher",
      affiliation: "University of Health Sciences, USA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      category: "International",
    },
    {
      name: "Dr. Binata Joddar",
      title: "Assistant Professor",
      affiliation: "Oregon State University, USA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      category: "International",
    },
    {
      name: "Prof. Sriya Srinivasan",
      title: "Professor",
      affiliation: "Kempier Institute, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      category: "International",
    },
    {
      name: "Prof. Mrinal Kanti Musib",
      title: "Professor",
      affiliation: "NUS, Singapore",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      category: "International",
    },
  ],

  national: [
    {
      name: "Prof. Shyam S. Sharma",
      title: "Professor & Head",
      affiliation: "NIPER, Mohali",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      category: "National",
    },
    {
      name: "Prof. Ashish Pal",
      title: "Scientist (Professor)",
      affiliation: "INST, Mohali",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      category: "National",
    },
    {
      name: "Dr. Ajay Tiljare",
      title: "Asso. Prof. Bioengineering",
      affiliation: "AICTE, India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      category: "National",
    },
    {
      name: "Prof. Ajay Kumar Rajpat",
      title: "Asso. Prof.",
      affiliation: "UPUMS, Safai, UP",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      category: "National",
    },
    {
      name: "Dr. Mukesh Dhanka",
      title: "Asso. Prof.",
      affiliation: "NIT, Raipur",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      category: "National",
    },
  ],
}

export default function Speakers() {
  const [hovered, setHovered] = useState(null)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800 selection:bg-indigo-200/60">

      <header className="text-center pt-20 pb-16">
          <span className="text-4xl lg:text-5xl font-serif">
            <span className="text-red-600">Spe</span>akers
          </span>
      </header>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="container mx-auto px-6 pb-24">
        <Section title="Plenary Speakers" gradient="from-indigo-600 to-blue-500">
          <Grid list={speakers.plenary} hovered={hovered} setHovered={setHovered} />
        </Section>

        <Section title="International Speakers" gradient="from-purple-500 to-pink-500">
          <Grid list={speakers.international} hovered={hovered} setHovered={setHovered} small />
        </Section>

        <Section title="National Speakers" gradient="from-orange-500 to-red-500">
          <Grid list={speakers.national} hovered={hovered} setHovered={setHovered} tiny />
        </Section>
      </div>
    </main>
  )
}

function Section({ title, gradient, children }) {
  return (
    <section className="mb-24 text-center">
      <h2 className={`text-3xl font-bold`}>
        {title}
      </h2>
      <div className="mx-auto w-28 h-[3px] rounded-full bg-gradient-to-r from-transparent via-slate-400/60 to-transparent my-6" />
      {children}
    </section>
  )
}

function Grid({ list, hovered, setHovered, small, tiny }) {
  return (
    <div className={`border py-10 px-10 rounded-2xl grid gap-6 ${tiny ? "md:grid-cols-5" : small ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
      {list.map((sp, i) => (
        <Card
          key={i}
          speaker={sp}
          index={i}
          active={hovered === i}
          setHovered={setHovered}
          delay={i * 0.1}
          size={tiny ? "tiny" : small ? "small" : "default"}
        />
      ))}
    </div>
  )
}

function Card({ speaker, index, active, setHovered, delay, size }) {
  const pad = size === "tiny" ? "p-3" : size === "small" ? "p-4" : "p-6"
  const img = size === "tiny" ? "w-16 h-16" : size === "small" ? "w-20 h-20" : "w-24 h-24"

  return (
    <div
      style={{ animation: `fadeInUp .55s ease-out ${delay}s both` }}
      className="border my-2 border-gray-400 mx-2  rounded-2xl group cursor-pointer"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className={`rounded-2xl ${pad} border border-slate-200 bg-white/80 backdrop-blur-lg shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${active ? "shadow-indigo-400/30 scale-[1.04]" : ""}`}>

        <div className={`relative ${img} mx-auto mb-4`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-300 to-pink-300 blur-lg opacity-0 group-hover:opacity-70 transition duration-500"></div>
          <img src={speaker.image} alt={speaker.name} className="rounded-full w-full h-full object-cover border border-slate-200 group-hover:border-slate-300 transition-all group-hover:scale-105" />
        </div>

        <h3 className="font-semibold text-slate-800 text-lg mb-1 group-hover:text-indigo-600 transition-all">
          {speaker.name}
        </h3>

        <p className="text-sm text-slate-500 mb-1">
          {speaker.title}
        </p>

        <p className="text-xs text-slate-400 group-hover:text-slate-600 transition-all line-clamp-2">
          {speaker.affiliation}
        </p>
      </div>
    </div>
  )
}
