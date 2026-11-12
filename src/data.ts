export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  location: string;
  image: string;
  description: string;
  size: string;
};

export const projects: Project[] = [
  {
    id: 'monolith',
    title: 'Monolith Residence',
    category: 'Residential',
    year: '2024',
    location: 'Oslo, Norway',
    image: 'https://images.pexels.com/photos/2058172/pexels-photo-2058172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A cylindrical dwelling carved into the Nordic landscape, where concrete meets sky.',
    size: '420 m²',
  },
  {
    id: 'atrium',
    title: 'Atrium Tower',
    category: 'Commercial',
    year: '2023',
    location: 'Rotterdam, NL',
    image: 'https://images.pexels.com/photos/19368932/pexels-photo-19368932.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Symmetrical glass facade defining a new civic landmark in the harbor district.',
    size: '12,000 m²',
  },
  {
    id: 'gallery',
    title: 'Gallery Pavilion',
    category: 'Cultural',
    year: '2024',
    location: 'Kyoto, Japan',
    image: 'https://images.pexels.com/photos/9458996/pexels-photo-9458996.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'White panel facade creating a serene threshold between art and nature.',
    size: '800 m²',
  },
  {
    id: 'horizon',
    title: 'Horizon Offices',
    category: 'Commercial',
    year: '2023',
    location: 'Berlin, DE',
    image: 'https://images.pexels.com/photos/18426839/pexels-photo-18426839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A striped monolith integrating landscape and workplace in equal measure.',
    size: '6,500 m²',
  },
  {
    id: 'vertex',
    title: 'Vertex Skyscraper',
    category: 'Commercial',
    year: '2025',
    location: 'Singapore',
    image: 'https://images.pexels.com/photos/26241922/pexels-photo-26241922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A low-angle glass prism redefining the tropical skyline.',
    size: '38,000 m²',
  },
  {
    id: 'pattern',
    title: 'Pattern House',
    category: 'Residential',
    year: '2022',
    location: 'Porto, PT',
    image: 'https://images.pexels.com/photos/20571787/pexels-photo-20571787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Grayscale geometric repetition as a study in rhythm and shadow.',
    size: '280 m²',
  },
  {
    id: 'facets',
    title: 'Facets Museum',
    category: 'Cultural',
    year: '2024',
    location: 'Lisbon, PT',
    image: 'https://images.pexels.com/photos/40028546/pexels-photo-40028546.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Dynamic repeating geometric patterns wrap a contemporary art museum.',
    size: '3,200 m²',
  },
  {
    id: 'sleek',
    title: 'Sleek Apartments',
    category: 'Residential',
    year: '2023',
    location: 'Copenhagen, DK',
    image: 'https://images.pexels.com/photos/11692835/pexels-photo-11692835.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Clean lines and modern geometry define urban living.',
    size: '1,800 m²',
  },
  {
    id: 'concert',
    title: 'Sunset Concert Hall',
    category: 'Cultural',
    year: '2025',
    location: 'Ankara, TR',
    image: 'https://images.pexels.com/photos/19732124/pexels-photo-19732124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A civic landmark where acoustics and sunset light become one.',
    size: '5,400 m²',
  },
  {
    id: 'glass',
    title: 'Glass Tower',
    category: 'Commercial',
    year: '2024',
    location: 'Shanghai, CN',
    image: 'https://images.pexels.com/photos/32831921/pexels-photo-32831921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'High-rise glass facades reflecting sky and surrounding nature.',
    size: '22,000 m²',
  },
  {
    id: 'sunset',
    title: 'Sunset Facade',
    category: 'Residential',
    year: '2022',
    location: 'Toronto, CA',
    image: 'https://images.pexels.com/photos/34647783/pexels-photo-34647783.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Reflective glass facade capturing the drama of evening light.',
    size: '950 m²',
  },
  {
    id: 'cleveland',
    title: 'Cleveland Pavilion',
    category: 'Cultural',
    year: '2023',
    location: 'Cleveland, US',
    image: 'https://images.pexels.com/photos/12379124/pexels-photo-12379124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'A geometric public space shaped by the midwestern sunset.',
    size: '1,600 m²',
  },
];

