import "./GoogleMapLocationStyles.css"

function GooglemapsLocation(){
    return(
        <>
            <div className="gmap-main">
                <div className="gmap-text">
                    <h2>Visit Us</h2>
                    <p>We are located in the heart of the city, easily accessible by public transport.</p>
                    <p className="address"><i class="fa-solid fa-house"></i>  <a className='gmap-icon' href="https://www.google.com/maps/place/Exim+Pinnacle+Enterprises/@18.5752515,73.7662661,17z/data=!3m1!4b1!4m6!3m5!1s0xaaeb5a9d0808ea71:0xc440ce0f3d7f1604!8m2!3d18.5752515!4d73.7662661!16s%2Fg%2F11xl9mq5s6?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D">Exim Pinnacle Enterprises, TBL Space, Balewadi Plaza, Balewadi, Pune, Maharashtra 411025</a></p>
                    <p className="email"><i class="fa-solid fa-envelope"></i> <a className='gmap-icon' href="mailto:Info@eximpinnacle.com">Info@eximpinnacle.com</a></p>
                    <p className="phoneNo"><i class="fa-solid fa-phone"></i>  <a className='gmap-icon' href="tel:9607799399">9607799399</a> / <a className='gmap-icon' href="tel:7350599399">7350599399</a></p> 
                </div>
                <div className="gmap-embed">
                    <div style={{ width: '400px', height: '300px' }}>
                      <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3993.7240795607213!2d73.7662661!3d18.575251500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaaeb5a9d0808ea71%3A0xc440ce0f3d7f1604!2sExim%20Pinnacle%20Enterprises!5e1!3m2!1sen!2sin!4v1753422654896!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GooglemapsLocation;