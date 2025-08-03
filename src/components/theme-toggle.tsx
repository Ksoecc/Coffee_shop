"use client"

import { useTheme } from "./theme-provider"
import { useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themes = [
    { value: "light", label: "Açık", icon: "☀️" },
    { value: "dark", label: "Koyu", icon: "🌙" },
    { value: "system", label: "Sistem", icon: "💻" },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
        aria-label="Tema değiştir"
      >
        <span className="text-lg">
          {themes.find(t => t.value === theme)?.icon || "☀️"}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-muted rounded-lg shadow-lg z-50">
          {themes.map((t) => (
            <button
              key={t.value}
              onClick={() => {
                setTheme(t.value as "light" | "dark" | "system")
                setIsOpen(false)
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-muted transition-colors ${
                theme === t.value ? "bg-primary/10 text-primary" : ""
              }`}
            >
              <span className="text-lg">{t.icon}</span>
              <span>{t.label}</span>
              {theme === t.value && (
                <svg
                  className="w-4 h-4 ml-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
} 