export type PriceItem = { icon: string; name: string; desc: string; price: string };

export const priceList: { category: string; items: PriceItem[] }[] = [
  {
    category: "General Dentistry",
    items: [
      { icon: "🩺", name: "Consultation", desc: "Comprehensive oral examination with a thorough assessment of your dental health and a personalised treatment plan.", price: "$10" },
      { icon: "🦷", name: "Cleaning (Scaling & Polishing)", desc: "Professional scale and polish to remove plaque, tartar, and stains — leaving your teeth fresh and healthy.", price: "$30 – $40" },
      { icon: "🔵", name: "Fillings", desc: "Tooth-coloured composite fillings that blend seamlessly with your natural teeth for a discreet, lasting repair.", price: "$30 – $50" },
      { icon: "🪡", name: "Sutures", desc: "Precise suturing after oral surgery or extractions to promote fast, clean healing with minimal discomfort.", price: "$10" },
      { icon: "💉", name: "Simple Extraction", desc: "Gentle removal of damaged or decayed teeth under local anaesthesia for a quick, comfortable procedure.", price: "$30" },
      { icon: "🔪", name: "Surgical Extraction", desc: "Expert surgical removal of impacted or complex teeth, including wisdom teeth, performed with precision and care.", price: "$50 – $100" },
      { icon: "🔬", name: "Root Canal", desc: "Pain-free root canal treatment to save infected or severely damaged teeth using the latest endodontic techniques.", price: "$80 – $120" },
    ],
  },
  {
    category: "Restorative Dentistry",
    items: [
      { icon: "👑", name: "Dental Crown", desc: "Custom-made crowns that restore a damaged tooth to its full shape, strength, and natural appearance.", price: "$300" },
      { icon: "🌉", name: "Crown & Bridge", desc: "Fixed bridgework anchored by custom crowns to replace one or more missing teeth with a seamless, natural look.", price: "$400" },
      { icon: "🔩", name: "Dental Implants", desc: "Permanent titanium tooth roots that support a lifelike crown — the gold standard for replacing missing teeth.", price: "$800" },
      { icon: "😬", name: "Dentures", desc: "Custom-fitted full or partial dentures crafted for a comfortable fit and a confident, natural-looking smile.", price: "$150 – $550" },
    ],
  },
  {
    category: "Cosmetic Dentistry",
    items: [
      { icon: "✨", name: "Teeth Whitening", desc: "Professional in-chair whitening to brighten your smile by several shades in a single, comfortable session.", price: "From $120" },
      { icon: "💎", name: "Porcelain Veneers", desc: "Ultra-thin porcelain shells bonded to the front of teeth for a flawless, camera-ready smile transformation.", price: "From $350 / tooth" },
      { icon: "🎨", name: "Smile Design", desc: "Full digital smile design consultation — preview your perfect new smile before any treatment begins.", price: "Ask for pricing" },
      { icon: "😁", name: "Braces", desc: "Traditional orthodontic braces to straighten teeth and correct bite issues for a healthier, more aligned smile.", price: "$1,500" },
      { icon: "🫥", name: "Invisalign Clear Aligners", desc: "Virtually invisible, removable aligners that straighten teeth without metal wires or brackets.", price: "From $1,200" },
    ],
  },
];

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaDescription: string;
  intro: { heading: string; body: string };
  benefitsTitle: string;
  benefits: string[];
  price: string;
  highlight: { emoji: string; title: string; body: string; stat: string; statLabel: string };
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "teeth-whitening",
    name: "Professional Teeth Whitening",
    shortName: "Teeth Whitening",
    tagline: "Brighten your smile up to 8 shades in a single session with our advanced whitening treatments.",
    metaDescription: "Professional in-chair teeth whitening in Harare at City Dental. Up to 8 shades brighter in one 60-minute session, from $120. Safe, effective, sensitivity-managed.",
    intro: {
      heading: "Professional In-Chair Whitening",
      body: "Our professional teeth whitening treatment uses advanced bleaching technology to safely and effectively whiten your teeth. Unlike over-the-counter kits, we customise the treatment to your needs and monitor the process to ensure optimal results without damaging your teeth.",
    },
    benefitsTitle: "What to Expect",
    benefits: [
      "Professional teeth assessment",
      "Custom whitening gel application",
      "Up to 8 shades brighter results",
      "Single 60-minute session",
      "Sensitivity management included",
    ],
    price: "From $120",
    highlight: { emoji: "✨", title: "Smile Brighter Today", body: "Get visibly whiter teeth in just one hour. Safe, professional, and effective results that last.", stat: "8 Shades", statLabel: "Brighter" },
    keywords: ["teeth whitening Harare", "professional teeth whitening Zimbabwe", "in-chair whitening", "brighter smile"],
  },
  {
    slug: "veneers",
    name: "Porcelain Veneers",
    shortName: "Veneers",
    tagline: "Transform your smile with ultra-thin porcelain shells for a flawless, natural look.",
    metaDescription: "Porcelain veneers in Harare at City Dental from $350 per tooth. Ultra-thin, custom-made shells that correct discolouration, chips, gaps and misalignment in 2–3 visits.",
    intro: {
      heading: "The Ultimate Smile Transformation",
      body: "Porcelain veneers are ultra-thin, custom-made shells bonded to the front of your teeth. They instantly transform your smile by correcting discolouration, chips, gaps, and misalignment. Each veneer is individually designed to match your natural tooth colour and shape perfectly.",
    },
    benefitsTitle: "Veneer Benefits",
    benefits: [
      "Natural appearance & feel",
      "Stain-resistant porcelain",
      "Minimal tooth preparation",
      "Corrects multiple issues at once",
      "Long-lasting (10+ years)",
      "Custom smile design",
    ],
    price: "From $350 per tooth",
    highlight: { emoji: "💎", title: "Your Dream Smile", body: "Veneers are perfect for anyone wanting a complete smile transformation without major dental work.", stat: "2–3 Visits", statLabel: "Complete smile makeover" },
    keywords: ["porcelain veneers Harare", "dental veneers Zimbabwe", "smile makeover", "cosmetic dentistry"],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortName: "Dental Implants",
    tagline: "Permanent, natural-looking tooth replacement — the gold standard for missing teeth.",
    metaDescription: "Dental implants in Harare at City Dental from $800. Permanent titanium tooth roots with lifelike crowns, placed by an experienced MSc-qualified dentist using 3D imaging.",
    intro: {
      heading: "Permanent Tooth Replacement That Feels Real",
      body: "Dental implants are permanent titanium tooth roots that support a lifelike crown — the gold standard for replacing missing teeth. Our lead dentist, Dr. Butete M.M, uses 3D Cone Beam CT imaging to plan every placement with precision, so your new tooth looks, feels, and functions like a natural one.",
    },
    benefitsTitle: "Implant Benefits",
    benefits: [
      "Looks and feels completely natural",
      "Permanent, fixed solution — no slipping",
      "Preserves jawbone and facial structure",
      "Eat, speak, and smile with confidence",
      "3D-guided placement for precision",
      "Placed by an experienced, MSc-qualified dentist",
    ],
    price: "From $800",
    highlight: { emoji: "🦷", title: "A Tooth for Life", body: "The implant placement takes about 1–2 hours; the full process including healing and crown placement typically takes 3–6 months for the best results.", stat: "3–6 Months", statLabel: "Full treatment journey" },
    keywords: ["dental implants Harare", "tooth implant Zimbabwe", "missing tooth replacement", "implant dentist"],
  },
  {
    slug: "invisalign",
    name: "Invisalign Clear Aligners",
    shortName: "Invisalign",
    tagline: "Invisible, comfortable orthodontics that straightens your teeth without traditional braces.",
    metaDescription: "Invisalign clear aligners in Harare at City Dental from $1,200. Virtually invisible, removable teeth straightening in 12–18 months on average — no metal braces.",
    intro: {
      heading: "Straight Teeth, Invisible Treatment",
      body: "Invisalign uses a series of custom-made, clear plastic aligners to gradually straighten your teeth. Unlike traditional braces, they're virtually invisible, removable, and comfortable. You can eat, drink, and brush normally — no one will even know you're in treatment!",
    },
    benefitsTitle: "Invisalign Benefits",
    benefits: [
      "Virtually invisible aligners",
      "Removable for eating & drinking",
      "No metal wires or brackets",
      "Comfortable to wear",
      "Often faster than traditional braces",
      "Easier cleaning & oral hygiene",
    ],
    price: "From $1,200",
    highlight: { emoji: "😁", title: "Smile with Confidence", body: "Get the straight smile you've always wanted without anyone knowing you're in treatment.", stat: "12–18 Months", statLabel: "Average treatment time" },
    keywords: ["Invisalign Harare", "clear aligners Zimbabwe", "invisible braces", "teeth straightening"],
  },
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    shortName: "General Dentistry",
    tagline: "Routine check-ups, cleanings, fillings, and preventive care to keep your smile healthy year-round.",
    metaDescription: "General dentistry in Harare at City Dental — check-ups from $10, professional cleaning $30–$40, fillings, extractions and root canals. Gentle, modern preventive care.",
    intro: {
      heading: "Everyday Care That Prevents Big Problems",
      body: "Healthy smiles start with consistent, high-quality routine care. Our general dentistry covers comprehensive consultations, professional cleaning (scaling and polishing), tooth-coloured fillings, gentle extractions, and pain-free root canal treatment — all delivered with digital X-rays that use 90% less radiation and a patient-first, anxiety-free approach.",
    },
    benefitsTitle: "What's Included",
    benefits: [
      "Comprehensive consultation & exam — $10",
      "Cleaning (scaling & polishing) — $30–$40",
      "Tooth-coloured composite fillings — $30–$50",
      "Simple & surgical extractions — $30–$100",
      "Pain-free root canal treatment — $80–$120",
      "Digital X-rays with 90% less radiation",
    ],
    price: "Consultations from $10",
    highlight: { emoji: "🩺", title: "Prevention First", body: "A $10 consultation is always the best starting point — your dentist will provide a full, transparent quote before any treatment begins.", stat: "$10", statLabel: "Comprehensive consultation" },
    keywords: ["dentist Harare", "dental check-up Harare", "teeth cleaning Zimbabwe", "dental fillings", "root canal Harare"],
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    shortName: "Emergency Care",
    tagline: "Same-day emergency appointments for toothaches, broken teeth, and urgent dental needs.",
    metaDescription: "Dental emergency in Harare? City Dental reserves same-day emergency slots every day. Toothache, broken tooth, lost filling or swelling — call or WhatsApp +263 78 172 8277 now.",
    intro: {
      heading: "Dental Emergency? We're Here.",
      body: "Toothache, broken tooth, lost filling, knocked-out tooth, or swelling — don't wait in pain. We reserve slots for dental emergencies every single day and aim to see you the same day you contact us. Even on Sundays, we handle true emergencies. Emergency consultations start from just $10.",
    },
    benefitsTitle: "How We Help Fast",
    benefits: [
      "Same-day emergency appointments",
      "Slots reserved for emergencies every day",
      "Sunday cover for true emergencies",
      "Fast pain relief and stabilisation",
      "Consultations from just $10",
      "Instant contact via WhatsApp or phone",
    ],
    price: "Consultations from $10",
    highlight: { emoji: "🚑", title: "Don't Wait in Pain", body: "Call us or WhatsApp us now and we'll fit you in the same day. For severe after-hours emergencies, go to your nearest hospital.", stat: "Same Day", statLabel: "Emergency appointments" },
    keywords: ["emergency dentist Harare", "same day dentist Zimbabwe", "toothache relief Harare", "broken tooth repair"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const bookingServices = [
  { group: "General Dentistry", options: ["Cleaning & Exam", "Filling", "Tooth Extraction", "Root Canal"] },
  { group: "Cosmetic Dentistry", options: ["Teeth Whitening", "Veneers", "Smile Design Consultation", "Invisalign Consultation"] },
  { group: "Restorative", options: ["Dental Crown", "Dental Bridge", "Dental Implant Consultation", "Dentures"] },
  { group: "Other", options: ["Emergency Appointment", "General Consultation"] },
];
