import "./FoundersStyles.css";

function Founders() {
  return (
    <div className="founders-main">
      <div className="founders-container">
        <h2>Our Founders</h2>
        <div className="founders-grid">
          <div className="founder-card">
            <div className="founder-image">
              <img src="/jagjot.JPG" alt="Jagjot - Founder" />
            </div>
            <div className="founder-info">
              <h3>Jagjot</h3>
              <p className="founder-title">Founder</p>
              <p className="founder-description">
                Jagjot is an enthusiastic entrepreneur and Computer Science Engineering graduate with a strong passion for business, innovation, and social impact. He has successfully organized and managed multiple India-level events and has represented India as a delegate at G20, IF20, and Y20, showcasing his leadership and global networking abilities.
              </p>
              <p className="founder-description">
                Deeply committed to uplifting Indian artisans and creators, Jagjot works to bring global recognition to traditional handicrafts and products that often remain undiscovered. By representing these creators to international markets, he aims to bridge the gap between local talent and global opportunities.
              </p>
            </div>
          </div>
          
          <div className="founder-card">
            <div className="founder-image">
              <img src="/sumeet.JPG" alt="Sumeet - Co-Founder" />
            </div>
            <div className="founder-info">
              <h3>Sumeet</h3>
              <p className="founder-title">Co-Founder</p>
              <p className="founder-description">
                Sumeet brings over 18 years of rich corporate experience with leading global brands in India, specializing in B2B and B2C sales, channel development, and strategic market expansion. An MBA in Marketing & International Business, he has a proven track record in driving revenue growth, distributor appointment, inventory planning, and team training.
              </p>
              <p className="founder-description">
                With an extensive network of manufacturers and suppliers across India, Sumeet has played a pivotal role in identifying and tapping into new domestic and international business opportunities. Currently based in Europe, he is focused on expanding the company's global footprint and offering hands-on support to international buyers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founders; 