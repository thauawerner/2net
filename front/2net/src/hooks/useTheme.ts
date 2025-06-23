import { useTheme as useNextTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'

interface UseThemeReturn {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark' | undefined
  isLoaded: boolean
  toggleTheme: () => void
  isDark: boolean
  isLight: boolean
}

/**
 * Custom hook for theme management using next-themes
 * Provides a clean interface for theme switching and state management
 */
export function useTheme(): UseThemeReturn {
  const { theme, setTheme, resolvedTheme } = useNextTheme()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const isDark = resolvedTheme === 'dark'
  const isLight = resolvedTheme === 'light'

  return {
    theme: (theme as Theme) || 'system',
    setTheme: (newTheme: Theme) => setTheme(newTheme),
    resolvedTheme: resolvedTheme as 'light' | 'dark' | undefined,
    isLoaded,
    toggleTheme,
    isDark,
    isLight,
  }
}

/**
 * Hook to get only the current theme value
 * Useful when you only need the theme state without the full interface
 */
export function useThemeValue(): Theme {
  const { theme } = useTheme()
  return theme
}

/**
 * Hook to check if the current theme is dark
 * Returns true if the resolved theme is dark, false otherwise
 */
export function useIsDark(): boolean {
  const { isDark } = useTheme()
  return isDark
}

/**
 * Hook to check if the current theme is light
 * Returns true if the resolved theme is light, false otherwise
 */
export function useIsLight(): boolean {
  const { isLight } = useTheme()
  return isLight
} 