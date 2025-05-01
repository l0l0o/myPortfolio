import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`py-6 border-t border-gray-200 mt-8 ${className || ""}`}>
      <div className="text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Loïc CAILLÉ.</p>
      </div>
    </footer>
  );
};

export default Footer;
