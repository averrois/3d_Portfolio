import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaFigma} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="secondary">
      <div className="max-w-screen-xl px-2 py-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mt-8 space-x-6">
          <a href="https://www.facebook.com/yassin.aru/" target='_blank' className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/yassine-ait-rahou-4b9a121b7/" target='_blank' className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/Yassin-Aru" target='_blank' className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://www.figma.com/@booma_" target='_blank' className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Figma</span>
            <FaFigma className="w-6 h-6" />
          </a>
        </div>
        <p className="font-mono mt-8 text-base leading-6 text-center text-white">
          © {currentYear} Yassin Aru, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;