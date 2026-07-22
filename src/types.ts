export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to determine which Lucide icon to render
  targetAudience: string; // e.g., "Sekolah", "UMKM", "Corporate", "Pemerintah"
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  clientType: 'Sekolah' | 'UMKM' | 'Startup' | 'Pemerintah' | 'Corporate';
  image: string;
  year: string;
  tags: string[];
}

export interface CoverageArea {
  name: string;
  type: 'Kota' | 'Kabupaten';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  clientType: string;
}

export interface ProcessStep {
  step: string; // e.g., "01", "02"
  title: string;
  description: string;
}
