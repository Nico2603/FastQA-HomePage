import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: 'Microsoft', logo: '/assets/clients/microsoft.svg' },
    { name: 'Google', logo: '/assets/clients/google.svg' },
    { name: 'Amazon', logo: '/assets/clients/amazon.svg' },
    { name: 'IBM', logo: '/assets/clients/ibm.svg' },
    { name: 'Oracle', logo: '/assets/clients/oracle.svg' },
    { name: 'Tesla', logo: '/assets/clients/tesla.svg' }
  ];

  return (
    <div className="trusted-by animate-fadeInUp delay-500">
      <p>CONFÍAN EN NOSOTROS</p>
      <div className="client-logos">
        {clients.map((client, index) => (
          <img 
            key={client.name} 
            src={client.logo} 
            alt={`${client.name} logo`} 
            className={`animate-float delay-${index * 100}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos; 