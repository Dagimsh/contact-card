import React from 'react';
import '../styling/contact.css';

export default function Contact({ name, email, phone, profile_picture }) {
  return (
    <div className="contact-card">
      <img className="profile-picture" src={profile_picture} alt={name} />
      <div className="contact-info">
        <h2 className="contact-name">{name}</h2>
        <p className="contact-email"><strong>Email:</strong> {email}</p>
        <p className="contact-phone"><strong>Phone:</strong> {phone}</p>
      </div>
    </div>
  );
}
