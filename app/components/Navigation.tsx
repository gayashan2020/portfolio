'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../utils/theme'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useTheme()

  const links = [
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Experience' },
    { href: '#projects', text: 'Projects' },
    { href: '#skills', text: 'Skills' },
    { href: '#publications', text: 'Publications' },
    { href: '#education', text: 'Education' },
    { href: '#contact', text: 'Contact' },
  ]

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a href="#" className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <span className="bg-blue-500 text-white p-2 rounded mr-2">GW</span>
            Gayashan Weerasundara
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium relative"
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-800 pb-3 px-4 shadow-lg`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  )
}