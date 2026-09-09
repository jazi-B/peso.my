export const siteConfig = {
  name: "Peso",
  fullName: "Peso Pest Solutions & Fumigation Defense",
  tagline: "Pest-Free Living, 100% Guaranteed",
  description: "Hospital-grade, eco-friendly pest control, fumigation and bio-security defense for residential homes, villas, commercial kitchens, and industrial warehouses.",
  contact: {
    email: "pesopestsolutions@gmail.com",
    phone: "+92 333 6218102",
    phoneDisplay: "+92 333 6218102",
    whatsapp: "+92 300 6886623",
    whatsappClean: "923006886623",
    facebook: "https://www.facebook.com/share/p/14ZMFqs3L4M/",
    emergencyHotline: "+92 300 6886623",
    operatingHours: "24/7 Rapid Emergency Dispatch Available",
    serviceAreas: ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Multan", "Faisalabad", "Nationwide"]
  },
  trustStats: [
    { value: "5,000+", label: "Properties Defended", icon: "home" },
    { value: "99.8%", label: "Eradication Success", icon: "verified" },
    { value: "0.0%", label: "Toxic Residue (Pet-Safe)", icon: "eco" },
    { value: "45 Mins", label: "Avg Dispatch Arrival", icon: "alarm_on" }
  ],
  services: [
    {
      id: "termite-control",
      title: "Termite Proofing & Colony Defense",
      shortDesc: "Subterranean termite colony interception, drilling & chemical barrier treatment.",
      details: "Advanced acoustic/thermal detection and deep soil sub-slab barrier injection. Destroys hidden queens and nests with a full 5-year anti-termite structural warranty.",
      warranty: "5-Year Guarantee",
      icon: "pest_control",
      image: "/images/termite.png",
      startingPrice: "Rs. 8,500",
      features: ["Non-repellent chemical barrier", "Sub-slab drilling & injection", "Queen colony termination", "Annual warranty inspection"]
    },
    {
      id: "fumigation",
      title: "Deep Fumigation & Thermal Fogging",
      shortDesc: "Total eradication for severe infestations in homes, warehouses & commercial buildings.",
      details: "High-density thermal fogging and ultra-low-volume (ULV) misting that penetrates cracks, false ceilings, and AC ducts with odorless eco-biocides.",
      warranty: "180-Day Guarantee",
      icon: "cloud",
      image: "/images/fumigation.png",
      startingPrice: "Rs. 6,000",
      features: ["ULV cold mist penetration", "Odorless bio-active formula", "Zero food/surface staining", "Safe 2 hours post-treatment"]
    },
    {
      id: "general-pest",
      title: "General Pest Control",
      shortDesc: "Comprehensive protection against cockroaches, ants, spiders, and household insects.",
      details: "Targeted gel-baiting and residual micro-barrier spraying targeting breeding nests and entry points without disrupting your daily routine.",
      warranty: "90-Day Guarantee",
      icon: "bug_report",
      image: "/images/general_pest.png",
      startingPrice: "Rs. 4,500",
      features: ["German & American roach gel", "Ant perimeter shield", "Child & pet safe bait stations", "Immediate 24h kill rate"]
    },
    {
      id: "rodent-control",
      title: "Rodent & Vector Elimination",
      shortDesc: "Humane removal and permanent exclusion of mice, rats, and roof vectors.",
      details: "Tamper-resistant bait stations, infrared runway mapping, ultrasonic deterrents, and structural entry-point sealing to prevent future reinvasion.",
      warranty: "120-Day Guarantee",
      icon: "pest_control_rodent",
      image: "/images/rodent.png",
      startingPrice: "Rs. 5,000",
      features: ["Tamper-proof lockable boxes", "Complete structural exclusion", "Carcass extraction service", "Hygienic sanitization"]
    },
    {
      id: "disinfection",
      title: "Medical-Grade Disinfectant & Sanitization",
      shortDesc: "Hospital-grade antimicrobial sterilization eliminating 99.99% of germs and pathogens.",
      details: "Certified broad-spectrum virucidal and bactericidal misting designed for clinics, corporate offices, daycare centers, and residences.",
      warranty: "Certified Safe",
      icon: "sanitizer",
      image: "/images/disinfectant.png",
      startingPrice: "Rs. 4,000",
      features: ["99.99% pathogen destruction", "WHO/EPA compliant compounds", "Zero corrosive chemicals", "Rapid 30-min re-entry"]
    }
  ],
  pestLibrary: [
    {
      name: "Subterranean Termites",
      scientific: "Coptotermes gestroi",
      risk: "CRITICAL",
      riskColor: "#ef4444",
      signs: "Mud shelter tubes on walls, hollow-sounding wooden doors, discarded wings near lights.",
      damage: "Structural woodwork destruction & foundation compromise.",
      solution: "Precision Termite Sub-Slab Injection & Colony Baiting.",
      icon: "pest_control"
    },
    {
      name: "German Cockroaches",
      scientific: "Blattella germanica",
      risk: "HIGH",
      riskColor: "#f59e0b",
      signs: "Pepper-like droppings in cabinets, musty odor in kitchen, nocturnal scurrying.",
      damage: "Salmonella, E. coli bacteria transmission & asthma triggers.",
      solution: "IGR Gel-Baiting & Crack-and-Crevice ULV Treatment.",
      icon: "bug_report"
    },
    {
      name: "Bed Bugs",
      scientific: "Cimex lectularius",
      risk: "HIGH",
      riskColor: "#f59e0b",
      signs: "Itchy linear bite clusters, rust-colored spots on mattresses, shed skins.",
      damage: "Severe sleep deprivation, allergic skin rashes, secondary infections.",
      solution: "Dual Thermal Steam + Residual Micro-Encapsulated Spray.",
      icon: "pest_control_rodent"
    },
    {
      name: "Roof Rats & House Mice",
      scientific: "Rattus rattus / Mus musculus",
      risk: "CRITICAL",
      riskColor: "#ef4444",
      signs: "Gnawed electrical wires, scratch sounds in ceiling, spindle-shaped droppings.",
      damage: "Electrical fire hazards, Leptospirosis, food contamination.",
      solution: "Tamper-Resistant Rodent Baiting & Entry Exclusion.",
      icon: "pest_control_rodent"
    },
    {
      name: "Aedes & Dengue Mosquitoes",
      scientific: "Aedes aegypti",
      risk: "HIGH",
      riskColor: "#f59e0b",
      signs: "Daytime biting, standing water breeding, high outdoor mosquito density.",
      damage: "Dengue fever, Chikungunya, and viral transmission.",
      solution: "Thermal Outdoor Fogging & Water Larvicide Treatment.",
      icon: "air"
    },
    {
      name: "Carpenter & Sugar Ants",
      scientific: "Camponotus / Monomorium",
      risk: "MODERATE",
      riskColor: "#10b981",
      signs: "Foraging trails along counters, sawdust-like frass near timber.",
      damage: "Food supply contamination and wood void nesting.",
      solution: "Protein/Sugar Slow-Acting Colony Elimination Baits.",
      icon: "pest_control"
    }
  ],
  teamMembers: [
    {
      name: "M. Jazib",
      title: "Managing Director & Operations Head",
      role: "Executive Leadership",
      experience: "12+ Years Experience",
      badge: "Govt Certified PCO",
      specialization: "Structural Defense & Large-Scale Fumigation Logistics",
      bio: "Spearheaded advanced urban pest management and industrial quarantine fumigation across residential communities and commercial logistics sectors.",
      specs: ["PCO License #MY-8924", "ISO 9001:2015 Safety Lead", "Large-Scale Project Director"],
      image: "/images/fumigation.png"
    },
    {
      name: "Dr. Farhan Tariq",
      title: "Chief Entomologist & Technical Director",
      role: "Science & Entomology",
      experience: "15+ Years Experience",
      badge: "Ph.D. Urban Entomology",
      specialization: "Bio-Rational Insecticides & Colony Interception",
      bio: "Oversees chemical formulation, eco-toxicity testing, and tailored chemical-free biological treatments for sensitive environments.",
      specs: ["Certified Entomologist", "EPA Chemical Safety Auditor", "Termite Colony Specialist"],
      image: "/images/termite.png"
    },
    {
      name: "Engr. Bilal Ahmed",
      title: "Senior Termite & Fumigation Specialist",
      role: "Field Operations",
      experience: "9+ Years Experience",
      badge: "Senior Master Tech",
      specialization: "Sub-Slab Barrier Injections & Infrared Scanning",
      bio: "Executed over 3,500+ successful termite and deep fumigation dispatches with a 99.8% first-visit eradication rate.",
      specs: ["Acoustic Sensor Certified", "ULV Thermal Fogging Master", "100% Background Checked"],
      image: "/images/general_pest.png"
    },
    {
      name: "Usman Raza",
      title: "Emergency Dispatch & Rapid Response Lead",
      role: "Tactical Response",
      experience: "7+ Years Experience",
      badge: "Rapid Response Unit",
      specialization: "24/7 Emergency Pest Containment & Commercial Audits",
      bio: "Coordinates rapid response fleets with average on-site arrival within 45 minutes across all metropolitan areas.",
      specs: ["HACCP Compliance Auditor", "Commercial Fleet Lead", "Emergency Field Specialist"],
      image: "/images/disinfectant.png"
    }
  ],
  faqs: [
    {
      q: "Are your pest control and fumigation chemicals safe for children and pets?",
      a: "Yes, 100%. We exclusively use odorless, government-approved bio-rational chemicals and gel baits formulated to target cold-blooded insect nervous systems while remaining non-toxic to humans, children, dogs, cats, and birds."
    },
    {
      q: "How fast can an emergency dispatch team arrive at my property?",
      a: "Our rapid dispatch units are on standby 24/7. In urban areas, our average response time is between 45 to 60 minutes from the moment you call or place an emergency booking."
    },
    {
      q: "Do I need to leave my house during or after the treatment?",
      a: "For General Pest Control (gel-baiting and targeted spraying), you can stay comfortably inside. For Deep Fumigation / Thermal Fogging, we recommend stepping out for 2 to 3 hours while the mist settles."
    },
    {
      q: "What does your 100% Satisfaction Warranty cover?",
      a: "If pests reappear within your warranty period (up to 5 years for Termites, 180 days for Fumigation, 90 days for General Pest), our technicians will return and re-treat your entire property completely free of charge."
    },
    {
      q: "How does the pricing work?",
      a: "Our pricing is transparent and based on property type and area size. You can use our Interactive Quote Calculator on the homepage to get an instant estimate with zero hidden fees."
    }
  ]
};
