import ContactCard from "./ContactCard.jsx";
import '../styling/social.css';

export default function Social() {
  const contacts = [
    {
      id: 1,
      name: "Harry Kane",
      role: "Striker & Captain",
      email: "harrykane@gmail.com",
      phone: "+44 7911 123456",
      location: "Munich, Germany",
      avatar: "https://ichef.bbci.co.uk/news/2048/cpsprodpb/8e53/live/5f993350-38f6-11ee-ba67-4973c23bf2d1.jpg",
      status: "online"
    },
    {
      id: 2,
      name: "Lionel Messi",
      role: "Forward & Playmaker",
      email: "messi@gmail.com",
      phone: "+1 305 555 0199",
      location: "Miami, FL, USA",
      avatar: "https://assets.khelnow.com/news/uploads/2025/06/Lionel-Messi-Argentina-GettyImages-2177987340-1-scaled.jpg",
      status: "online"
    },
    {
      id: 3,
      name: "Cristiano Ronaldo",
      role: "Forward & Leader",
      email: "ronaldo@gmail.com",
      phone: "+966 50 123 4567",
      location: "Riyadh, Saudi Arabia",
      avatar: "https://wallpapers.com/images/hd/cristiano-ronaldo-pictures-ihxnkv4161en8iyp.jpg",
      status: "away"
    },
    {
      id: 4,
      name: "Kylian Mbappé",
      role: "Forward / Winger",
      email: "mbappe@gmail.com",
      phone: "+34 91 123 4567",
      location: "Madrid, Spain",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      status: "online"
    },
    {
      id: 5,
      name: "Jude Bellingham",
      role: "Central Midfielder",
      email: "bellingham@gmail.com",
      phone: "+34 91 987 6543",
      location: "Madrid, Spain",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      status: "offline"
    },
    {
      id: 6,
      name: "Kevin De Bruyne",
      role: "Playmaker / Midfielder",
      email: "debruyne@gmail.com",
      phone: "+44 161 555 0123",
      location: "Manchester, UK",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      status: "online"
    }
  ];

  return (
    <div className="social-app">
      <header className="app-header">
        <h1 className="title">Contact Cards</h1>
        <p className="subtitle">Connect directly with team members and colleagues</p>
      </header>

      <div className="contact-grid">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </div>
  );
}