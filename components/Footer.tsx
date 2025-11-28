'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Integrations', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'YouTube', href: '#', icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-800">
          {/* Brand Column - Takes more space */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight inline-flex items-center gap-2">
              <span className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                T
              </span>
              TaskFlow
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Streamline your workflow. Automate the mundane. Focus on what matters most to your team.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-violet-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h4>
            <div className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-400 hover:text-violet-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Support</h4>
            <div className="flex flex-col gap-4">
              {footerLinks.support.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-400 hover:text-violet-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Resources</h4>
            <div className="flex flex-col gap-4">
              {footerLinks.resources.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-400 hover:text-violet-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
