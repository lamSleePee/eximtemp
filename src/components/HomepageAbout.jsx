import "./HomepageAboutStyles.css"

function HomepageAbout(){
    return(
        <>
        <div className="home-page-about">
        <div className="home-page-main">
            <div className="home-page-about-text">
                <h2 className="home-page-about-title">About Us</h2>
                <p>
                    Welcome to Exim Pinnacle, your trusted partner in global trade. We specialize in exporting a wide range of high-quality products, including textiles, spices, handicrafts, and more. Our mission is to connect businesses worldwide with the best products from our region, ensuring quality and reliability in every transaction.
                </p>

               {/*  <p className="why-qn">Why Chose Us?</p>
                <ul className="home-page-choose-us">
                    <li>Expertise in international trade and compliance.</li>
                    <li>Commitment to quality and customer satisfaction.</li>
                    <li>Wide network of suppliers and buyers across the globe.</li>
                </ul> */}
            </div>
            <div className="home-page-about-image">
                <img className="about-main-image" src="/hero1.jpg" alt="" />
            </div>
        </div>
        </div>
        </>
    )

    //sc1
}

export default HomepageAbout;