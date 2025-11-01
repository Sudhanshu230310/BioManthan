import { EventGrid } from "./collageImagesHome";
import { Hero } from "./heroHome";

import HomeSpeakers from "./homePageSpeakers";
import ImportantUp from "./importantHome";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="">
        <HomeSpeakers />
      </div>
      <div className="min-h-screen">
        <div className="flex flex-col bg-gradient-to-br from-white to-blue-200 pt-20 pb-20 lg:flex-row min-h-screen">
          <div className="w-full lg:w-1/2 bg-card">
            <EventGrid />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center py-2 px-8 lg:px-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  <span className="text-blue-600"> Bio</span>MANTHAN 2025
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  BioMANTHAN 2025 — the 40th International Conference on
                  Biomaterials, 3D Bioprinting, Biomechanics, Medical Devices,
                  Imaging, Tissue Engineering, AI in Healthcare, Ayurveda,
                  Naturopathy, and Nutrition — will be held at the Indian
                  Institute of Technology (IIT) Ropar from December 4–7, 2025.
                  Organized in collaboration with SBAOI and STERMI, this year’s
                  theme “Innovation for Health” highlights the bridge between
                  scientific discovery and real-world healthcare. The conference
                  will feature plenary and keynote lectures, scientific and
                  poster sessions, industry and clinician talks, and career
                  opportunities for young researchers. Set against the scenic
                  backdrop of the Satluj River, IIT Ropar offers an inspiring
                  venue for collaboration and innovation. Join us for an
                  engaging and impactful gathering of global experts,
                  scientists, clinicians, and industry leaders shaping the
                  future of healthcare.
                </p>
              </div>

              <div className="space-y-4">
                <button className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-2xl hover:scale-105 transition-all duration-100 text-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br py-10 from-white to-blue-200">
          <ImportantUp />
        </div>
      </div>
    </>
  );
}
