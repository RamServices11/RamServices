export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  education: string;
  experience: string;
  image?: string;
}

export const leadershipData: LeadershipMember[] = [
  {
    id: 'dr-anand',
    name: 'Dr. Anand Prakash Mishra',
    role: 'Founder',
    education: 'Ph.D. & LLB | M.Sc in Chemistry | B.Sc in PCM',
    experience: 'Over 30 years of experience in higher education & research at Allahabad University.',
  },
  {
    id: 'mr-mayank',
    name: 'Mr. Mayank Prakash Mishra',
    role: 'CEO',
    education: 'MBA in HR & Marketing | B.Tech Mechanical Engineering',
    experience: 'Over 10 years of industrial & turnkey project execution experience.',
  },
  {
    id: 'mr-saurabh',
    name: 'Mr. Saurabh Kumar Pandey',
    role: 'Technical Head',
    education: 'B.Tech Mechanical Engineering',
    experience: 'Over 10 years of mechanical engineering & plant design experience.',
  },
  {
    id: 'mr-gyanendra',
    name: 'Mr. Gyanendra Mishra',
    role: 'Operation Head',
    education: 'B.Tech Chemical Engineering',
    experience: 'Over 12 years of process & plant operations experience.',
  },
  {
    id: 'mrs-neha',
    name: 'Mrs. Neha Tripathi',
    role: 'Finance & IT Head',
    education: 'Computer Engineering',
    experience: 'Over 10 years of IT & corporate management experience.',
  },
  {
    id: 'mr-aditya',
    name: 'Mr. Aditya Prakash Mishra',
    role: 'O&M Manager',
    education: 'B.Sc in PCM',
    experience: 'Plant operations & annual maintenance services.',
  },
  {
    id: 'mr-abhishek',
    name: 'Mr. Abhishek Kumar Singh',
    role: 'Assistant Manager',
    education: 'Diploma in Mechanical Engineering',
    experience: 'Mechanical installation & field project coordination.',
  }
];
