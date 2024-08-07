'use client';
import { ThemeProvider } from 'next-themes';

import React from 'react'

export default function Provider({children}) {
  return (
    <ThemeProvider  defaultTheme="system" attribute="class">
        <div className="text-gray-700 dark:text-gray-200 dark:bg-black min-h-screen select-none transition-colors duration-500">
            {children}
        </div>
    </ThemeProvider>
  )
}
