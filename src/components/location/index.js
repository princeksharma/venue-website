import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.222841520866!2d77.22238461455801!3d28.563070393973305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2446be518a1%3A0xaaab49893540cf0f!2sAnsal+Plaza%2C+Main+Road%2C+August+Kranti+Marg%2C+Hudco+Place%2C+Andrews+Ganj+Extension%2C+Andrews+Ganj%2C+New+Delhi%2C+Delhi+110049!5e0!3m2!1sen!2sin!4v1545528670456"
          width="100%"
          height="500px"
          frameBorder="0"
          allowFullScreen
        ></iframe>

         <div className="location_tag">
            <div>Location</div>
         </div>

    </div>
  )
}

export default Location;
