import Link from "next/link";
import { motion } from "framer-motion";

export default function FancyFooter() {
  const links = {
    track: [
      { label: "Water", href: "/water" },
      { label: "Waste", href: "/waste" },
      { label: "Energy", href: "/energy" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="display text-2xl font-bold text-gray-900">
              Sustainable UAE
            </Link>
            <p className="text-gray-500 mt-4 max-w-sm">
              Track your environmental impact with simple daily habits. 
              Small actions lead to big changes.
            </p>
            
            {/* Newsletter */}
            <div className="mt-6 flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:outline-none flex-1"
              />
              <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Track</h4>
            <ul className="space-y-3">
              {links.track.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-500 hover:text-[#0077B6] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-500 hover:text-[#0077B6] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Sustainable UAE. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0077B6] hover:text-white transition-all"
              >
                {social[0]}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}