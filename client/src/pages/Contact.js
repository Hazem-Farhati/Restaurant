import React from 'react'
import ContactBanner from '../component/ContactBanner';
import ContactEmail from '../component/ContactEmail';
import GoogleMap from '../component/GoogleMap';
import "../styles/contact.css"
import "../styles/map.css"

const Contact = () => {
  return (
    <>
      <div className="all_contact">
        <ContactBanner />
              <GoogleMap />
              <ContactEmail/>
      </div>
    </>
  );
}

export default Contact