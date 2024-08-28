import React from 'react';
import './ScrollingLogos.css';

const ScrollingLogos = () => {
  const logos = [
    'https://cdn.iconscout.com/icon/free/png-512/free-google-chrome-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722700.png?f=webp&w=256',
    'https://cdn.iconscout.com/icon/free/png-512/free-google-duo-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722701.png?f=webp&w=256',
    'https://cdn.iconscout.com/icon/free/png-512/free-google-allo-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722698.png?f=webp&w=256',
    'https://cdn.iconscout.com/icon/free/png-512/free-fiverr-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722695.png?f=webp&w=256',
    'https://cdn.iconscout.com/icon/free/png-512/free-google-adwords-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722697.png?f=webp&w=256',
    'https://cdn.iconscout.com/icon/free/png-512/free-google-adsense-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722696.png?f=webp&w=256',
    'https://cdn.iconscout.com/icon/free/png-512/free-gmail-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722694.png?f=webp&w=256',
    'https://cdn.iconscout.com/icon/free/png-512/free-opera-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722728.png?f=webp&w=256',
    'https://cdn.iconscout.com/icon/free/png-512/free-pandora-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722729.png?f=webp&w=256',
    'https://cdn.iconscout.com/icon/free/png-512/free-pepsi-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722731.png?f=webp&w=256',
  ];

  return (
  <>
  <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide mb-16">
        Our Trusted Partners {" "}
        </h2>
      </div>
    <div className="scrolling-logos">
      <div className="logo-slider">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Company ${index + 1}`} />
        ))}
        {logos.map((logo, index) => (
          <img key={index + logos.length} src={logo} alt={`Company ${index + 1}`} />
        ))}
      </div>
    </div>
    </>
  );
};

export default ScrollingLogos;
