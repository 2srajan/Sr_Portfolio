import React from 'react';
import { BsX, BsInstagram, } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://x.com/SrajanSing" target="_blank" rel="noopener noreferrer">
        <BsX />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/profile.php?id=100086648052778" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/srajan_singh__/" target="_blank" rel="noopener noreferrer">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/srajan-singh-688267235/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn />
      </a>
    </div>


    <div>
      <a href="https://www.github.com/2srajan" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
