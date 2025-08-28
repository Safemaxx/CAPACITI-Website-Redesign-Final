
export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
}

export interface Programme {
  title: string;
  description: string;
  stats: {
    duration: string;
    placementRate: string;
  };
  imageUrl: string;
  videoUrl?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface BlogPost {
  title: string;
  summary: string;
  imageUrl: string;
  tags: string[];
}

export interface NewsEvent {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}
