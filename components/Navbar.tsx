'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="font-bold text-xl gradient-text">BrandName</a>
        <nav className="hidden md:flex gap-8">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex gap-3">
          <a href="#contact" className="px-4 py-2 text-sm font-medium rounded-md border border-brand-500 text-brand-600 hover:bg-brand-50">
            Contact
          </a>
          <a href="#pricing" className="px-4 py-2 text-sm font-medium rounded-md bg-brand-600 text-white hover:bg-brand-700">
            Get Started
          </a>
        </div>
        <button
          className="md:hidden p-2"
          aria-label="Toggle Menu"
          onClick={() => setOpen(o => !o)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#pricing" className="text-sm font-semibold text-brand-600">
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}