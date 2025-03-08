import React from 'react';

function ProviderList({ providers }) {
  return (
    <div className="providers-list">
      {providers.map(provider => (
        <ProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
}

function ProviderCard({ provider }) {
  return (
    <div className="provider-card">
      <h3>{provider.name}</h3>
      <p><b>Category:</b> {provider.category}</p>
      <p><b>Skills:</b> {provider.skills}</p>
      <p><b>Pricing:</b> {provider.pricing}</p>
      <p><b>Availability:</b> {provider.availability}</p>
      <p>{provider.description}</p>
      <a href={provider.whatsapp} className="contact-button" target="_blank" rel="noopener noreferrer">
        Contact via WhatsApp
      </a>
    </div>
  );
}

export default ProviderList;
