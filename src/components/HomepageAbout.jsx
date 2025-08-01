import "./HomepageAboutStyles.css"

function HomepageAbout(){
    return(
        <>
        <div className="home-page-about">
        <div className="home-page-main">
            <div className="home-page-about-text">
                <h2 className="home-page-about-title">About Us</h2>
                <p>
                Exim Pinnacle, established in the year 2025, is a government-registered Merchant Export Company headquartered in Pune, India. Proudly recognized under the MSME framework, we are committed to connecting India's finest products with global markets through reliable, ethical, and efficient export practices.
<br/>
Driven by a vision to represent India’s vast production capabilities on the world stage, we specialize in the export of a diverse portfolio of high-quality goods. Our core products include Apparel, Jute Products, Makhana, Leather, Handicrafts, Indian Spices, Egg Powder, Dehydrated Fruits,  Carpets, and Biofuels. Every product we deliver reflects the richness of Indian craftsmanship, sustainability, and global quality standards.
<br/>
<br/>
From sourcing directly from trusted Indian manufacturers to managing end-to-end documentation, logistics, and compliance, we ensure a seamless and transparent export experience for our international buyers. Whether you are a retailer, distributor, or import agent, Exim Pinnacle delivers with excellence — every time.
<br/> <br/>
With a growing international footprint and a dedication to trade transparency, Exim Pinnacle is your trusted partner in taking Indian products to the world.
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