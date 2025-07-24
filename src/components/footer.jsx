 import './footerStyles.css'
 function Footer(){
    return(
        <div className="footer-outer">
            <div className="contactinfo">
                <h2>Contact</h2>

                <p className="address"><i class="fa-solid fa-house"></i>  <a className='footercoms' href="https://www.google.com/maps/place/Exim+Pinnacle+Enterprises/@18.5752515,73.7662661,17z/data=!3m1!4b1!4m6!3m5!1s0xaaeb5a9d0808ea71:0xc440ce0f3d7f1604!8m2!3d18.5752515!4d73.7662661!16s%2Fg%2F11xl9mq5s6?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D">Exim Pinnacle Enterprises, TBL Space, Balewadi Plaza, Balewadi, Pune, Maharashtra 411025</a></p>
                <p className="email"><i class="fa-solid fa-envelope"></i> <a className='footercoms' href="mailto:Info@eximpinnacle.com">Info@eximpinnacle.com</a></p>
                <p className="phoneNo"><i class="fa-solid fa-phone"></i>  <a className='footercoms' href="tel:9607799399">9607799399</a> / <a className='footercoms' href="tel:7350599399">7350599399</a></p> 
            </div>

            <div className="socials">
                <h2>Connect</h2>
            <div className="social-media-icons">
            <i class="LinkedIn fa-brands fa-linkedin"></i>
            <i class="Instagram fa-brands fa-instagram"></i>
            <i class="Whatsapp fa-brands fa-whatsapp"></i>
            <i class="Twitter fa-brands fa-x-twitter"></i>
            </div>
            </div>

            <div className="license">
                
                <img src="/Logo.png" alt="" />
                    <p className="copyrightfooter">© Exim Pinnacle, 2025, All Rights Reserved.</p>
                    
            </div>
        </div>
    )
 }

 export default Footer