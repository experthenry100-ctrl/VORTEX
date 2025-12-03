import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Razer Huntsman V3 Pro",
    price: 249.99,
    category: "Keyboards",
    description: "The ultimate esports keyboard. Featuring analog optical switches with Rapid Trigger mode for ultra-fast inputs.",
    imageUrl: "https://images.unsplash.com/photo-1626218174358-77b7f9a6fe9a?q=80&w=800&auto=format&fit=crop",
    specs: {
      switches: "Gen-2 Analog Optical",
      connection: "Wired USB-C",
      weight: "1.2kg"
    },
    performance: [
      { subject: 'Speed', A: 99, fullMark: 100 },
      { subject: 'Durability', A: 95, fullMark: 100 },
      { subject: 'Feel', A: 90, fullMark: 100 },
      { subject: 'RGB', A: 98, fullMark: 100 },
      { subject: 'Software', A: 92, fullMark: 100 },
    ]
  },
  {
    id: '2',
    name: "Logitech G Pro X Superlight 2",
    price: 159.00,
    category: "Mice",
    description: "An icon evolved. Now with 2K polling, USB-C, and 95-hour battery life while weighing only 60g.",
    imageUrl: "https://images.unsplash.com/photo-1615663245857-acda5b247195?q=80&w=800&auto=format&fit=crop",
    specs: {
      sensor: "HERO 2 (32k DPI)",
      weight: "60g",
      connection: "LIGHTSPEED Wireless"
    },
    performance: [
      { subject: 'Aim', A: 99, fullMark: 100 },
      { subject: 'Glide', A: 97, fullMark: 100 },
      { subject: 'Ergo', A: 94, fullMark: 100 },
      { subject: 'Clicks', A: 96, fullMark: 100 },
      { subject: 'Battery', A: 95, fullMark: 100 },
    ]
  },
  {
    id: '3',
    name: "SteelSeries Arctis Nova Pro",
    price: 349.99,
    category: "Audio",
    description: "Almighty Audio with Active Noise Cancellation and an Infinity Power System (hot-swappable batteries).",
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800&auto=format&fit=crop",
    specs: {
      connection: "2.4GHz + Bluetooth",
      weight: "338g",
      resolution: "Hi-Res Audio"
    },
    performance: [
      { subject: 'Sound', A: 98, fullMark: 100 },
      { subject: 'ANC', A: 92, fullMark: 100 },
      { subject: 'Mic', A: 90, fullMark: 100 },
      { subject: 'Comfort', A: 95, fullMark: 100 },
      { subject: 'Features', A: 99, fullMark: 100 },
    ]
  },
  {
    id: '4',
    name: "Meta Quest 3 512GB",
    price: 649.99,
    category: "VR",
    description: "Breakthrough mixed reality. Transform your home into a virtual playground with full color passthrough.",
    imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?q=80&w=800&auto=format&fit=crop",
    specs: {
      resolution: "2064x2208 per eye",
      connection: "Wireless / PCVR",
      weight: "515g"
    },
    performance: [
      { subject: 'Immersion', A: 98, fullMark: 100 },
      { subject: 'Optics', A: 96, fullMark: 100 },
      { subject: 'Tracking', A: 97, fullMark: 100 },
      { subject: 'MR', A: 95, fullMark: 100 },
      { subject: 'Library', A: 92, fullMark: 100 },
    ]
  },
  {
    id: '5',
    name: "Valve Steam Deck OLED",
    price: 549.00,
    category: "Handhelds",
    description: "Your PC games, everywhere. Now with a stunning HDR OLED screen, longer battery life, and faster downloads.",
    imageUrl: "https://images.unsplash.com/photo-1698680196881-0160b777a82b?q=80&w=800&auto=format&fit=crop",
    specs: {
      resolution: "7.4\" OLED 90Hz",
      connection: "Wi-Fi 6E",
      weight: "640g"
    },
    performance: [
      { subject: 'Display', A: 99, fullMark: 100 },
      { subject: 'Power', A: 88, fullMark: 100 },
      { subject: 'Controls', A: 95, fullMark: 100 },
      { subject: 'OS', A: 96, fullMark: 100 },
      { subject: 'Value', A: 98, fullMark: 100 },
    ]
  },
  {
    id: '6',
    name: "Secretlab Titan Evo",
    price: 549.00,
    category: "Furniture",
    description: "The gold standard of gaming chairs. Integrated lumbar support, magnetic head pillow, and cold-cure foam.",
    imageUrl: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=800&auto=format&fit=crop",
    specs: {
      switches: "SoftWeave Fabric", // Reusing switches field for material
      weight: "34.5kg",
      connection: "Reclining"
    },
    performance: [
      { subject: 'Comfort', A: 98, fullMark: 100 },
      { subject: 'Support', A: 99, fullMark: 100 },
      { subject: 'Build', A: 97, fullMark: 100 },
      { subject: 'Style', A: 95, fullMark: 100 },
      { subject: 'Assembly', A: 90, fullMark: 100 },
    ]
  },
];