export type Service = {
  num: string;
  title: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    num: '01',
    title: 'Architecture',
    description: 'From concept to completion, we design buildings that respond to their context and endure time.',
    capabilities: ['Concept Design', 'Schematic Design', 'Design Development', 'Construction Documents'],
  },
  {
    num: '02',
    title: 'Interior Design',
    description: 'Spaces crafted from within — materiality, light, and proportion tuned to human experience.',
    capabilities: ['Space Planning', 'Material Selection', 'Lighting Design', 'Custom Furniture'],
  },
  {
    num: '03',
    title: 'Urban Planning',
    description: 'Shaping the public realm at scale, integrating mobility, ecology, and community.',
    capabilities: ['Master Planning', 'Public Realm', 'Feasibility Studies', 'Zoning Analysis'],
  },
  {
    num: '04',
    title: 'Landscape',
    description: 'Where architecture meets the ground — gardens, courtyards, and terrain as living material.',
    capabilities: ['Site Analysis', 'Garden Design', 'Hardscape', 'Ecological Planning'],
  },
  {
    num: '05',
    title: 'Research',
    description: 'Investigating materials, systems, and typologies that push the discipline forward.',
    capabilities: ['Material Studies', 'Sustainable Systems', 'Typology Research', 'Publications'],
  },
  {
    num: '06',
    title: 'Consulting',
    description: 'Strategic guidance for developers, institutions, and communities shaping the built environment.',
    capabilities: ['Project Strategy', 'Sustainability Consulting', 'Brand Architecture', 'Advisory'],
  },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Elena Vasquez',
    role: 'Founding Partner',
    image: 'https://images.pexels.com/photos/9618107/pexels-photo-9618107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Elena founded AXIOM in 2009 after a decade at leading European practices. Her work centers on the dialogue between raw material and natural light.',
  },
  {
    id: '2',
    name: 'Marcus Holm',
    role: 'Design Director',
    image: 'https://images.pexels.com/photos/9618451/pexels-photo-9618451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Marcus leads the design direction across all projects, with a focus on geometric clarity and structural honesty.',
  },
  {
    id: '3',
    name: 'Yuki Tanaka',
    role: 'Senior Architect',
    image: 'https://images.pexels.com/photos/9617407/pexels-photo-9617407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Yuki brings precision and restraint informed by Japanese minimalism, specializing in residential and cultural projects.',
  },
  {
    id: '4',
    name: 'Sofia Lindqvist',
    role: 'Head of Interior',
    image: 'https://images.pexels.com/photos/9618108/pexels-photo-9618108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Sofia shapes the interior experience — from material palettes to lighting — with an artist\'s attention to detail.',
  },
  {
    id: '5',
    name: 'David Okafor',
    role: 'Urban Planner',
    image: 'https://images.pexels.com/photos/9617379/pexels-photo-9617379.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'David leads the urban planning practice, integrating ecology, mobility, and community into large-scale interventions.',
  },
  {
    id: '6',
    name: 'Amara Chen',
    role: 'Landscape Architect',
    image: 'https://images.pexels.com/photos/34573691/pexels-photo-34573691.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: 'Amara designs the ground between buildings — living systems that soften and complete architectural form.',
  },
];

export type JournalPost = {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
};

export const journalPosts: JournalPost[] = [
  {
    id: '1',
    title: 'The Weight of Concrete: A Material Manifesto',
    category: 'Materials',
    date: 'Nov 2024',
    readTime: '8 min',
    excerpt: 'Why we return to concrete again and again — its honesty, its mass, and its capacity to hold light.',
  },
  {
    id: '2',
    title: 'Designing for the Nordic Light',
    category: 'Theory',
    date: 'Oct 2024',
    readTime: '6 min',
    excerpt: 'An essay on how latitude shapes architecture, from window proportion to interior warmth.',
  },
  {
    id: '3',
    title: 'The Pavilion as a Typology',
    category: 'Typology',
    date: 'Sep 2024',
    readTime: '5 min',
    excerpt: 'The pavilion as the purest form of architectural expression — freedom within constraint.',
  },
  {
    id: '4',
    title: 'Retrofitting the Future',
    category: 'Sustainability',
    date: 'Aug 2024',
    readTime: '10 min',
    excerpt: 'Why the greenest building is the one already standing, and how we approach adaptive reuse.',
  },
  {
    id: '5',
    title: 'On Symmetry and Its Discontents',
    category: 'Theory',
    date: 'Jul 2024',
    readTime: '7 min',
    excerpt: 'A meditation on symmetry in architecture — when it empowers and when it deadens.',
  },
  {
    id: '6',
    title: 'The Studio Method: How We Work',
    category: 'Process',
    date: 'Jun 2024',
    readTime: '9 min',
    excerpt: 'Inside the AXIOM studio — our design process from first sketch to final detail.',
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: 'AXIOM delivered a building that exceeds what we imagined possible. Every detail is considered, every space breathes.',
    author: 'Henrik Larsen',
    role: 'Developer, Nordic Living',
  },
  {
    quote: 'They listen with extraordinary patience and design with extraordinary courage. A rare combination.',
    author: 'Dr. Amira Hassan',
    role: 'Director, Museum of Modern Art Lisbon',
  },
  {
    quote: 'Working with AXIOM transformed not just our property but our understanding of what a home can be.',
    author: 'James & Cora Whitfield',
    role: 'Private Clients',
  },
];

