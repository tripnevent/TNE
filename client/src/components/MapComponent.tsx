import React from 'react';
import './MapComponent.css';

const offices = [
  {
    city: 'India Office',
    address: 'PS ABACUS, UNIT 708, 7TH FLOOR, NEWTOWN, KOLKATA-700156',
    phone: '+91 900 700 0777',
    email: 'hello@tripandevent.com',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.6716232173283!2d88.46021956952754!3d22.618655236670296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f2a43ffd6f1%3A0xc72b2775a11e3245!2sML%20Support%2C%20An%20easy%20life%20journey!5e1!3m2!1sen!2sin!4v1762758412225!5m2!1sen!2sin',
  },
  {
    city: 'Dubai Office',
    address: 'HORIZON BUILDING, OFFICE 608, DEIRA, UAE',
    phone: '+971 55 123 4567',
    email: 'hello@tripandevent.com',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.446710454372!2d55.313271314898755!3d25.26389558386278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bbd6a8c1bfb%3A0xc0b8745d20c6f7c!2sHorizon%20Building%2C%20Dubai!5e0!3m2!1sen!2sus!4v1700',
  },
];

export default function MapComponent() {
  return (
    <section className="map-section">
      <div className="container">
        <h2 className="map-title">Our Cinematic Travel Offices</h2>
        <p className="map-subtitle">
          Turn your holidays into cinematic movies. Connect with our offices for
          luxury travel planning and professional 4K videography services.
        </p>

        <div className="map-grid">
          {offices.map((office, idx) => (
            <div key={idx} className="office-card">
              <div className="office-map">
                <iframe
                  src={office.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={office.city}
                ></iframe>
              </div>
              <div className="office-info">
                <h3>{office.city}</h3>
                <p>{office.address}</p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${office.phone}`}>{office.phone}</a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${office.email}`}>{office.email}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
