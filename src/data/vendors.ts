export interface Vendor {
  id: string;
  name: string;
  location: string;
}

/**
 * Official company list as provided in the client-supplied company-profile document
 * under the title "WE ARE PROUD VENDORS:".
 *
 * All names and locations are preserved exactly as provided in the source document.
 */
export const VENDORS: readonly Vendor[] = [
  {
    id: 'licious',
    name: 'LICIOUS (Delightful Gourmet Pvt. Ltd.)',
    location: 'Hyderabad, Telangana, India',
  },
  {
    id: 'itc-icml',
    name: 'ITC (ICML)',
    location: 'Hyderabad, Telangana, India',
  },
  {
    id: 'vintage-coffee',
    name: 'Vintage Coffee Pvt. Ltd.',
    location: 'Hyderabad, Telangana, India',
  },
  {
    id: 'ultratech-cement',
    name: 'Ultratech Cement',
    location: 'Parli, Baijnath, Maharashtra, India',
  },
  {
    id: 'tunav-foods',
    name: 'Tunav Foods (Dukes Group)',
    location: 'Hyderabad, Telangana, India',
  },
  {
    id: 'althera-laboratories',
    name: 'Althera Laboratories India Pvt. Ltd.',
    location: 'Bangalore, Karnataka, India',
  },
  {
    id: 'brilliant-bio-pharma',
    name: 'Brilliant Bio Pharma Company',
    location: 'Hyderabad, India',
  },
  {
    id: 'cipla',
    name: 'Cipla Pharmaceutical Company',
    location: 'Bangalore, Karnataka, India',
  },
  {
    id: 'global-green',
    name: 'The Global Green Company Limited',
    location: 'Hoskote Taluk, Bangalore, Karnataka, India',
  },
  {
    id: 'ecologic-engineering',
    name: 'Ecologic Engineering Pvt. Ltd.',
    location: 'Bangalore, Karnataka, India',
  },
  {
    id: 'unitop-aquacare',
    name: 'Unitop Aquacare Ltd.',
    location: 'Thane (W), Maharashtra, India',
  },
  {
    id: 'vibonum-technology',
    name: 'Vibonum Technology Pvt. Ltd.',
    location: 'Nanjangud, Karnataka, India',
  },
  {
    id: 'jcspl',
    name: 'JCSPL',
    location: 'Hyderabad, Telangana, India',
  },
  {
    id: 'karachi-inc',
    name: 'Karachi INC',
    location: 'Hyderabad, Telangana, India',
  },
  {
    id: 'gandour',
    name: 'Gandour International Food Company',
    location: 'Hyderabad, Telangana, India',
  },
  {
    id: 'telugu-food',
    name: 'Telugu Food Company',
    location: 'Hyderabad, Telangana, India',
  },
  {
    id: 'big-basket',
    name: 'Big Basket (A Tata Enterprises)',
    location: 'Hyderabad, Telangana, India',
  },
  {
    id: 'enbio-green',
    name: 'Enbio Green Solution Pvt Ltd.',
    location: 'Faridabad, Haryana, India',
  },
  {
    id: 'ofb-tech',
    name: 'OFB Tech Limited (Koeleman)',
    location: 'Kolar, Bangalore, Karnataka, India',
  },
] as const;

/**
 * Curated subset of 8 vendor organizations for the Home page marquee.
 * Consumes items directly from the official VENDORS list.
 */
export const HOME_VENDORS: readonly Vendor[] = [
  VENDORS[0],  // LICIOUS
  VENDORS[1],  // ITC (ICML)
  VENDORS[2],  // Vintage Coffee
  VENDORS[3],  // Ultratech Cement
  VENDORS[4],  // Tunav Foods (Dukes Group)
  VENDORS[7],  // Cipla Pharmaceutical Company
  VENDORS[8],  // The Global Green Company Limited
  VENDORS[16], // Big Basket (A Tata Enterprises)
];

/**
 * Compact subset of 7 vendor organizations for the Projects page credibility section.
 * Consumes items directly from the official VENDORS list.
 */
export const PROJECTS_VENDORS: readonly Vendor[] = [
  VENDORS[5],  // Althera Laboratories India Pvt. Ltd.
  VENDORS[6],  // Brilliant Bio Pharma Company
  VENDORS[9],  // Ecologic Engineering Pvt. Ltd.
  VENDORS[10], // Unitop Aquacare Ltd.
  VENDORS[11], // Vibonum Technology Pvt. Ltd.
  VENDORS[17], // Enbio Green Solution Pvt Ltd.
  VENDORS[18], // OFB Tech Limited (Koeleman)
];

/**
 * Compact badge subset of 8 vendor organizations for the Contact page trust section.
 * Consumes items directly from the official VENDORS list.
 */
export const CONTACT_VENDORS: readonly Vendor[] = [
  VENDORS[0],  // LICIOUS
  VENDORS[1],  // ITC (ICML)
  VENDORS[2],  // Vintage Coffee
  VENDORS[3],  // Ultratech Cement
  VENDORS[7],  // Cipla Pharmaceutical Company
  VENDORS[12], // JCSPL
  VENDORS[13], // Karachi INC
  VENDORS[14], // Gandour International Food Company
];