export type Value = {
  num: string;
  title: string;
  description: string;
  color: string;
};

export const values: Value[] = [
  {
    num: '01',
    title: 'Material Honesty',
    description: 'We let materials speak truthfully — concrete is concrete, wood is wood, steel is steel. No imitation, no disguise.',
    color: 'rust',
  },
  {
    num: '02',
    title: 'Site Specificity',
    description: 'Every project begins with the ground it stands on. We design for climate, topography, and the poetry of place.',
    color: 'sage',
  },
  {
    num: '03',
    title: 'Light as Material',
    description: 'Natural light is our most carefully composed material — shaped by openings, filtered by screens, captured by surfaces.',
    color: 'gold',
  },
  {
    num: '04',
    title: 'Enduring Craft',
    description: 'We design buildings to last generations, not trends. Detailing is rigorous, junctions are honest, maintenance is considered.',
    color: 'teal',
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: 'What is your typical project timeline?',
    answer: 'From first meeting to completion, a residential project typically spans 18–36 months. Commercial and cultural projects can range from 2–5 years depending on scale and complexity.',
  },
  {
    question: 'Do you work internationally?',
    answer: 'Yes. We have studios in Oslo, Rotterdam, and Kyoto, and we take on projects worldwide. We collaborate with local architects and contractors to ensure site-specific expertise.',
  },
  {
    question: 'What is your fee structure?',
    answer: 'Fees are typically structured as a percentage of construction cost for full architectural services, or as a fixed fee for defined scopes. We tailor the structure to each project during the initial consultation.',
  },
  {
    question: 'Do you take on smaller residential projects?',
    answer: 'We do. While we work at many scales, we approach every project — from a single room to a campus — with the same standard of care and craft.',
  },
  {
    question: 'Can you work with an existing architect or design?',
    answer: 'We occasionally take on projects in later stages or collaborate with other practices. This is evaluated case by case during our initial conversation.',
  },
];

export const clientLogos = [
  'NORDIC LIVING',
  'MOMA LISBON',
  'ROTTERDAM CITY',
  'KYOTO CULTURAL',
  'BERLIN STADT',
  'SINGAPORE GROUP',
  'TORONTO HERITAGE',
  'COPENHAGEN HOMES',
];

export const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '15', label: 'Years of Practice' },
  { value: '28', label: 'Awards Won' },
  { value: '40', label: 'Team Members' },
];

export const awards = [
  { year: '2024', name: 'RIBA International Prize', project: 'Monolith Residence' },
  { year: '2024', name: 'AIA Honor Award', project: 'Facets Museum' },
  { year: '2023', name: 'Mies van der Rohe Award', project: 'Atrium Tower' },
  { year: '2023', name: 'World Architecture Festival', project: 'Horizon Offices' },
  { year: '2022', name: 'Dezeen Architecture Award', project: 'Pattern House' },
  { year: '2021', name: 'Architizer A+ Award', project: 'Gallery Pavilion' },
];

export const interiorImages = [
  'https://images.pexels.com/photos/34688219/pexels-photo-34688219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export const staircaseImages = [
  'https://images.pexels.com/photos/32251174/pexels-photo-32251174.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/28896667/pexels-photo-28896667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/91480/pexels-photo-91480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/37475385/pexels-photo-37475385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/36272645/pexels-photo-36272645.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/18025193/pexels-photo-18025193.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];
