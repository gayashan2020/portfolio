'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type ThemeContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType>({
    darkMode: false,
    toggleDarkMode: () => {}
  });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode')
    setDarkMode(savedTheme === 'enabled')
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', !darkMode ? 'enabled' : 'disabled')
    document.body.classList.toggle('dark', !darkMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
