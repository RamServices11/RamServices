// Single Source of Truth for Official RAM Services Enterprises Products

// Direct asset imports ensuring full Vite bundling, optimization, and type safety
import preTreatment30kldImg from '../assets/products/30KLD PRE TREATMENT PLANT.jpg';
import stp20kldImg from '../assets/products/20KLD STP PLANT.jpg';
import roSkidImg from '../assets/products/IMG_20251011_094541.jpg';
import ssWaterTankImg from '../assets/products/S.S Water Tank .jpg';
import chemicalDosingImg from '../assets/products/Chemical Dosing System.jpg';
import waterChillerImg from '../assets/products/Water Chiller.jpg';
import oilSkimmerImg from '../assets/products/Oil Sikmmer.jpg';
import stp50kldImg from '../assets/products/50KLD SEWAGE TREATMENT PLANT.jpg';
import domesticRoImg from '../assets/products/Domestic RO plant.jpg';
import domesticRo1Img from '../assets/products/Domestic RO plant1.jpg';
import aerationTankImg from '../assets/products/Aeration tank.jpg';
import etpPlantImg from '../assets/products/ETP PLANT.jpg';
import zld30kldImg from '../assets/products/30KLD ZLD PLANT.jpg';
import bagFilterImg from '../assets/products/Bag Filter.jpg';
import cetp5kldImg from '../assets/products/5KLD CETP PLANT.jpg';
import etp5kldHospitalImg from '../assets/products/5KLD ETP plant for hospital and restaurant.jpeg';
import airBlowerImg from '../assets/products/Air blower.jpeg';
import airBlower1Img from '../assets/products/Air blower1.jpeg';
import bioCultureImg from '../assets/products/STP & ETP BIO CULTURE.jpeg';
import sludgeDewateringImg from '../assets/products/Sludge dewatering system.jpeg';
import officeContainerImg from '../assets/products/Office Container1.jpg';
import officeContainerInteriorImg from '../assets/products/Office Container.jpg';
import panelImg from '../assets/products/Panel .jpg';
import etpPlant300kldImg from '../assets/products/300KLD ETP plant.jpg';
import etpStpCombinedImg from '../assets/products/25KLD ETP & 15KLD STP PLANT.jpg';

// Video assets
import roUf300kldVideo from '../assets/products/300KLD RO+ UF PLANT.mp4';
import waterTreatmentLabVideo from '../assets/products/Water treatment laboratory set-up.mp4';
import shrinkWrappingVideo from '../assets/products/Shrink wrapping Machine.mp4';
import blowing2CavityVideo from '../assets/products/2 Cavity Blowing machine.mp4';
import rfc60bpmVideo from '../assets/products/60BPM RFC MACHINE.mp4';
import pouchPackingVideo from '../assets/products/Pouch Packing machine.mp4';
import bottlePacking20bpmVideo from '../assets/products/20BPM BOTTLE PACKING MACHINE.mp4';

export type ProductCategory = 
  | 'water-treatment'
  | 'wastewater'
  | 'equipment'
  | 'packaging-industrial';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  capacity?: string;
  application?: string;
  image?: string;
  secondaryImage?: string;
  video?: string;
  objectFit?: 'cover' | 'contain';
  featured?: boolean;
  highlight?: string;
  badge?: string;
}

export const CATEGORIES: { id: ProductCategory | 'all'; label: string; count?: number }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'water-treatment', label: 'Water Treatment' },
  { id: 'wastewater', label: 'Wastewater Treatment' },
  { id: 'equipment', label: 'Treatment & Process Equipment' },
  { id: 'packaging-industrial', label: 'Industrial & Packaging' },
];

/**
 * Generates an official pre-filled WhatsApp enquiry URL for a specific product.
 * Uses official WhatsApp number +91 6309767400 with dynamic product name.
 */
export const createProductWhatsAppUrl = (productName: string): string => {
  const message = `Hello RAM Services Enterprises,\nI am interested in the ${productName}.\nPlease share more details.`;
  return `https://wa.me/916309767400?text=${encodeURIComponent(message)}`;
};

