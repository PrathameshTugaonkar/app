import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                DPR Infra Projects Private Limited
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                DPR Infra stands as India's pioneering technological-infrastructure solutions provider, revolutionizing the construction ecosystem through a holistic, digitally-augmented approach. Our innovative paradigm transforms traditional construction methodologies by integrating cutting-edge technological infrastructure with comprehensive project management strategies. </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href={`https://wa.me/+919849009744?text=Hi, I want to get in touch with you!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 flex items-center gap-2"
                  >
                    <FaWhatsapp size={20} /> {/* WhatsApp Icon */}
                    Contact us via WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Gradient that suggests architectural blueprint */}
              <linearGradient id="blueprint-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0.1"/>
              </linearGradient>
              
              {/* Architectural grid pattern */}
              <pattern id="construction-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path 
                  d="M0 0 L30 0 L30 30 L0 30 Z" 
                  fill="none" 
                  stroke="#4A6CF7" 
                  strokeWidth="1" 
                  strokeOpacity="0.2"
                />
                <line x1="0" y1="0" x2="30" y2="30" stroke="#4A6CF7" strokeWidth="1" strokeOpacity="0.2"/>
                <line x1="30" y1="0" x2="0" y2="30" stroke="#4A6CF7" strokeWidth="1" strokeOpacity="0.2"/>
              </pattern>
              
              {/* Structural gradient */}
              <linearGradient id="structure-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0.2"/>
              </linearGradient>
            </defs>
            
            {/* Background grid */}
            <rect width="450" height="556" fill="url(#construction-grid)" opacity="0.5"/>
            
            {/* Prominent structural shapes */}
            <path 
              d="M50 100 L225 30 L400 100 L350 250 L125 300 Z" 
              fill="url(#structure-gradient)" 
              opacity="0.4"
            />
            
            {/* Large geometric shapes suggesting infrastructure */}
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#blueprint-gradient)"
              opacity="0.3"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              fill="url(#blueprint-gradient)"
              opacity="0.2"
              transform="rotate(-37.6852 325.486 302.87)"
            />
            
            {/* Prominent structural lines */}
            <line 
              x1="0" 
              y1="200" 
              x2="450" 
              y2="200" 
              stroke="#4A6CF7" 
              strokeWidth="2" 
              strokeOpacity="0.3"
            />
            <line 
              x1="0" 
              y1="400" 
              x2="450" 
              y2="400" 
              stroke="#4A6CF7" 
              strokeWidth="2" 
              strokeOpacity="0.3"
            />
            
            {/* Architectural wireframe elements */}
            <polyline 
              points="50,500 150,400 250,500 350,400 450,500" 
              fill="none" 
              stroke="#4A6CF7" 
              strokeWidth="1.5" 
              strokeOpacity="0.2"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="infrastructure-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A6CF7" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#4A6CF7" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
            
            {/* More pronounced infrastructure curves */}
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#infrastructure-gradient)"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#infrastructure-gradient)"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
            />
            
            {/* Prominent blueprint-like geometric shape */}
            <polygon
              points="50,50 314,100 200,150"
              fill="url(#infrastructure-gradient)"
              opacity="0.4"
            />
            
            {/* Technical annotation-like elements */}
            <text 
              x="180" 
              y="50" 
              fill="#4A6CF7" 
              fontFamily="monospace" 
              fontSize="12" 
              opacity="0.3"
            >
              INFRASTRUCTURE
            </text>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;