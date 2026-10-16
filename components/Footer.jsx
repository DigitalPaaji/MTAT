import React from "react";
import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaPhoneAlt, 
  FaEnvelope 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 pt-16 pb-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-40 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Column 1: Logo & Tagline */}
        <div className="space-y-4">
          <Link href="/" className="inline-block bg-white/5 p-2 rounded-lg border border-white/10">
            <img
              src="/Images/logo.webp"
              alt="MTAT Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-gray-800 leading-relaxed">
            One Stop Solution Providers. Advanced CNC machinery, automated tooling solutions, and precision manufacturing for global industries.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#467B23] mb-4">
            Links
          </h4>
          <ul className="space-y-2.5 text-sm text-gray-800">
            <li>
              <Link href="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link href="/strength" className="hover:text-white transition">Strength</Link>
            </li>
            <li>
              <Link href="/our-presence" className="hover:text-white transition">Our Presence</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#467B23] mb-4">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm text-gray-800">
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="text-[#004DA3] mt-1 shrink-0 text-xs" />
              <div>
                <p>0160-4624748, 4635748</p>
                <p className="text-xs text-gray-400 mt-0.5">Fax: 0160-4634748</p>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#004DA3] shrink-0 text-xs" />
              <a href="mailto:info@mtaindia.in" className="hover:text-white transition">
                info@mtaindia.in
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Connect With Us & Socials */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#467B23] mb-4">
            Connect With Us
          </h4>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/people/MTAT-Technologies-Private-Limited/61562506565764/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded bg-black/40 border border-white/15 flex items-center justify-center text-gray-800 hover:bg-[#004DA3] hover:text-white transition duration-300"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a
              href="https://www.instagram.com/mtattpl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded bg-black/40 border border-white/15 flex items-center justify-center text-gray-800 hover:bg-[#467B23] hover:text-white transition duration-300"
            >
              <FaInstagram className="text-sm" />
            </a>
            <a
              href="https://in.linkedin.com/company/mtat-technologies-private-limited"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded bg-black/40 border border-white/15 flex items-center justify-center text-gray-800 hover:bg-[#004DA3] hover:text-white transition duration-300"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
            <a
              href="https://www.youtube.com/@mtatpl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded bg-black/40 border border-white/15 flex items-center justify-center text-gray-800 hover:bg-[#467B23] hover:text-white transition duration-300"
            >
              <FaYoutube className="text-sm" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <p>© 2026 MTAT Technologies Private Limited. All rights reserved.</p>
        <p className="text-[#467B23] font-medium">Precision Engineering Solutions</p>
      </div>
    </footer>
  );
}