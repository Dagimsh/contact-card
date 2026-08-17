import '../styling/contactCard.css';

export default function ContactCard({ 
  name, 
  role = "Member", 
  email, 
  phone, 
  location, 
  avatar, 
  status = "online" 
}) {
  return (
    <div className="contact-card">
      <div className="card-header">
        <div className="avatar-wrapper">
          <img className="avatar" src={avatar} alt={name} />
          <span className={`status-badge ${status}`} title={status}></span>
        </div>
        <div className="user-info">
          <h3 className="user-name">{name}</h3>
          <p className="user-role">{role}</p>
        </div>
      </div>

      <div className="card-body">
        <div className="info-row">
          <span className="info-icon">✉️</span>
          <a href={`mailto:${email}`} className="info-text">{email}</a>
        </div>
        {phone && (
          <div className="info-row">
            <span className="info-icon">📞</span>
            <span className="info-text">{phone}</span>
          </div>
        )}
        {location && (
          <div className="info-row">
            <span className="info-icon">📍</span>
            <span className="info-text">{location}</span>
          </div>
        )}
      </div>

      <div className="card-footer">
        <a href={`mailto:${email}`} className="btn btn-primary">
          Message
        </a>
        <button className="btn btn-secondary" onClick={() => alert(`Calling ${name}...`)}>
          Call
        </button>
      </div>
    </div>
  );
}
