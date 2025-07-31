import "./CommunityServiceStyles.css"
function CommunityService(){
  return (
    <>
        <div className="csr-main-div">
            <div className="csr-text">
                <h2>Driving Impact Beyond Business</h2>
                <p>At Exim Pinnacle, we believe that businesses thrive when communities thrive. Our Helping Hands initiatives are driven by a deep commitment to sustainability, inclusion, and social impact. We don't just aim to do business—we strive to do good.</p>

                <div className="csr-points-container">
                    <div className="csr-points">
                        <h3>Sustainable by Design</h3>
                        <p>We use eco-friendly, recyclable, and biodegradable packaging to reduce waste and protect the planet.</p>
                    </div>

                    <div className="csr-points">
                        <h3>Empowering Young Minds</h3>
                        <p>A part of every trade supports education for underprivileged children through supplies and scholarships.</p>
                    </div>

                    <div className="csr-points">
                        <h3>Together We Rise</h3>
                        <p>From disaster relief to community development, we partner with local organizations to make a lasting difference.</p>
                    </div>

                    <div className="csr-points">
                        <h3>Nourishing Lives</h3>
                        <p>We contribute to food relief efforts, feeding families, orphanages, and communities in need.</p>
                    </div>
                </div>
            </div>

            <div className="csr-image">
                <img src="/csr-sectionimage.jpg" alt="" />
            </div>
            
        </div>
    </>
  );
}

export default CommunityService;