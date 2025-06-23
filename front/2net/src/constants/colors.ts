// Cores base para o sistema de design
export const colors = {
  // Cores primárias
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },

  // Cores neutras
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },

  // Cores de sucesso
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },

  // Cores de aviso
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },

  // Cores de erro
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  // Cores de informação
  info: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
} as const;

// Mapeamento de cores por tema usando variáveis CSS
export const themeColors = {
  light: {
    // Cores de fundo
    background: {
      primary: 'rgb(250, 250, 250)',
      secondary: 'rgb(245, 245, 245)',
      tertiary: 'rgb(229, 229, 229)',
      card: 'rgb(255, 255, 255)',
      overlay: 'rgba(0, 0, 0, 0.5)',
    },
    
    // Cores de texto
    text: {
      primary: 'rgb(23, 23, 23)',
      secondary: 'rgb(64, 64, 64)',
      tertiary: 'rgb(115, 115, 115)',
      inverse: 'rgb(250, 250, 250)',
      disabled: 'rgb(163, 163, 163)',
    },
    
    // Cores de borda
    border: {
      primary: 'rgb(229, 229, 229)',
      secondary: 'rgb(212, 212, 212)',
      focus: 'rgb(59, 130, 246)',
      error: 'rgb(239, 68, 68)',
    },
    
    // Cores interativas
    interactive: {
      primary: 'rgb(37, 99, 235)',
      primaryHover: 'rgb(29, 78, 216)',
      secondary: 'rgb(245, 245, 245)',
      secondaryHover: 'rgb(229, 229, 229)',
      disabled: 'rgb(212, 212, 212)',
    },
    
    // Cores de status
    status: {
      success: 'rgb(22, 197, 94)',
      warning: 'rgb(245, 158, 11)',
      error: 'rgb(239, 68, 68)',
      info: 'rgb(14, 165, 233)',
    },
  },
  
  dark: {
    // Cores de fundo
    background: {
      primary: 'rgb(15, 23, 42)',
      secondary: 'rgb(30, 41, 59)',
      tertiary: 'rgb(51, 65, 85)',
      card: 'rgb(30, 41, 59)',
      overlay: 'rgba(0, 0, 0, 0.7)',
    },
    
    // Cores de texto
    text: {
      primary: 'rgb(241, 245, 249)',
      secondary: 'rgb(203, 213, 225)',
      tertiary: 'rgb(148, 163, 184)',
      inverse: 'rgb(15, 23, 42)',
      disabled: 'rgb(100, 116, 139)',
    },
    
    // Cores de borda
    border: {
      primary: 'rgb(51, 65, 85)',
      secondary: 'rgb(71, 85, 105)',
      focus: 'rgb(56, 189, 248)',
      error: 'rgb(248, 113, 113)',
    },
    
    // Cores interativas
    interactive: {
      primary: 'rgb(56, 189, 248)',
      primaryHover: 'rgb(14, 165, 233)',
      secondary: 'rgb(51, 65, 85)',
      secondaryHover: 'rgb(71, 85, 105)',
      disabled: 'rgb(51, 65, 85)',
    },
    
    // Cores de status
    status: {
      success: 'rgb(52, 211, 153)',
      warning: 'rgb(251, 191, 36)',
      error: 'rgb(248, 113, 113)',
      info: 'rgb(56, 189, 248)',
    },
  },
} as const;

// Função utilitária para obter cores do tema
export function getThemeColors(theme: 'light' | 'dark') {
  return themeColors[theme];
}

// Variáveis CSS para uso direto em CSS
export const cssVariables = {
  light: {
    '--color-bg-primary': '250 250 250',
    '--color-bg-secondary': '245 245 245',
    '--color-bg-tertiary': '229 229 229',
    '--color-bg-card': '255 255 255',
    '--color-bg-overlay': 'rgba(0, 0, 0, 0.5)',
    
    '--color-text-primary': '23 23 23',
    '--color-text-secondary': '64 64 64',
    '--color-text-tertiary': '115 115 115',
    '--color-text-inverse': '250 250 250',
    '--color-text-disabled': '163 163 163',
    
    '--color-border-primary': '229 229 229',
    '--color-border-secondary': '212 212 212',
    '--color-border-focus': '59 130 246',
    '--color-border-error': '239 68 68',
    
    '--color-interactive-primary': '37 99 235',
    '--color-interactive-primary-hover': '29 78 216',
    '--color-interactive-secondary': '245 245 245',
    '--color-interactive-secondary-hover': '229 229 229',
    '--color-interactive-disabled': '212 212 212',
    
    '--color-status-success': '22 197 94',
    '--color-status-warning': '245 158 11',
    '--color-status-error': '239 68 68',
    '--color-status-info': '14 165 233',
  },
  dark: {
    '--color-bg-primary': '15 23 42',
    '--color-bg-secondary': '30 41 59',
    '--color-bg-tertiary': '51 65 85',
    '--color-bg-card': '30 41 59',
    '--color-bg-overlay': 'rgba(0, 0, 0, 0.7)',
    
    '--color-text-primary': '241 245 249',
    '--color-text-secondary': '203 213 225',
    '--color-text-tertiary': '148 163 184',
    '--color-text-inverse': '15 23 42',
    '--color-text-disabled': '100 116 139',
    
    '--color-border-primary': '51 65 85',
    '--color-border-secondary': '71 85 105',
    '--color-border-focus': '56 189 248',
    '--color-border-error': '248 113 113',
    
    '--color-interactive-primary': '56 189 248',
    '--color-interactive-primary-hover': '14 165 233',
    '--color-interactive-secondary': '51 65 85',
    '--color-interactive-secondary-hover': '71 85 105',
    '--color-interactive-disabled': '51 65 85',
    
    '--color-status-success': '52 211 153',
    '--color-status-warning': '251 191 36',
    '--color-status-error': '248 113 113',
    '--color-status-info': '56 189 248',
  },
} as const;

// Definições de tipos
export type ColorTheme = 'light' | 'dark';
export type ColorCategory = keyof typeof colors;
export type ColorShade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
