import Contact from './component/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0', color: '#0f172a' }}>singers information</h1>
        <h1></h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>singers Contacts & Details</p>
      </header>

      <div className="contacts-list">
        <Contact
          name="Tewodros Kassahun"
          email="Tewodros@gmail.com"
          phone="+251 7911 123456"
          profile_picture="teddy.webp"
        />
        <Contact
          name="Mehammod Ahmed"
          email="mehammod@gmail.com"
          phone="+251 305 555 0199"
          profile_picture="mehamood.webp"
        />
        <Contact
          name="Alemayehu Eshete"
          email="alemayehu@gmail.com"
          phone="+251 11 123 4567"
          profile_picture="alemayehu.webp"
        />
        <Contact
          name="Egigayew Shibabaw"
          email="egigayew@gmail.com"
          phone="+251 11 987 6543"
          profile_picture="gigi.webp"
        />

        <Contact
          name="Aster Aweke"
          email="aster@gmail.com"
          phone="+251 555 1234567"
          profile_picture="aster.webp"
        />
      </div>
    </div>
  );
}

export default App;
