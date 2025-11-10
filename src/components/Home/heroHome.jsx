import { ArrowRight } from "lucide-react";
import IIT from "../../images/IIT.png";

export function Button({
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles =
    "font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center";

  const variantStyles = {
    default: "bg-accent hover:bg-accent/90 text-accent-foreground",
    outline: "border border-border bg-transparent text-foreground hover:bg-muted",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return <button className={combinedClassName} {...props} />;
}

export function Hero() {
  return (
    <section className="relative w-screen h-[48rem] flex items-center lg:px-20 px-10 overflow-hidden">
      {/* Background Image */}
      <img
        src={IIT}
        alt="IIT Ropar"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Glow Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 ">
        <div className="grid gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-white">
            <div className="space-y-4">
              <h2 className="text-xl font-mono uppercase tracking-wider">
                40th International Conference
              </h2>
              <h1 className="text-5xl font-serif md:text-6xl font-bold">
                BioMANTHAN 2025
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Join industry leaders, innovators, and visionaries for three
                days of inspiring talks, hands-on workshops, and networking
                opportunities.
              </p>
            </div>

            {/* <div className="flex flex-col sm:flex-row  gap-4 pt-4">
              <Button size="lg" className="gap-2">
                Register Now <ArrowRight size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                Register
              </Button>
            </div> */}

            {/* Event Details */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/20">
              <div className="text-2xl">
                <p className=" text-white/60">Date</p>
                <p className="font-semibold ">Dec' 4–7, 2025</p>
              </div>
              <div className="text-2xl">
                <p className=" text-white/60">Location</p>
                <p className="font-semibold">IIT Ropar</p>
              </div>
            </div>
            <div className="text-2xl ">
              <p className="text-white/60">Workshop/Hands-on Training</p>
              <p>Dec' 3-4, 2025</p>
            </div>
          </div>

          {/* Right Visual Placeholder (optional) */}
          {/* <div className="hidden md:flex items-center justify-center">
            <div className="w-72 h-72 bg-orange-500/10 rounded-full flex items-center justify-center border border-white/20">
              <p className="text-white/70">Conference Highlights</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
