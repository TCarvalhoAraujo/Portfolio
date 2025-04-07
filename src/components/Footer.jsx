import React from "react";

function Footer() {
  return (
    <footer className="text-center py-4 mt-5">
      <div>
        <p>
          © 2025 Thiago Araujo | All Rights Reserved
        </p>
        <div>
        </div>
        <div className="mt-3">
          <a href="https://github.com/TCarvalhoAraujo" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/thiago-araujo-5939a7313/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;