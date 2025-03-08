import React, { useState } from 'react';
import ProviderList from './ProviderList';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

const serviceCategories = [
  'Plumbing',
  'Carpentry',
  'Graphic Design',
  'Wedding Planning',
  'Electrical',
  'Other'
];

const serviceProviders = [
  {
    id: 1,
    name: 'John Doe Plumbing',
    category: 'Plumbing',
    location: 'Local Area 1',
    skills: 'Pipe fitting, Drain cleaning',
    pricing: '$50/hour',
    availability: 'Mon-Fri',
    rating: 4.5,
    description: 'Experienced plumber with 10+ years in residential plumbing.',
    whatsapp: 'https://wa.me/1234567890'
  },
  {
    id: 2,
    name: 'Jane Smith Carpentry',
    category: 'Carpentry',
    location: 'Local Area 2',
    skills: 'Furniture making, Cabinet installation',
    pricing: '$40/hour',
    availability: 'Tue-Sat',
    rating: 4.8,
    description: 'Skilled carpenter specializing in custom furniture and home installations.',
    whatsapp: 'https://wa.me/0987654321'
  },
  {
    id: 3,
    name: 'Creative Designs - Graphic Design',
    category: 'Graphic Design',
    location: 'Remote',
    skills: 'Logo design, Web design, Branding',
    pricing: '$60/hour',
    availability: 'Mon-Fri',
    rating: 4.9,
    description: 'Professional graphic designer helping businesses build strong visual identities.',
    whatsapp: 'https://wa.me/1122334455'
  },
  {
    id: 4,
    name: 'Elegant Events - Wedding Planner',
    category: 'Wedding Planning',
    location: 'Local Area 3',
    skills: 'Full wedding planning, Event coordination',
    pricing: '$100/hour',
    availability: 'Flexible',
    rating: 4.7,
    description: 'Dedicated wedding planner ensuring your special day is perfect.',
    whatsapp: 'https://wa.me/6677889900'
  },
  {
    id: 5,
    name: 'Power Solutions - Electrical Services',
    category: 'Electrical',
    location: 'Local Area 1',
    skills: 'Wiring, Installations, Repairs',
    pricing: '$75/hour',
    availability: 'Mon-Sat',
    rating: 4.6,
    description: 'Certified electrician providing safe and reliable electrical services.',
    whatsapp: 'https://wa.me/5544332211'
  },
  {
    id: 6,
    name: 'The Handyman - General Services',
    category: 'Other',
    location: 'Local Area 2',
    skills: 'Minor repairs, Assembly, Odd jobs',
    pricing: '$30/hour',
    availability: 'Weekends',
    rating: 4.2,
    description: 'Versatile handyman ready to tackle your home repair tasks.',
    whatsapp: 'https://wa.me/9900887766'
  },
];

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProviders = serviceProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           provider.skills.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           provider.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || provider.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <header className="header">
        <h1>Find Local Craftsmen & Service Providers</h1>
        <p>Connect with trusted professionals in your area.</p>
      </header>

      <SearchBar setSearchQuery={setSearchQuery} />
      <CategoryFilter
        categories={serviceCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ProviderList providers={filteredProviders} />
    </div>
  );
}

export default HomePage;
