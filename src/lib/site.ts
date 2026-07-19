export const site = {
  name: "City Dental",
  tagline: "Modern Dental Care",
  description:
    "City Dental offers modern, premium dental care in Harare, Zimbabwe — cosmetic dentistry, dental implants, teeth whitening, Invisalign, and same-day emergency care. Book your appointment online today.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://citydental.site",
  phone: "+263781728277",
  phoneDisplay: "+263 78 172 8277",
  whatsapp: "263781728277",
  email: "ahmedcitydental@gmail.com",
  bookingInbox: "ahmedcitydental@gmail.com",
  address: {
    street: "21 Robson Manyika",
    city: "Harare",
    country: "Zimbabwe",
    countryCode: "ZW",
  },
  geo: { lat: -17.8292, lng: 31.0522 },
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Emergencies only" },
  ],
  openingHoursSchema: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { dayOfWeek: ["Saturday"], opens: "08:00", closes: "14:00" },
  ],
  stats: {
    patients: 5000,
    years: 12,
    satisfaction: 98,
    reviews: 500,
    rating: "5.0",
  },
  insurance: ["CIMAS", "PSMAS", "First Mutual", "Nicoz Diamond", "ZB Life", "Alliance Life"],
  socials: [
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Google", href: "https://google.com/maps" },
  ],
};

export const team = [
  {
    name: "Dr. Butete M.M",
    role: "Lead Dentist & Director",
    bio: "BDS (UZ), MSc Cosmetic Dentistry (UK). 15 years of experience specialising in full smile makeovers, implants, and complex restorations.",
    initials: "BM",
  },
];

export const faqs = [
  {
    q: "How do I book an appointment?",
    a: "You can book online through our website, send us a WhatsApp message, or call our reception directly. We offer same-day appointments for emergencies.",
  },
  {
    q: "Do you accept walk-in patients?",
    a: "Yes, we accept walk-ins subject to availability. However, booking in advance is recommended to secure your preferred time slot.",
  },
  {
    q: "Is teeth whitening painful?",
    a: "Our professional teeth whitening is safe and comfortable. Some patients experience mild sensitivity during or after the procedure, but this is temporary and subsides quickly.",
  },
  {
    q: "How long does a dental implant procedure take?",
    a: "The implant placement itself takes about 1–2 hours. The full process, including healing and crown placement, typically takes 3–6 months for the best results.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes! We offer flexible payment plans for major treatments. We also accept all major medical aids and insurance providers. Ask our reception team for details.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Call us immediately or WhatsApp us. We reserve slots for dental emergencies every day and aim to see you within the same day. For severe emergencies after hours, go to your nearest hospital.",
  },
];

export function waLink(message?: string) {
  const msg = message || "Hello City Dental, I would like to book an appointment.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
}