export const PRODUCTS: ProductItem[] = [
  // WATER & WASTEWATER TREATMENT
  {
    id: 'pre-treatment-30kld',
    name: '30 KLD Pre-Treatment Plant',
    category: 'water-treatment',
    capacity: '30 KLD',
    image: preTreatment30kldImg,
    objectFit: 'cover',
    featured: true,
    highlight: 'Integrated multi-stage pre-treatment system designed for industrial feed water conditioning.',
    badge: 'Pre-Treatment'
  },
  {
    id: 'stp-20kld',
    name: '20 KLD STP Plant',
    category: 'wastewater',
    capacity: '20 KLD',
    image: stp20kldImg,
    objectFit: 'cover',
    featured: false,
    badge: 'STP'
  },
  {
    id: 'ro-plant-1kl',
    name: '1 KL RO Plant',
    category: 'water-treatment',
    capacity: '1 KL',
    image: roSkidImg,
    objectFit: 'contain',
    featured: false,
    badge: 'RO Plant'
  },
  {
    id: 'ro-plant-range',
    name: 'RO Plant — 250 LPH to 12,000 LPH',
    category: 'water-treatment',
    capacity: '250 LPH to 12,000 LPH',
    image: roSkidImg,
    objectFit: 'contain',
    featured: true,
    highlight: 'Skid-mounted commercial and industrial reverse osmosis systems with comprehensive membrane arrays.',
    badge: 'Industrial RO'
  },
  {
    id: 'ss-water-tank',
    name: 'S.S. Water Tank',
    category: 'equipment',
    image: ssWaterTankImg,
    objectFit: 'contain',
    featured: false,
    badge: 'Storage'
  },
  {
    id: 'chemical-dosing-system',
    name: 'Chemical Dosing System',
    category: 'equipment',
    image: chemicalDosingImg,
    objectFit: 'contain',
    featured: false,
    badge: 'Dosing'
  },
  {
    id: 'water-chiller',
    name: 'Water Chiller',
    category: 'equipment',
    image: waterChillerImg,
    objectFit: 'contain',
    featured: false,
    badge: 'Chiller'
  },
  {
    id: 'oil-skimmer',
    name: 'Oil Skimmer',
    category: 'equipment',
    image: oilSkimmerImg,
    objectFit: 'contain',
    featured: false,
    badge: 'Separation'
  },
  {
    id: 'sewage-treatment-50kld',
    name: '50 KLD Sewage Treatment Plant',
    category: 'wastewater',
    capacity: '50 KLD',
    image: stp50kldImg,
    objectFit: 'cover',
    featured: false,
    badge: 'STP'
  },
  {
    id: 'domestic-ro-plant',
    name: 'Domestic RO Plant',
    category: 'water-treatment',
    image: domesticRoImg,
    secondaryImage: domesticRo1Img,
    objectFit: 'contain',
    featured: false,
    badge: 'Purification'
  },
  {
    id: 'aeration-tank',
    name: 'Aeration Tank',
    category: 'wastewater',
    image: aerationTankImg,
    objectFit: 'cover',
    featured: false,
    badge: 'Biological'
  },
  {
    id: 'etp-plant',
    name: 'ETP Plant',
    category: 'wastewater',
    image: etpPlantImg,
    objectFit: 'cover',
    featured: false,
    badge: 'ETP'
  },
  {
    id: 'ro-uf-plant-300kld',
    name: '300 KLD RO + UF Plant',
    category: 'water-treatment',
    capacity: '300 KLD',
    video: roUf300kldVideo,
    featured: true,
    highlight: 'High-capacity dual-stage ultrafiltration and reverse osmosis installation engineered for large-scale industrial water recovery.',
    badge: 'RO + UF'
  },
  {
    id: 'etp-plant-300kld',
    name: '300 KLD ETP Plant',
    category: 'wastewater',
    capacity: '300 KLD',
    image: etpPlant300kldImg,
    objectFit: 'cover',
    featured: false,
    badge: 'Industrial ETP'
  },
  {
    id: 'etp-stp-combined-25kld-15kld',
    name: '25 KLD ETP & 15 KLD STP Plant',
    category: 'wastewater',
    capacity: '25 KLD ETP & 15 KLD STP',
    image: etpStpCombinedImg,
    objectFit: 'cover',
    featured: false,
    badge: 'ETP & STP'
  },
  {
    id: 'zld-plant-30kld',
    name: '30 KLD ZLD Plant',
    category: 'wastewater',
    capacity: '30 KLD',
    image: zld30kldImg,
    objectFit: 'cover',
    featured: true,
    highlight: 'Advanced Zero Liquid Discharge installation ensuring maximum water recycle and zero effluent discharge.',
    badge: 'ZLD Plant'
  },
  {
    id: 'bag-filter',
    name: 'Bag Filter',
    category: 'equipment',
    image: bagFilterImg,
    objectFit: 'contain',
    featured: false,
    badge: 'Filtration'
  },
  {
    id: 'cetp-plant-5kld',
    name: '5 KLD CETP Plant',
    category: 'wastewater',
    capacity: '5 KLD',
    image: cetp5kldImg,
    objectFit: 'cover',
    featured: false,
    badge: 'CETP'
  },
  {
    id: 'etp-plant-5kld-hospital-restaurant',
    name: '5 KLD ETP Plant — Hospital & Restaurant Applications',
    category: 'wastewater',
    capacity: '5 KLD',
    application: 'Hospital & Restaurant Applications',
    image: etp5kldHospitalImg,
    objectFit: 'cover',
    featured: true,
    highlight: 'Specialized compact effluent treatment system engineered specifically for hospital, healthcare, and hospitality effluent streams.',
    badge: 'Commercial ETP'
  },
  {
    id: 'air-blower',
    name: 'Air Blower',
    category: 'equipment',
    image: airBlowerImg,
    secondaryImage: airBlower1Img,
    objectFit: 'cover',
    featured: false,
    badge: 'Aeration'
  },
  {
    id: 'water-treatment-lab',
    name: 'Water Treatment Laboratory Set-up',
    category: 'equipment',
    video: waterTreatmentLabVideo,
    featured: true,
    highlight: 'Complete on-site analytical laboratory setup for parameter testing, monitoring, and water-quality verification.',
    badge: 'Laboratory'
  },
  {
    id: 'bio-culture',
    name: 'STP & ETP Bio Culture',
    category: 'wastewater',
    image: bioCultureImg,
    objectFit: 'contain',
    featured: false,
    badge: 'Biological'
  },
  {
    id: 'sludge-dewatering',
    name: 'Sludge Dewatering System',
    category: 'wastewater',
    image: sludgeDewateringImg,
    objectFit: 'contain',
    featured: false,
    badge: 'Dewatering'
  },

  // INDUSTRIAL / ENGINEERING / PACKAGING
  {
    id: 'office-container',
    name: 'Office Container',
    category: 'packaging-industrial',
    image: officeContainerImg,
    secondaryImage: officeContainerInteriorImg,
    objectFit: 'cover',
    featured: true,
    highlight: 'Prefabricated, fully furnished portable industrial site office cabins engineered for durability and immediate deployment.',
    badge: 'Prefabrication'
  },
  {
    id: 'panel',
    name: 'Panel',
    category: 'packaging-industrial',
    image: panelImg,
    objectFit: 'contain',
    featured: false,
    badge: 'Electrical / Control'
  },
  {
    id: 'shrink-wrapping-machine',
    name: 'Shrink Wrapping Machine',
    category: 'packaging-industrial',
    video: shrinkWrappingVideo,
    featured: false,
    badge: 'Packaging'
  },
  {
    id: 'blowing-machine-2-cavity',
    name: '2 Cavity Blowing Machine',
    category: 'packaging-industrial',
    video: blowing2CavityVideo,
    featured: false,
    badge: 'Machinery'
  },
  {
    id: 'rfc-machine-60bpm',
    name: '60 BPM RFC Machine',
    category: 'packaging-industrial',
    video: rfc60bpmVideo,
    featured: true,
    highlight: 'High-speed 60 Bottles-Per-Minute Rinsing, Filling, and Capping automated rotary bottling line.',
    badge: 'Bottling Line'
  },
  {
    id: 'pouch-packing-machine',
    name: 'Pouch Packing Machine',
    category: 'packaging-industrial',
    video: pouchPackingVideo,
    featured: false,
    badge: 'Packaging'
  },
  {
    id: 'water-pouch-packing-machine',
    name: 'Water Pouch Packing Machine',
    category: 'packaging-industrial',
    video: pouchPackingVideo,
    featured: false,
    badge: 'Liquid Packaging'
  },
  {
    id: 'bottle-packing-machine-20bpm',
    name: '20 BPM Bottle Packing Machine',
    category: 'packaging-industrial',
    video: bottlePacking20bpmVideo,
    featured: false,
    badge: 'Packaging'
  }
];
