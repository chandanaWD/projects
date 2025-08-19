import React from 'react'

const Help = () => {
  return (
    <div className='contact p-4'>
      <h2> HELP </h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">

        <div className="col">
          <div className="card">
            <div className="card-body">

              <h5>Our Address</h5>
              <p>1st Floor MGM Capital, Chinnakakani(V), Mangalagiri(M), Guntur, District-522503</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5>Email Us</h5>
              <p>sic-ap@gov.in</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5>Opening Hours</h5>
              <p>
                <strong>Mon-Fri:</strong> 10:00AM - 5:30PM<br />
                <strong>Saturday-Sunday:</strong> Closed
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5>Call Us</h5>
              <p>0863 23 87 345</p>
            </div>
          </div>
        </div>

      </div>

      {/* Clickable Map Section */}
      <div className="mt-4">
        <h5 className="text-lg font-bold mb-2">Location Map</h5>
        <a 
          href="https://www.google.com/maps/search/sic+ap+mangalagiri/@16.4135523,80.5655661,845m/data=!3m1!1e3?hl=en&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <iframe
            title="AP Information Commission Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4340.633350930247!2d80.5614999!3d16.4108353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f12448573cff%3A0xb13bc26f8712b4a9!2sAndhra%20Pradesh%20Information%20Commission!5e0!3m2!1sen!2sin!4v1642749332743!5m2!1sen!2sin"
            width="200%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </a>
      </div>
    </div>
  )
}

export default Help;
