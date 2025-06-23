'use client'

import { ThemeToggle } from './ThemeToggle'

export function ColorDemo() {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-text-primary">
            Sistema de Cores - Tailwind CSS 4.1
          </h1>
          <ThemeToggle />
        </div>

        {/* Cores de Fundo */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text-primary">Cores de Fundo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-background-primary border border-border-primary">
              <h3 className="font-medium text-text-primary">Primary</h3>
              <p className="text-sm text-text-secondary">bg-background-primary</p>
            </div>
            <div className="p-4 rounded-lg bg-background-secondary border border-border-primary">
              <h3 className="font-medium text-text-primary">Secondary</h3>
              <p className="text-sm text-text-secondary">bg-background-secondary</p>
            </div>
            <div className="p-4 rounded-lg bg-background-tertiary border border-border-primary">
              <h3 className="font-medium text-text-primary">Tertiary</h3>
              <p className="text-sm text-text-secondary">bg-background-tertiary</p>
            </div>
            <div className="p-4 rounded-lg bg-background-card border border-border-primary">
              <h3 className="font-medium text-text-primary">Card</h3>
              <p className="text-sm text-text-secondary">bg-background-card</p>
            </div>
          </div>
        </section>

        {/* Cores de Texto */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text-primary">Cores de Texto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-background-card border border-border-primary">
              <h3 className="font-medium text-text-primary">Primary</h3>
              <p className="text-sm text-text-primary">text-text-primary</p>
            </div>
            <div className="p-4 rounded-lg bg-background-card border border-border-primary">
              <h3 className="font-medium text-text-secondary">Secondary</h3>
              <p className="text-sm text-text-secondary">text-text-secondary</p>
            </div>
            <div className="p-4 rounded-lg bg-background-card border border-border-primary">
              <h3 className="font-medium text-text-tertiary">Tertiary</h3>
              <p className="text-sm text-text-tertiary">text-text-tertiary</p>
            </div>
            <div className="p-4 rounded-lg bg-background-card border border-border-primary">
              <h3 className="font-medium text-text-disabled">Disabled</h3>
              <p className="text-sm text-text-disabled">text-text-disabled</p>
            </div>
            <div className="p-4 rounded-lg bg-interactive-primary border border-border-primary">
              <h3 className="font-medium text-text-inverse">Inverse</h3>
              <p className="text-sm text-text-inverse">text-text-inverse</p>
            </div>
          </div>
        </section>

        {/* Cores de Borda */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text-primary">Cores de Borda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-background-card border-2 border-border-primary">
              <h3 className="font-medium text-text-primary">Primary</h3>
              <p className="text-sm text-text-secondary">border-border-primary</p>
            </div>
            <div className="p-4 rounded-lg bg-background-card border-2 border-border-secondary">
              <h3 className="font-medium text-text-primary">Secondary</h3>
              <p className="text-sm text-text-secondary">border-border-secondary</p>
            </div>
            <div className="p-4 rounded-lg bg-background-card border-2 border-border-focus">
              <h3 className="font-medium text-text-primary">Focus</h3>
              <p className="text-sm text-text-secondary">border-border-focus</p>
            </div>
            <div className="p-4 rounded-lg bg-background-card border-2 border-border-error">
              <h3 className="font-medium text-text-primary">Error</h3>
              <p className="text-sm text-text-secondary">border-border-error</p>
            </div>
          </div>
        </section>

        {/* Cores Interativas */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text-primary">Cores Interativas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button className="p-4 rounded-lg bg-interactive-primary hover:bg-interactive-primary-hover text-text-inverse transition-colors duration-200">
              Primary Button
            </button>
            <button className="p-4 rounded-lg bg-interactive-secondary hover:bg-interactive-secondary-hover text-text-primary border border-border-primary transition-colors duration-200">
              Secondary Button
            </button>
            <button className="p-4 rounded-lg bg-interactive-disabled text-text-disabled cursor-not-allowed">
              Disabled Button
            </button>
          </div>
        </section>

        {/* Cores de Status */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text-primary">Cores de Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-status-success/10 border border-status-success/20">
              <h3 className="font-medium text-status-success">Success</h3>
              <p className="text-sm text-text-secondary">bg-status-success</p>
            </div>
            <div className="p-4 rounded-lg bg-status-warning/10 border border-status-warning/20">
              <h3 className="font-medium text-status-warning">Warning</h3>
              <p className="text-sm text-text-secondary">bg-status-warning</p>
            </div>
            <div className="p-4 rounded-lg bg-status-error/10 border border-status-error/20">
              <h3 className="font-medium text-status-error">Error</h3>
              <p className="text-sm text-text-secondary">bg-status-error</p>
            </div>
            <div className="p-4 rounded-lg bg-status-info/10 border border-status-info/20">
              <h3 className="font-medium text-status-info">Info</h3>
              <p className="text-sm text-text-secondary">bg-status-info</p>
            </div>
          </div>
        </section>

        {/* Cores Base */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-text-primary">Cores Base</h2>
          <div className="space-y-4">
            {/* Primary */}
            <div>
              <h3 className="font-medium text-text-primary mb-2">Primary</h3>
              <div className="grid grid-cols-11 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div
                    key={shade}
                    className={`h-12 rounded border border-border-primary bg-primary-${shade}`}
                    title={`primary-${shade}`}
                  />
                ))}
              </div>
            </div>

            {/* Neutral */}
            <div>
              <h3 className="font-medium text-text-primary mb-2">Neutral</h3>
              <div className="grid grid-cols-11 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div
                    key={shade}
                    className={`h-12 rounded border border-border-primary bg-neutral-${shade}`}
                    title={`neutral-${shade}`}
                  />
                ))}
              </div>
            </div>

            {/* Success */}
            <div>
              <h3 className="font-medium text-text-primary mb-2">Success</h3>
              <div className="grid grid-cols-11 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                  <div
                    key={shade}
                    className={`h-12 rounded border border-border-primary bg-success-${shade}`}
                    title={`success-${shade}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 