'use client';

import React from 'react';
import { useLoginController } from './controller';
import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

// A simple solid user icon component to match the image
const UserIcon = (props: React.ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      clipRule="evenodd"
    />
  </svg>
);

export function LoginPage() {
  const c = useLoginController();
  const { theme, toggleTheme, isLoaded } = useTheme();

  return (
    // Main container now uses semantic colors from COLORS.md
    <div className="relative min-h-screen flex flex-col bg-background-primary font-sans text-text-primary">
      {/* Theme Toggle Button now uses semantic colors */}
      <div className="absolute top-4 right-4 z-10">
        {isLoaded ? (
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-background-secondary/50 hover:bg-background-tertiary/80 backdrop-blur-sm transition-colors duration-200 border border-border-primary/50 shadow-lg"
            aria-label={`Mudar para modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-text-primary" />
            ) : (
              <Moon className="w-5 h-5 text-text-primary" />
            )}
          </button>
        ) : (
          <div className="w-11 h-11 rounded-full bg-background-secondary animate-pulse" />
        )}
      </div>

      {/* Login Form Container */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-sm p-4">
          <div className="flex justify-center mb-8">
            <UserIcon className="w-28 h-28 text-text-primary" />
          </div>

          <form className="space-y-6" onSubmit={c.handleSubmit}>
            <div className="flex items-center gap-2" >
              <label htmlFor="email" className="w-16 text-right font-serif font-bold text-text-secondary">
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="email@gmail.com"
                className="flex-1 px-5 py-3 bg-background-card text-text-primary placeholder:text-text-tertiary border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-border-focus"
                value={c.formData.email}
                onChange={c.handleInputChange}
              />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="password" className="w-16 text-right font-serif font-bold text-text-secondary">
                SENHA
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="********"
                className="flex-1 px-5 py-3 bg-background-card text-text-primary placeholder:text-text-tertiary border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-border-focus"
                value={c.formData.password}
                onChange={c.handleInputChange}
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-interactive-primary hover:bg-interactive-primary-hover text-text-inverse text-lg font-serif font-bold tracking-wider rounded-full transition-colors duration-300 shadow-md"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 