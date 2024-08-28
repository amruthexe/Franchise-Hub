import React from 'react';
import image from '../assets/image.png'
const mapContainerStyle = {
  width: '100%',
  height: '300px',
};

const ConnectWithUs = () => {
  return (<>
    <hr className="border-gray-600 mb-8" />
    <div className="text-center">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide ">
        Connect With Us. {" "}
        </h2>
      </div>
    <div className="bg-black-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4"><span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Our Loaction
          </span></h3>
            {/* Replace Google Map with a Dummy Map Image */}
            <div style={mapContainerStyle}>
              <img  className='rounded'
                src={image}
                alt="Map Placeholder" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-10 mb-6"> <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Opening Hours
          </span></h3>
            <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="mb-2">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="mb-2">Sunday: Closed</p>
            <h3 className="text-xl font-semibold mb-4 mt-8"><span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Contacting Information
          </span></h3>
            <p className="mb-2">Phone: +91 9392855968</p>
            <p className="mb-2">Email: contact@franchisehub.com</p>
            <p className="mb-2">Address: 123 Main Street, Bapatla, Andhara Pradesh</p>
          </div>
        </div>
      </div>
    </div>
    </>);
};

export default ConnectWithUs;
